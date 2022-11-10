const express = require('express');
const contactDetail = require('./contactDetail');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get('/api/contact/all', (req, res) => {
    const contact = contactDetail.getAll();
    res.json(contact);
});


app.listen(port, () => {
    console.log(`Staff contact API Server listening on port ${port}`);
});