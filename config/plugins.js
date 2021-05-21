module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'smtp',
      providerOptions: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        username: 'tugafreela@gmail.com',
        password: 'vxsfnkhocgyzxvjm', //Tugatuga01
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
      settings: {
        defaultFrom: 'tugafreela@gmail.com',
        defaultReplyTo: 'tugafreela@gmail.com',
      },
    },
    // ...
  });