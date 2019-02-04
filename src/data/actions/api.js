// importing the axios base URL
import axios from '../../axios';

// importing the api function
import { setCats } from './state';

// connecting to the api and setting the data recieved 
export const getCats = () => dispatch => {
    axios.get('/breeds').then(({ data })=> {
        const cats = data;
        dispatch(setCats(cats));
    })
}

