
class Worker{
    constructor(name,surname,rate,days){
        this._name=name;
        this._surname=surname;
        this._rate=rate;
        this._days=days;
    }
    get name(){
        return this._name
    }

    get surname(){
        return this._surname
    }
    get getfullName(){
        return this._surname+" "+this._name
    }
    get rate(){
        return this._rate
    }
    get days(){
        return this._days
    }
    getSalary(){
       return this._rate*this.days
    }
}

class Boss extends Worker{
    constructor(name,surname,rate,days,workers){
        super(name,surname,rate,days);
        
        this._workers=workers;
        
    }
   
    get workers(){
        return this._workers
    }

    getSalary(){
        return this.rate *this.days*this._workers
    }
}
const boss= new Boss("Иван","Иванов",10,31,10);
document.writeln(boss.name+"<br>");
document.writeln(boss.surname+"<br>");
document.writeln(boss.getfullName+"<br>");
document.writeln(boss.rate+"<br>");
document.writeln(boss.days+"<br>");
document.writeln(boss.workers+"<br>");
document.writeln(boss.getSalary());

