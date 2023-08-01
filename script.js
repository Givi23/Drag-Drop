const item = document.querySelector('.item');
console.log(item);
const placeholders = document.querySelectorAll('.placeholder');
console.log(placeholders); 
const body = document.querySelector('body');
console.log(body);
// (первое событие, ссылка на функцию)
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend) 

// имеем возможность управлять ячейкой (placeholder) отдельно на каждую
// цикл (создал переменную, совершить обход по массиву-(маршрут))
for(const placeholder of placeholders){
    console.log(placeholder); // при каждом повторении цикла в переменную placeholder присваеваеться значения элемента массива
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
} 

function dragover(event){
    console.log('dragover');
}
function dragenter(event){
    console.log('dragenter');
}
function dragleave(event){
    console.log('dragleave');
}
function drop(event){
    console.log('drop');
}



function dragstart(event){
    console.log('dragstart');
}
function dragend(event){
    console.log('dragend');
}



























































// let fruits = ["яблоко", "апельсин", "груша"];
// alert (fruits);
// console.log (fruits);

// доступ к локальным переменным 
// function showMessage(){
// let message = "Доброе утро Гиви"
// alert(message)
// }
// showMessage();

// function showMessage (){
//     let message = "хорошего вам дня Гиви"
//     alert(message)
// }
// showMessage ();
// доступ к  глобальным переменным 
// let userName = 'Гиви';
// function showMessage() {
//     let message = 'Привет,' + userName;
//     alert(message)
// }
// showMessage();
// функция имеет полный внешний доступ: изменение значения (Гиви на Макс)
// let userName = 'Гиви';
// function showMessage (){
//     userName = 'Макс'
// let message = 'Привет,' + userName;
// alert(message);
// }
// alert(userName);
// showMessage();
// alert(userName);

// let cityName = 'Москва';
// function showMessage (){
//     cityName = 'Cанкт-Петербург'
// let message = 'Переезд в,' + cityName;
// alert(message);
// }
// showMessage();

// Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю
// let cityName = 'Москва';
// function showMessage (){
// let cityName = 'Cанкт-Петербург'
// let message = 'Переезд в,' + cityName;
// alert(message);
// }
// showMessage();

// функция с использованием параметров
// function showMessage(from,text){
//     alert(from + ': '+ text);
// }
// showMessage('Аня', 'Привет!');
// showMessage('Аня', 'Как дела?');

// возрат значения
// function sum (a,b){
//     return a + b;
// }
// let result = sum(7,7);
// alert(result);
// function minus (c,d){
//     return c - d;
// }
// let result = minus(c,d);
// alert(result);

// функция с использованием параметров
// function checkAge(age){
//     if(age >= 18){
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }
// let age = prompt('Cколько вам лет?', 18);
// if (checkAge (age)){
//     alert('Доступ получен');
// } else {
//     alert('Доступ закрыт');
// }