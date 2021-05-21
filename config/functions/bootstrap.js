'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
    var io = require('socket.io')(strapi.server, {
        cors: {
            origin: 'http://localhost:4200', //'https://tugafreela.pt',
            methods: '*',
            allowHeader: '*',
            credentials: true
        },
        allowEIO3: true
    });

    io.on('connection', (socket) => {

        socket.on('join', ( chat ) => {
            socket.join(chat.chat);
        });

        socket.on('notify', (id) => {
            socket.join(id);
        });

        socket.on('sendMessage', async ({ message, sender, receiver, attachments, read_at, chat }) => {
            try {
                io.to(chat.id).emit('newMessage', {
                    message,
                    sender: sender.id,
                    receiver,
                    attachments,
                    read_at,
                    chat
                });

            } catch(error) {
                console.log(error)
            }
        });

        socket.on('sendNotification', async ({user, job, text, read, link}) => {
            try {
                io.to(user.id).emit('newNotification', {
                    user, 
                    job,
                    text,
                    read,
                    link
                });
            } catch(error) {
                consolelog(error)
            }
        });
    });
};
