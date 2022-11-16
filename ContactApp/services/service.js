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

export function toCapital(str) {
    const arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const arr2 = arr.join(' ');
    return arr2;
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

export function searchContactOnApi(searchCondition) {
    const detailUrl = '/api/contact/search'
    const fullUrl = new URL(detailUrl, baseUrl);
    Object.keys(searchCondition).forEach(key =>
    searchCondition[key]!==''? fullUrl.searchParams.append(key, searchCondition[key]) : null);
    return fetch(fullUrl)
        .then((response) => response.json());
}

