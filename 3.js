//Задание 3.

//Написать функцию, которая создает пустой объект, но без прототипа.

function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));