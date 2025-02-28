import React,{Component} from 'react'
import Social from '../components/Social'
//import profilepic from '../image/cat.jpg'

class Homes extends Component{
    render(){
        return (
            <div className="condiv home">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hphhfoundation.org%2Fblog%2Forigin-of-cats&psig=AOvVaw3s49LsxAurS3cylJdqgpW9&ust=1740845166073000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCO4uDf5osDFQAAAAAdAAAAABAJ" alt="cat" />
                <p className="typingeffect">I'm Thannatcha</p>
                <Social/>
            </div>
        );
    }
}
export default Homes;
