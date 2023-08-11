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
    placeholder.addEventListener('dragover', dragover); // когда карточка перетаскиваеться в область placehlder (держим карточку)
    placeholder.addEventListener('dragenter', dragenter); // когда вся карточка находиться внутри placeholder и мы удерживаем карточку
    placeholder.addEventListener('dragleave', dragleave); // когда мы пакидаем область placeholder но удерживаем карточку
    placeholder.addEventListener('drop', dragdrop); // перетаскиваем в placeholder и у нас карточка там лежит отпускаем ее
} 

function dragover(event){
    console.log('dragover');
    event.preventDefault() // отключаем действие браузера по умолчанию
}
function dragenter(event){
    console.log('dragenter');
    event.target.classList.add('hovered')
    // event.target.classList.remove('hovered')
}
function dragleave(event){
    console.log('dragleave');
    event.target.classList.remove('hovered')
    // setTimeout(()=> event.target.classList.add('hide'),1000 )
    // event.terget.className = 'item'
    // event.target.classList.remove('')
}
function dragdrop(event){
    console.log('drop');
    // 1.куда кладем (placeholder) 2. что кладем (item)
    event.target.append(item) 
}
function dragstart(event){
    console.log('dragstart');
    event.target.classList.add('hold')// к нашему элементу (карточка) добовляем новый класс hold - взамосвязь с сss, какие стили указанны 
    // event.target.classList.add('hide')// к нашему элементу (карточка) добовляем новый класс hide - взамосвязь с сss, какие стили указанны 
    setTimeout(()=> event.target.classList.add('hide'),0 )// функция (задершка времени)
}
function dragend(event){
    console.log('dragend');
    event.target.className = 'item'// 1 вариант отпускаем карточку она становится видемой, возращаеться в прежний вид
    // event.target.classList.remove('hold')// 2 вариант более кароткий способ
    // event.target.classList.remove('hide')// 2 вариант
}

























































