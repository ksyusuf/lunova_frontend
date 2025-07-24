import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

function iisWebConfigPlugin(outDir: string) {
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
      writeFileSync(resolve(outDir, 'web.config'), webConfigContent, 'utf-8');
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const outDir = env.VITE_ENVIRONMENT === 'development'
    ? 'dist'
    : 'C:/production-versions/npm-builds';
  return {
    plugins: [
      react(),
      iisWebConfigPlugin(outDir),
    ],
    build: {
      outDir,
    },
  };
});