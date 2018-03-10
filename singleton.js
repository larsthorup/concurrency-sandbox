const advisoryLock = require('advisory-lock').default;

const createMutex = advisoryLock('postgres://postgres@localhost/sandbox');

const {withLock} = createMutex('singleton');

withLock(() => {
  return process();
});

function process () {
  return new Promise(() => { // Note: never resolves, use ctrl+c to stop
    setTimeout(() => {
      console.log('i have the lock', new Date());
      process();
    }, 1000);
  });
}
