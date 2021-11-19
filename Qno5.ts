import { Product } from './quesno5';

let gst:number=200;

let totalprice:number;

const p:Product={proid:456,proname:'mobile',proprice:12000};

console.log("proid:" +p.proid+",proname:" +p.proname+",proprice:" +p.proprice);



function Price()

{

  totalprice=p.proprice+gst;

  console.log("the total price is :" +totalprice)

}

Price();