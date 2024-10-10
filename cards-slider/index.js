function slidesPlugin(activeSlide) {
  const slides = document.querySelectorAll('.slide') //Через него получаем каждый слайд в строковом формате

  slides[activeSlide].classList.add('active')

  for(const slide of slides) {                       // На каждый итерации мы берем slide из массиива (of) slides
    slide.addEventListener('click', () => {
      clearActiveClasses()                           //Функция для очистки анимации, что бы не застывала. Пишем здесь подтягивая нижнюю
  
      slide.classList.add('active')
    })                                               // данная функц принимает в себя несколько параметров 1 это - клик, а 2 - active а то есть анимация
  }
  
  function clearActiveClasses(){                     // Прописываем эту функцию
    slides.forEach((slide) => {                           // Создаем колбек функцию но на каждой итерации получаем определенный слайд
      slide.classList.remove('active')               // Таким образом через remove мы убираем тот самый переход которые делаем, и он позволяет хорошо переходить между картинками
    })
  }
}

slidesPlugin(2)


/* Задаем стартовый слайд

Для начала step 1 - берем и создаем новую функцию 

      function slidesPlugin() {

}

step 2 - Далее в неё вставляем наши ранние наработки 

step 3 - Внутри неё мы создаем массив 

      slides[].classList.add('active')  - c добавлением клас листа с активным элементом 

step 4 - Далее после этой функции мы вызываем эту функцию след образом

      slidesPlugin() 

step 5 - в ранее созданную функию - function slidesPlugin() мы погружаем activeSlide - называть параметр можно как угодно
     
      function slidesPlugin(activeSlide)
      
step 6 - в наш массив мы пилим наш параметр activeSlide из предыдущей функции, а то есть подхватываем 

      slides[activeSlide].classList.add('active')

step 7 - активируем наши элементы через массив, путем выбора в функии для вызова - помни в масиве все элементы начинаются с 0 

      slidesPlugin(2)


Укороченная версия с данной проработки:


function slidesPlugin(activeSlide) {
...
slides[activeSlide].classList.add('active')
...
}

slidesPlugin(2)

*/