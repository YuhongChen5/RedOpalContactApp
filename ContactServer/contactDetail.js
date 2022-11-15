const contactList = require('./data/testData');

function getAll() {
    return contactList;
}

function getById(id) {
    for (const contact of contactList) {
        if (contact.Id === id) {
            return contact;
        }
    }
    return null;
}

function updateContact(updated) {
    for (var contact of contactList) {
        if (contact.Id === updated.Id) {
            //only can update the record in cache, not the actual testData.js file
            Object.keys(updated).forEach(function(key) {contact[key] = updated[key];});        
        }
    }
    return contactList;
}

module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.updateContact = updateContact;