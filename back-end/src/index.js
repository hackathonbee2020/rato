const moduleAlias = require('module-alias');
moduleAlias.addAliases({
  '@clients': `${__dirname}/clients`,
  '@config': `${__dirname}/config`,
  '@lib': `${__dirname}/lib`,
  '@controllers': `${__dirname}/controllers`,
  '@models': `${__dirname}/models`,
  '@repositories': `${__dirname}/repositories`,
  '@routes': `${__dirname}/routes`,
  '@services': `${__dirname}/services`,
  '@src': __dirname,
});

const app = require('@src/app');
const { server } = require('@config');

app.listen(server.port, () => {
  console.info(`Server started listen at port ${server.port}`);
});