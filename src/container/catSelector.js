// importing connect to connect to the redux store
import { connect } from 'react-redux';

// importing the needed components
import Cats from '../component/Cats.js';

// importing the needed actions that get fired on the functions that was triggered as a prop
import { getCats } from '../data/actions/api';
import { setSelectedCat } from '../data/actions/state';

// setting the props needed for the imported component
const mapStateToProps = ({ cats, cat }) => ({ cats, cat });

// dispatching the functions that changes the store
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getCats()),
        chosenCat: value => dispatch(setSelectedCat(value)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cats);