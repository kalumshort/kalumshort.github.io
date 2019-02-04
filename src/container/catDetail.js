// importing connect to connect to the redux store
import { connect } from 'react-redux';

// importing the needed components
import CatDetail from '../component/CatDetail';

// setting the props to use in the component from the redux store
const mapStateToProps = ({ DisplayCat }) => ({ DisplayCat });


export default connect(mapStateToProps)(CatDetail);