//Задание 2.

//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

function showProps(obj, objKeyName) {
  return (objKeyName in obj);
}

const userIvanov = {
  name: 'Ivan',
  surname: 'Ivanov',
  ownCity: 'Moscow',
  age: 19,
}

console.log(showProps(userIvanov, 'name'));
console.log(showProps(userIvanov, 'lame'));