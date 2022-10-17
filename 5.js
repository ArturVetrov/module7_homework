class ElectricalAppliance {
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
  construsctor (name, color, power) {
  this.name = name;
  this.color = color;
  this.power = power;
}
}

const sony = new Tv('Sony', 'Black', 50);

sony.turnOn(); //включаем телевизор
console.log('Sony потребляет ' + sony.countingEnergy() + ' W'); 

sony.turnOff(); //выключаем телевизор