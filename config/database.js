module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'tuga-freela'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'TugaFreela@2020'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      pool: {
        min: 1,
        max: 20
      },
      options: {
        
      }
    },
  },
});
