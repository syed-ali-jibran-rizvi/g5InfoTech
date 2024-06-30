const express = require('express');
const cors = require('cors');
const fs = require('fs');
const multer = require('multer');
const csvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name
  }
});
const upload = multer({ storage: storage });

// CSV writer setup
const writer = csvWriter({
  path: 'user_data.csv',
  header: [
    { id: 'fullName', title: 'Full Name' },
    { id: 'email', title: 'Email' },
    { id: 'phone', title: 'Phone' },
    { id: 'linkedIn', title: 'LinkedIn Profile URL' },
    { id: 'currentStatus', title: 'Current Status' },
    { id: 'fieldOfStudy', title: 'Field of Study/Current Industry' },
    { id: 'highestEducation', title: 'Highest Level Of Education' },
    { id: 'shortTermGoals', title: 'Short-Term Career Goals' },
    { id: 'longTermGoals', title: 'Long-Term Career Goals' },
    { id: 'interestedIndustries', title: 'Interested Industries/Fields' },
    { id: 'skills', title: 'Top 3 Skills' },
    { id: 'aiExperience', title: 'Experience with AI/GenAI' },
    { id: 'courses', title: 'Relevant Courses/Workshops/Certifications' },
    { id: 'programExpectations', title: 'Program Expectations' },
    { id: 'availability', title: 'Availability' },
    { id: 'additionalInfo', title: 'Additional Info' },
    { id: 'resume', title: 'Resume' },
  ],
  append: true, // Append to existing CSV file
});

// POST endpoint to handle form submission
app.post('/submit', upload.single('resume'), (req, res) => {
  const data = req.body;
  data.resume = req.file ? req.file.path : ''; // Store file path in 'resume' field

  writer.writeRecords([data])
    .then(() => {
      res.status(200).send('Data saved successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error saving data');
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
