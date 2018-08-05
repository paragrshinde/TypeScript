// function doSomething() {
//     for (var i = 0;i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally' + i);
// }
// doSomething();
//Data Assertions
// let message;
// message = 'abc';
// let endsWithC = (<String>message).endsWith('c');
// let alternative = (message as String).endsWith('c'); 
//Arrow Function
// let login = function(message){
//     console.log(message);
// }
// //JS
// let doLogin = (message) => {
//     console.log(message)
// }
//Ts
//interfaces
// interface Point {
//     x:number;
//     y:number;
// }
// let drawPoint = (point : Point) =>{
//     //..
// } 
// drawPoint({
//     x:1,
//     y:2
// })
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ',Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.draw();
