const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Jonathan:Jonathansf2002@cluster0.cqufb.mongodb.net/ChatJS?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));