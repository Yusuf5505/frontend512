function Automobile(color,model,year,manufact) {
    
    this.color=color;
    this.model=model;
    this.year=year;
    this.manufact=manufact;
    Automobile.prototype.whatColor=function(){
        return "Цвет машины: "+this.color+","
    };
    Automobile.prototype.autoInfo=function(){
        return " Модель машины: "+this.model+"<br>"+"Год выпуска: "+this.year+"<br>"+"Производитель автомобиля: "+this.manufact
    }

}

let bmw= new Automobile("Белый","BMW M5",2019,"BMW");
document.writeln(bmw.whatColor(),bmw.autoInfo());
document.writeln("<br>")
let nissan= new Automobile("Красный","NISSAN SKYLINE",2007,"NISSAN");
document.writeln(nissan.whatColor(),nissan.autoInfo())

