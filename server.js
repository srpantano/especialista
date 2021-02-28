import mongoose from 'mongoose';
import app from './app.js';

console.log('Parametro 2: ', process.argv[2]);

var port = parseInt(process.argv[3]);

(async () => {
  try {
    await mongoose.connect(process.argv[2], {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('Connected to MongoDB Bots successfully');
  } catch (err) {
    console.error('Connection error to MongoDB Bots: ', err.message);
  }
})();

app.listen(port, () => console.log('Started API successfully'));
