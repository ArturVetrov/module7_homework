/*Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/

function ElectricalAppliance () {
  this.turnOn = function (){
    console.log(this.name + ' включен в сеть')
     this.connected = true;
  }
  this.turnOff = function (){
    console.log(this.name + ' выключен из сети')
     this.connected = false;
  }
  this.countingEnergy = function () {
   return this.connected ? this.power : 0;//определяем общую потребляемую мощность
 }
}


function Tv (name, color, power) {
  this.name = name;
  this.color = color;
  this.power = power;
}

Tv.prototype = new ElectricalAppliance()


function Conditioner (name, color, power) {
  this.name = name;
  this.color = color;
  this.power = power;
}

Conditioner.prototype = new ElectricalAppliance()


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