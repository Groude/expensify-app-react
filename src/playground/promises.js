const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andrew',
      age: 26
    });
    // reject('Oooops')
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
      // reject('Oooops')
    }, 5000);
  });
}).then((str) => {
  console.log(str);
}).catch((error) => {
  console.log(error);
});

console.log('after');