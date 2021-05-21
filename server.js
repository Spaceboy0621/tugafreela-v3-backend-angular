const strapi = require('strapi');
// const worker = require('./worker.js');

strapi().start();


console.log("Thread principal")

// Inicia o worker em outra thread
// worker.startWorker(__dirname + '/api/job/controllers/user-notify.js', (err, result) => {
// 	if(err) return console.error(err)
//   console.log("** COMPUTAÇÃO PESADA FINALIZADA **")
// 	console.log(`Duração = ${(result.end - result.start) / 1000} segundos`)
// });