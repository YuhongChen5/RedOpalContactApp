const baseUrl = 'http://localhost:3000';

export function getAllContact() {
    const detailUrl = '/api/contact/all';

    return fetch(new URL(detailUrl, baseUrl))
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject('Error. Cannot get data from the server');
        })
}

export function updateContactToApi(updatedContact) {
    const detailUrl = '/api/contact/update';

    return fetch(new URL(detailUrl, baseUrl),
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedContact)
    });
       
}