// importing the needed files
import React , { Component } from 'react';


// creating the component 
class CatDetail extends Component {
    render(){
        // setting the prop passed in as DisplayCat
        const { DisplayCat } = this.props;
       
        return(
            <>  
                {/* Checking to see if there is a data field called origin inside the DisplayCat state,
                if there is that means a breed of cat has been selected.
                if not that means no breed has been selected   */}
                {DisplayCat.origin?
                    // div that holds all of the data
                    <div className="display-cat-container">
                        
                        <div className="display-cat-top-info">
                            <h1 className="display-cat-name">
                            {DisplayCat.name}
                            </h1>

                            <p className="display-cat-desciption">
                            {DisplayCat.description}
                            </p>

                            <h2 className="display-cat-origin">
                            <span className="text-label">Origin: </span><br></br>
                            {DisplayCat.origin}
                            </h2>

                            <h2 className="display-cat-temper">
                            <span className="text-label">Temperament: </span><br></br>
                            {DisplayCat.temperament}
                            </h2>

                        </div>
                        {/* div that holds the cubes of data */}
                        <div className="display-cat-cubes">

                            <h2 className="display-cat-cube">
                            <span className="text-label">Affection Level:</span><br></br>
                            {DisplayCat.affection_level}
                            </h2>

                            <h2 className="display-cat-cube">
                            <span className="text-label">Child Friendliness: </span><br></br>
                            {DisplayCat.child_friendly}
                            </h2>
                            
                            <h2 className="display-cat-cube">  
                            <span className="text-label">Energy Level: </span> <br></br>
                            {DisplayCat.energy_level}
                            </h2>

                            <h2 className="display-cat-cube">  
                            <span className="text-label">Intelligence: </span><br></br> 
                            {DisplayCat.intelligence}
                            </h2>

                            <h2 className="display-cat-cube">  
                            <span className="text-label">Life-Span: </span><br></br>
                            {DisplayCat.life_span}
                            <span className="text-label"> Years</span> 
                            </h2>

                            <h2 className="display-cat-cube">  
                            <span className="text-label">Social Needs: </span><br></br>
                            {DisplayCat.social_needs}
                            </h2>

                        </div>
                    </div>
                    :
                    // div that holds the styling when a breed hasnt been selected
                    <div className="no-cat-selected">
                        <h1 className="no-cat-header">Please choose a breed above</h1>
                    </div>
                }
            </>
        )
    }
}

export default CatDetail;