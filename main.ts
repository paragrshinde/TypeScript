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
class Point {
    x:number;
    y:number;

   draw () {
        console.log('X:' + this.x + ',Y:' +this.y);
    }

    getDistance(another:Point){

    }
}

let point = new Point();

point.draw();