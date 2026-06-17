let car={
    name:"Volvo",
    year:2019,
    colors:{
        fierst:"Yellow",
        second:"blue"
    },
    color:[
        "black",
        'white',
        'red',
        'blue'
    ],
    hello:function(){
        document.writeln("Привет<br>")
    }
};
// console.log(car);
// document.writeln(car.name+" "+car.color[1]+" "+car.colors.second);
// car.hello();

// let fill=car.color.filter(function(elem){
//     return elem.length<5;
// })
// document.writeln(fill+"<br>");

// let mas=car.color.map(function(elem,index,all){
//     return elem+" массив: "+all+"<br>";
// })

// document.writeln("<br>"+mas+"<br>")

// let mas2=car.color.map(function(elem){
//     return elem
// })

// document.writeln("<br>"+mas2+"<br>")

// let mas2=Object.keys(car.colors).map(function(elem){
//     return elem +" : "+car.colors[elem];
// });

//  document.writeln("<br>"+mas2+"<br>")

// let calc={
//     num1:5,
//     num2:6,
//     calculate:function(){
//       this.res=this.num1* this.num2;
        
//     }
// }
// calc.calculate();
// document.writeln(calc.res)

// let x=15,y=10;

// let coords={
//     x,
//     y,
//     calckSq(){
//         document.writeln(this.x*this.y)
//     }
// }

// coords.calckSq()

let user={
    login:{
        firstName:"Kate",
        lastName:"Pavlova"
    },
    psw:"qwerty",
    role:"guest"
};

let log= user.login.firstName
document.writeln(log)
let {login,psw,role}=user;
console.log(login);
