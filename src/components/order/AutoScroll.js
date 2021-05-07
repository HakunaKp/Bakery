import React, { Component } from 'react'
import {Link} from 'react-scroll'

export default class AutoScroll extends Component {
    render() {
        return (
            <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-around'}}>
                <li id="flavor-selected"><Link activeClass="active" to="flavor" spy={true} smooth={true}>Flavor</Link></li>
                <li id="shape-selected"><Link to="shape" spy={true} smooth={true}>Shape</Link></li>
                <li id="tier-selected"><Link to="tier" spy={true} smooth={true}>Tier</Link></li>
                <li id="extras-selected"><Link to="extras" spy={true} smooth={true}>Extras</Link></li>
                <li id="description-selected"><Link to="description" spy={true} smooth={true}>Description</Link></li>
                <li id="allergies-selected"><Link to="allergies" spy={true} smooth={true}>Allergies</Link></li>
            </ul>
        )
    }
}