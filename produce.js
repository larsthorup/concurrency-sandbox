const PgBoss = require('pg-boss');
const boss = new PgBoss('postgres://postgres@localhost/sandbox');

boss.on('error', onError);

boss.start().then(ready).catch(onError);

function ready() {
  const job = {
    date: new Date().toISOString()
  };
  boss.publish('job', job).then(jobId => {
    console.log(`created job ${jobId}`);
    boss.stop();
  }).catch(onError);
}

function onError(error) {
  console.error(error);
}