const path = require('path');

const ROOT_PATH = path.join(__dirname, '../');

const build = path.join(ROOT_PATH, 'build');
const src = path.join(ROOT_PATH, 'src');
const public = path.join(ROOT_PATH, 'public');
const tsconfig = path.join(ROOT_PATH, 'tsconfig.json');

module.exports = {
  src,
  build,
  public,
  tsconfig
};
