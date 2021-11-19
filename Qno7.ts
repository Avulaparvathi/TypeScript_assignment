import {Car} from './queno7';

const c: Car={speed:150,regularPrice:2000000,color:'white'};

function getSalePrice(){
    console.log("regular price is: "+c.regularPrice);
}

getSalePrice();