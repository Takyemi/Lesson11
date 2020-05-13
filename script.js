// let string = 'Hello world'; 
// function getReversedString(stringToReverse){
//     return stringToReverse.split('').reverse('').join('');
// }    
// let result = getReversedString(string);
// console.log(result);
// Перевернутая строка в виде функции <===/


// let data = [
//     { name: 'Kolya', age: 22 },
//     { name: 'Sveta', age: 17 },
//     { name: 'Katya', age: 12 },

//     { name: 'Andrei', age: 45 },

//     { name: 'Alex', age: 13 },
// ]
// function(addData){
// let result = data.find((item) => item.age === 12) || data.filter((newItem) => newItem.age > 18);
// console.log(result);
// }

// function CreateUser(userName, userSurneame){
//     this.name = userName;
//     this.surname = userSurname; 
//     this.getFullName = function(){
//         return `${this.name} ${this.surname}`;  
//     }
// };
// let newUser = new CreateUser(name, surname);
// console.log(newUser);

// let emptyObject =  {
// };
// let discripter = Object.getOwnPropertyDescriptor(emptyObject, 'color', 'year_of_issue');
// Object.defineProperty(emptyObject, 'color',{
//     writable:true,
//     enumerable:true,
//     value:'green',
// });
// Object.defineProperty(emptyObject, 'year_of_issue', {
//     writable:false,
//     enumerable:true,
//     value:'1890',
// });
// console.log(emptyObject);

// let user = {
//     salary:500,
// set salaryMarc(value){
//     this.salary = `${this.salary} ${value}`

// }
// }
// user.salaryMark = 'Q';
// // console.log(user);

// let divElementsHTML = document.getElementsByTagName('li');
// console.log(divElementsHTML);
// let liElementsUl = Array.from(divElementsHTML);
// console.log(liElementsUl);
// let i = liElementsUl.length;
// divElementsHTML[i - 1].style.color = 'green';

// let conteiner = document.querySelectorAll('.conteiner')

// let NumberElements = +prompt('Количество элементов');
// let requestElements = prompt('Название элемента');
// let requestText = prompt('какой текст ввести?');
// function createNewElement(tagName, textNode) {
//     // let requestElements = prompt('Название элемента');
//     let element = document.createElement(tagName);

//     // let requestText = prompt('какой текст ввести?');
//     let text = document.createTextNode(textNode);
//     element.append(text);
//     element.classList.add('newElement');
//     return element
// }
// function addElementToConteiner(element) {
//     conteiner[0].append(element);
// }


// for (i = 0; NumberElements > i; i++) {
//     let element = createNewElement(requestElements,requestText );
//     addElementToContainer(element);
// }

// function pressButton(){
//     alert('Pressed For JS');
// }
//  let button = document.querySelector('Button');
//  button.onclikc = pressButton;

let user = {
    name: 'Gena';
    age: 25
}