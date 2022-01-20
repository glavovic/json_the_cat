const request = require('request');
const argv = process.argv.slice(2);




request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`, function(error, response, body) {
  if (error) {
    console.log('error', error);
    return;
  }
  const data = JSON.parse(body);

  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log('Breed not found');
  }
  
});

