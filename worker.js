const { Worker, workerData } = require('worker_threads')

module.exports = {
  startWorker(path, cb) {
    const worker = new Worker(path, { workerData: null });
    
    worker.on('message', (msg) => {
      cb(null, msg)
    });

    worker.on('error', cb);

    worker.on('exit', (code) => {
      if(code != 0)
        console.error(new Error(`Worker finalizado com exit code = ${code}`))
    });

    return worker;
  }
}