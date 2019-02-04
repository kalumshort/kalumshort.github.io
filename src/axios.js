// importing the axios files to access apis
import axios from 'axios';

// setting up the base URL to use for the api calls
export default axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
        Accept: 'application/json',
       'x-api-key': 'cf5d749e-e5e1-4e6f-a707-9dcd59f18a78'
    },
});