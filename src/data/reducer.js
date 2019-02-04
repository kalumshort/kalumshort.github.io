
// creating the reducer that changes the state
export default  (state, action) => {
    switch(action.type) {
        case 'setCats' : return setCats(state,action);
        case 'setSelectedCat': return{...state, DisplayCat: action.cat};
        default: return state;
    }
}

// function that changes the state and ands the data from the api 
const setCats = (state, { cats }) => {
    return {
        ...state,
        cats: cats,
    }
}

