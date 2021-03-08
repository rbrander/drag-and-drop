// app.js

////////////////////////////////////////////////
// Draggables Setup

let draggingElement
const onDragStart = (e) => {
  // add 'dragging' class name to draggable
  const element = e.target
  element.classList.add('dragging')
  draggingElement = element
}
const onDragEnd = (e) => {
  // remove 'dragging' class name from draggable
  const element = e.target
  element.classList.remove('dragging')
  draggingElement = null
}

const draggables = [...document.querySelectorAll('.draggable')]
draggables.forEach(element => {
  element.addEventListener('dragstart', onDragStart)
  element.addEventListener('dragend', onDragEnd)
})

////////////////////////////////////////////////
// Container Setup

const onDragOver = (e) => {
  const container = e.currentTarget
  e.preventDefault()
  const isSameContainer = draggingElement.parentNode === container
  if (!isSameContainer) {
    container.appendChild(draggingElement)
  }
}

const containers = [...document.querySelectorAll('.container')]
containers.forEach(container => {
  container.addEventListener('dragover', onDragOver)
})

