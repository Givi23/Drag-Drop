const item = document.querySelector('.item');
console.log(item);
const placeholders = document.querySelectorAll('.placeholder');
console.log(placeholders); 
const body = document.querySelector('.body');
console.log(body);

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