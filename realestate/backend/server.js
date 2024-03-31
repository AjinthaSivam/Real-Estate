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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
