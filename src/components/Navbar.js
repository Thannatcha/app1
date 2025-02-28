import React, { Component } from 'react'
import NavItems from './NavItems'


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    render(){
        return(
            <nav>
                <ul>
                    <NavItems item = "HOME" tolink="/"></NavItems>
                    <NavItems item = "ABOUT" tolink="/about"></NavItems>
                    <NavItems item = "RESUME" tolink="/resume"></NavItems>
                    <NavItems item = "TRANSCRIPT" tolink="/transcript"></NavItems>
                    <NavItems item = "CONTACT" tolink="/contact"></NavItems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;