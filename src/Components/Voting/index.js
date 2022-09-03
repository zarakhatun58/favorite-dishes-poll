import React, { useState } from 'react';

const Voting = () => {

    const [state, setState] = useState({
        dishes: [
            { name: "Php", votes: 0 },
            { name: "Python", votes: 0 },
            { name: "Go", votes: 0 },
            { name: "Java", votes: 0 }
        ]
    });

    const vote=(i)=>{
        let newDishes = [state.dishes];
        newDishes[i].votes++;
        function swap(array, i, j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
       setState({dishes: newDishes});
    	
    }
    return (
        <div>
             <h1>Vote Your Dishes!</h1>
                <div className="dishes">
                    {
                        state.dishes.map((dish, i) => 
                            <div key={i} className="dishes">
                                <div className="voteCount">
                                    {dish.votes}
                                </div>
                                <div className="dishesName">
                                    {dish.name}
                                </div>
                                <button onClick={vote}>Click Here</button>
                            </div>
                        )
                    }
                </div>
        </div>
    );
};

export default Voting;

/*
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "Go", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }

    vote (i) {
        let newLanguages = [...this.state.languages];
        newLanguages[i].votes++;
        function swap(array, i, j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.setState({languages: newLanguages});
    	
    }

    render(){
        return(
            <>
                <h1>Vote Your Language!</h1>
                <div className="languages">
                    {
                        this.state.languages.map((lang, i) => 
                            <div key={i} className="language">
                                <div className="voteCount">
                                    {lang.votes}
                                </div>
                                <div className="languageName">
                                    {lang.name}
                                </div>
                                <button onClick={this.vote.bind(this, i)}>Click Here</button>
                            </div>
                        )
                    }
                </div>
            </>
        );
    }
}
export default SignUp;
*/