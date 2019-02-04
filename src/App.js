// importing thr needed files
import React, { Component } from 'react';

// importing the containers needed for the page
import Cats from './container/catSelector';
import CatDetail from './container/catDetail';

class App extends Component {
  render() {
    return (
        <>
          <div className="app-components">
            <Cats className="CatSelectorContainer"/>
            <CatDetail className="CatDetailContainer"/>
          </div>
        </>
    );
  }
}

export default App;
