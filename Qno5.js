"use strict";
exports.__esModule = true;
var gst = 200;
var totalprice;
var p = { proid: 456, proname: 'mobile', proprice: 12000 };
console.log("proid:" + p.proid + ",proname:" + p.proname + ",proprice:" + p.proprice);
function Price() {
    totalprice = p.proprice + gst;
    console.log("the total price is :" + totalprice);
}
Price();
