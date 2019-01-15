module.exports = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 9100),
  apiHost: process.env.APIHOST || '127.0.0.1',
  apiPort: process.env.APIPORT || '8200',
  dbHost: 'localhost',
  dbPort: '27017',
  app: {
    title: 'test',
    description: 'react-express-mongo demo',
    head: {
      titleTemplate: 'test',
      meta: [
        {
          name: 'description',
          content: 'react express demo',
        },
        { charset: 'utf-8' },
      ],
    },
  },
};
