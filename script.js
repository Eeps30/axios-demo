const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=testuser1234';

// axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
//     console.log('Server Response: ', resp);
// }).catch( err => {
//     console.log('Something went wrong', err.message);
// });

const newItem = {
    title: 'Evan',
    details: 'a new object we get to mess with'
}

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then( resp => {
//     console.log('Add Response', resp);
// })

const itemID = '5ac278e0329150131fbbff6a';

// http://api.reactprototypes.com/todos/IDGOESHERE?key=testuser1234

axios.get(`${BASE_URL}/todos/${itemID + API_KEY}`).then( resp => {
    console.log('Server Response', resp);
})