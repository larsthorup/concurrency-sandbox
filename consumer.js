const PgBoss = require('pg-boss');
const boss = new PgBoss('postgres://postgres@localhost/sandbox');

boss.on('error', onError);

boss.start().then(ready).catch(onError);

function ready() {
  return boss.subscribe('job', jobHandler).then(() => {
    console.log('waiting for jobs');
  }).catch(onError);
}

function jobHandler(job) {
  console.log(`received ${job.name} ${job.id}`);
  console.log(`processing data: ${JSON.stringify(job.data)}`);
  setTimeout(() => {
    job.done().then(() => {
      console.log(`completed ${job.id}`);
      console.log('----------');
    }).catch(onError);
  }, 10000);
}

function onError(error) {
  console.error(error);
}