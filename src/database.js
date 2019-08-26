const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chat', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));