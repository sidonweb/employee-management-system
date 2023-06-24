const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: String,
    address: String,
    age: Number,
    department: String,
    empstatus: String

  }
);

const Data = mongoose.model('Data', dataSchema);

// Get all data
app.get('/api/data', (req, res) => {
    Data.find((err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });
  
  // Get data by ID
  app.get('/api/data/:id', (req, res) => {
    Data.findById(req.params.id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });
  
  // Add new data
  app.post('/api/data', (req, res) => {
    const data = new Data(req.body);
  
    data.save()
      .then((data) => {
        res.status(200).json({ 'data': 'data added successfully' });
      })
      .catch((err) => {
        res.status(400).send('adding new data failed');
      });
  });
  
  // Update data by ID
  app.put('/api/data/:id', (req, res) => {
    Data.findById(req.params.id, (err, data) => {
      if (!data) {
        res.status(404).send('data not found');
      } else {
        data.name = req.body.name,
        data.address = req.body.address,
        data.age = req.body.age,
        data.department = req.body.department,
        data.empstatus = req.body.empstatus;
  
        data.save()
          .then((data) => {
            res.json('Data updated!');
          })
          .catch((err) => {
            res.status(400).send('Update not possible');
          });
      }
    });
  });
  
  // Delete data by ID
  app.delete('/api/data/:id', (req, res) => {
    Data.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json('Data deleted successfully');
      }
    });
  });
  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
