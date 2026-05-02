import { Link } from 'react-router-dom';
import bannerConfig from '../config/banner';

const TopBanner = () => {
  if (!bannerConfig.enabled) return null;

  return (
    <div>
      <p className="mb-0 py-3 bg-lime-500 text-center">
        {bannerConfig.message}{' '}
        <Link to={bannerConfig.linkHref} className="underline font-semibold">
          {bannerConfig.linkText}
        </Link>
        .
      </p>
    </div>
  );
};

export default TopBanner;
