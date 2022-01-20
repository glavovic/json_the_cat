const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      return callback('Error was found in Website', null);
    } else {
      const data = JSON.parse(body);
      if (data[0]) {
        return callback(null, data[0].description);
      } else {
        return callback(console.log('Breed not found'), null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
