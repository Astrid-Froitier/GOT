const _env = process.env.REACT_APP_ENVIRONMENT || 'local';

const config = {
  local: {
    apiEndpoint: 'http://localhost:3000',
  },
  develop: {
    apidEndpoint: 'https://www.anapioficeandfire.com/api',
  },
}[_env];

export default config;
