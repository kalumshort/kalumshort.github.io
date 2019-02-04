// importing the needed packages
import React , { Component } from 'react';
import Select from 'react-select';

import '../index.css';

class Cats extends Component {
    constructor(props){
        super(props);
        
    }
    // function that runs the function to load the cats from the API
    componentDidMount(){
        this.props.onLoad();
    }
    // when the selector changes that must means a new breed has been selected
    onChange(event) {
        this.props.chosenCat(event.value);

    }
   
    render(){
        // setting the cats props to be called cats
        const { cats } = this.props;
       
        return(
            <>
                {/* cat header */}
                <div>
                    <h2 className="cats-header">Cat Breed Selector</h2>
                </div>
                {/* selector for all the cat breeds */}
                <div className="cat-selector-field">
                    <Select
                    className="cat-selector"
                    onChange={this.onChange.bind(this)}
                    // mapping over the cats array and pulling out all of its objects
                     options = {cats.map((item) => (
                        {
                            // setting the value of the breed to be equal to the whole item its in
                            value: item,
                            // setting the label to be the name given in the item
                            label: item.name
                        }

                    ))}/>
                </div>
            </>
        )
    }
}

export default Cats;