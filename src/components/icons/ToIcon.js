import React from 'react';
import Image from '../elements/Image';

//const flavorImg = FLAVORS.map((flavor) =>  
export default function toIcon(flavor) {

    var flavor_path = flavor;
    if (flavor === 'Black Forest') flavor_path = "black-forest";
    if (flavor === 'Butterscotch') flavor_path = "butter-scotch";
    if (flavor === 'Chocolate Ganache') flavor_path = "chocolate";
    
    return(
    <Image
        src={require("../../assets/images/flavors/" + flavor_path + ".png")}
        style={{cursor:'pointer'}}
        alt={flavor}
        width={80}
        height={80}
    />);
}

/*
ICON CREDITS

STRAWBERRY
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

BLUEBERRY
    https://www.flaticon.com/authors/ultimatearm" 
    "ultimatearm"

MANGO
<div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

PINEAPPLE
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

BUTTERSCOTCH
<div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

BLACK FOREST
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

CHOCOLATE GANACHE
<div>Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


*/