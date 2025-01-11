const fs = require('fs');
const path = require('path');

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
  webpack(config) {
    const dirPath = path.resolve(__dirname, 'components/ui/buttons');
    if (fs.existsSync(dirPath)) {
      console.log('Buttons directory contents:', fs.readdirSync(dirPath));
    } else {
      console.log('Buttons directory does not exist');
    }
    return config;
  },
};

module.exports = nextConfig;
