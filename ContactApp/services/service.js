const baseUrl = 'http://localhost:3000';

export function getAllContact() {
    const getFromUrl = '/api/contact/all';

    return fetch(new URL(getFromUrl, baseUrl))
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject('Error. Cannot get data from the server');
        })
}