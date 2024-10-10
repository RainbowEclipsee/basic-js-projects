const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
// const placeholders = document.querySelectorAll('.placeholder') // Тоже из html

item.addEventListener('dragstart', dragstart) // Начало перетаскивания 
item.addEventListener('dragend', dragend) // конец 
//Обращаемся к нашему элементу что бы обработать событие передвижения элемента 

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover) // добавляем событие Над
  placeholder.addEventListener('dragenter', dragenter) // добавляем событие Входить
  placeholder.addEventListener('dragleave', dragleave) // добавляем событие Покинуть
  placeholder.addEventListener('drop', dragdrop)      // Отпустили объект и там выше, все тоже об объекте 
}
// Вот здесь цикл for of - его нужно запомнить 

function dragstart(event) {
  event.target.classList.add('hold')  //обращаемся через - event.target
  setTimeout(() => event.target.classList.add('hide'), 0)
}
//Функция - взять маус, подтягиваем выше  

function dragend(event) {
  event.target.classList.remove('hold', 'hide')
  console.log('test')
}
 
 function dragover(event) {
  event.preventDefault()
 }

 function dragenter(event){
  event.target.classList.add('hovered') // Добавляем класс - наведенный и реализуем в css
  console.log('drag enter')
 }

 function dragleave(event){
  event.target.classList.remove('hovered') // remove Для того, что бы удалить появляющиеся отметки
 }

 function dragdrop(event){
  event.target.classList.remove('hovered')
  event.target.append(item)
 }