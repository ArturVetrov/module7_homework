/*Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.*/

class ElectricalAppliance {
  constructor (name) {
  this.name = name;
  }
  turnOn(){
    console.log(this.name + ' включен в сеть')
     this.connected = true;
  }
  turnOff(){
    console.log(this.name + ' выключен из сети')
     this.connected = false;
  }
  countingEnergy(){
   return this.connected ? this.power : 0;//определяем общую потребляемую мощность
 }
}

class Tv extends ElectricalAppliance {
  constructor (name, color, power) {
  super (name);
  this.color = color;
  this.power = power;
}
}


class Conditioner extends ElectricalAppliance {
  constructor (name, color, power) {
  super (name);
  this.name = name;
  this.color = color;
  this.power = power;
}
}

const sony = new Tv('Sony', 'Black', 50);
const haier = new Conditioner('Haier', 'White', 100);

sony.turnOn(); //включаем телевизор
console.log('Sony потребляет ' + sony.countingEnergy() + ' W'); 

haier.turnOn(); //включаем кондиционер
console.log('Haier потребляет ' + haier.countingEnergy() + ' W'); 

console.log( haier.countingEnergy() + sony.countingEnergy() + 'W потребляют все приборы');

sony.turnOff(); //выключаем телевизор
haier.turnOff(); //выключаем кондиционер

console.log( haier.countingEnergy() + sony.countingEnergy() + 'W потребляют все приборы');