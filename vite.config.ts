import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

function iisWebConfigPlugin() {
  return {
    name: 'vite-plugin-iis-webconfig',
    closeBundle() {
      const webConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Router" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
`;
      // outDir'yi config'ten almak için process.env kullanıyoruz
      const outDir = process.env.NODE_ENV === 'development'
        ? 'build'
        : 'C:/production-versions/npm-builds';
      writeFileSync(resolve(outDir, 'web.config'), webConfigContent, 'utf-8');
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      iisWebConfigPlugin(),
    ],
    build: {
      outDir: process.env.NODE_ENV === 'development' ? 'build' : 'C:/production-versions/npm-builds',
    },
  };
});