class Triangle {
    constructor(a, h, b) {
        this.a = a,
        this.h = h,
        this.b = b;
    }
    toFind() {
        return "Площадь треугольника: " + 1 / 2 * this.a * this.h;
    }
    perimeter() {

        return "Периметр треугольника: " + (+this.a + +this.h + +this.b)
    }
}
const triangle = new Triangle(50, 70, 20);
document.writeln(triangle.toFind()+"<br>");
document.writeln(triangle.perimeter());

class  Circle{
    constructor(r,){
        this.r=r;
       
    }

    toFind(){
        return "Площадь круга: "+  (Math.PI *this.r**2).toFixed(0)
    }

    perimeter() {

        return "Периметр круга: "+ (2*Math.PI* this.r).toFixed(0)
}
}
const circle=new Circle(20);
document.writeln("<br>"+circle.toFind());
document.writeln("<br>"+circle.perimeter())

