import {Component} from 'react'
import data from '../data'

class DataBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            people: data,
        }
    }


    render(){
        return(
            <div className="DataBox">
                <div className="NamesSection">
                    <h1>{this.state.people[this.props.indexVal - 1].name.first} {this.state.people[this.props.indexVal - 1].name.last}</h1>
                    <br />
                    <p><strong>From:</strong> {this.state.people[this.props.indexVal - 1].city}, {this.state.people[this.props.indexVal - 1].country}</p>
                    <p><strong>Job Title:</strong> {this.state.people[this.props.indexVal - 1].title}</p>
                    <p><strong>Employer:</strong> {this.state.people[this.props.indexVal - 1].employer}</p>
                    <br />
                    <ul><strong>Favorite Movies</strong>
                        <li>{this.state.people[this.props.indexVal - 1].favoriteMovies[0]}</li>
                        <li>{this.state.people[this.props.indexVal - 1].favoriteMovies[1]}</li>
                        <li>{this.state.people[this.props.indexVal - 1].favoriteMovies[2]}</li>
                    </ul>
                </div>
                <div className="ArrayNumber">
                    <h2>{this.props.indexVal}/{this.state.people.length}</h2>
                </div>
            </div>
        )
    }
};

export default DataBox;