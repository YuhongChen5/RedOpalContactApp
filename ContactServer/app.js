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

app.put('/api/contact/update', (req, res) => {
    const updatedContact = req.body;
    const contactList = contactDetail.getAll(); 
    for (const contact of contactList) {
        if (parseInt(updatedContact.Id) === contact.Id) {
            contactDetail.updateContact(updatedContact);
            res.status(200).send('The contact has been updated.')
            return;
        }} 
    res.status(400).send(`The contact with an id of ${updatedContact.Id} could not be found.`)   
    
});

app.get('/api/contact/search', (req, res) => {
    const search = req.query;
    search['Id'] = parseInt(search['Id']);
    const contactList = contactDetail.getAll();
    const result = [];
    contactList.forEach(contact => {
        Object.keys(contact).forEach(key => contact[key]===search[key]? result.push(contact) : null);           
        } 
    )
    if (result.length===0) {
        res.status(400).send(`The contact you are looking for doesn't exist.`);
        return;
    } else{
        res.json(result);
    }
});


app.post('/api/contact/add', (req, res) => {

});


app.listen(port, () => {
    console.log(`Staff contact API Server listening on port ${port}`);
});