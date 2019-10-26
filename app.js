const express = require('express');
const http = require('axios');
const cors = require('cors');

// Initialize app
const app = express();

// Set port 
const port = 3000;

// Allow all cross origin requests
app.use(cors());

app.get('/contacts', (req, res) => {

    const organization_id = '649249007';

    const authtoken = 'db36e02a50b57e081efe533a8a0f834b';

    const url = `https://books.zoho.com/api/v3/contacts?organization_id=${organization_id}`;

    const options = {
        headers: {
            'Authorization': `Zoho-authtoken ${authtoken}`
        }
    }

    // Fire http request to zoho api
    http.get(url, options)
    .then( response => {
        res.status(200).send(response.data);
    })
    .catch( err => {
        res.status(500).send('Problem fetching data.');
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
