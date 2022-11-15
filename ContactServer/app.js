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

app.get('/api/contact/search', (req, res) => {
    if (req.query.id === undefined) {
        res.status(400).send('Missing the query string parameter \'id\'!');
        return;
    }
    const id = parseInt(req.query.Id);
    if (isNaN(id)) {
        res.status(400).send('The \'id\' parameter Must be an interger value!');
        return;
    }
    const contact = contactDetail.getById(id)
    if (contact !== null) {
        res.json(contact);
    } else {
        res.status(400).send(`The contact with an id of ${id} could not be found`);
    }
});

app.put('/api/contact/update', (req, res) => {
    const updatedContact = req.body;
    const contactList = contactDetail.getAll(); 
    for (const contact of contactList) {
        if (parseInt(updatedContact.Id) === contact.Id) {
            contactDetail.updateContact(updatedContact);
            res.status(200).location('/api/contact/update').send('The contact has been updated')
            return;
        }} 
    res.status(400).send(`The contact with an id of ${updatedContact.Id} could not be found`)   
    
});

app.post('/api/contact/add', (req, res) => {

});


app.listen(port, () => {
    console.log(`Staff contact API Server listening on port ${port}`);
});