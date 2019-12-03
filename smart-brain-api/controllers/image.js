const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: 'f8c35ba463d94cdbb39b2f75849f4e6f'
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;console.log(id);
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => console.log(err))
}

module.exports = {
  handleImage,
  handleApiCall
}