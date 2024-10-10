const board = document.querySelector('#board')
const colors = ['#d65cc3', '#fce1e4', '#74fde0', '#faf7f8', '#f7f0f8', '#e0fdf2']
const SQUARES_NUMBER = 800

 for(let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))


   board.append(square)
 }

 function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
 }

 function removeColor(element) {
   element.style.backgroundColor = '#ebe8e857'
   element.style.boxShadow = `0 0 2px rgb(255, 243, 243)`
 }

 function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
 }