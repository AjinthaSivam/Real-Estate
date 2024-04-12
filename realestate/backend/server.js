// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const Land = require('./models/Land'); // Import your Mongoose model for land data

const cors = require('cors');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/real-estate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define route handler for fetching land data
app.get('/api/data', async (req, res) => {
  try {
    // Fetch data from MongoDB (assuming 'Land' is the Mongoose model for your land data)
    const landData = await Land.find();
    res.json(landData); // Return fetched data as JSON response
  } catch (error) {
    console.error('Error fetching land data:', error);
    res.status(500).json({ error: 'Internal server error' }); // Return 500 status code on error
  }
});

app.post('/api/lands', async (req, res) => {
    try {
        const { name, address, sqft, description, price, contact, image } = req.body;

        const newLand = new Land({
            name,
            address,
            sqft,
            description,
            price,
            contact,
            image
        });

        await newLand.save();

        res.status(201).json({ meassage: 'Land created successfully', newLand });

    } catch (error) {
        console.error('Error inserting land data:', error);
        res.status(500).json({error: 'Internal server error'});
    }
})

app.delete('/api/delete/:id', async(req, res) => {
  const id = req.params.id
  console.log(id)
  const data = await Land.deleteOne({_id: id})
  res.send({success: true, message: "Data deleted successfully", data:data})
})

app.put('/api/update', async(req, res) => {
  console.log(req.body)
  const { _id, ...rest } = req.body

  console.log(rest)
  const data = await Land.updateOne({_id: _id}, rest)
  res.send({success:true, message:"Data updated successfully", data:data})
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
