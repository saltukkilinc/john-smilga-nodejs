const {readFile, writeFile} = require('fs');

readFile('./content/first-text.txt', 'utf8', (err, result) => {
  if(err) {
    console.log(err);
    return null;
  }
  const first = result;

  readFile('./content/second-text.txt', 'utf8', (err, result) => {
    if(err) {
      console.log(err);
      return null
    }
    const second = result;

    writeFile('./content/async-written.txt', `This is the written async file: ${first} and ${second}`, (err, result) => {
      if(err) {
        console.log(err)
      }

      console.log(result)
    })
  })
})
