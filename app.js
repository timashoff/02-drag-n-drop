const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0) //связано с eventLoop и очередью задач
}


function dragend(event) {
  event.target.className = 'item' // аналогичная запись event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
  event.preventDefault() //отменяет поведение по умолчанию
}

function dragenter(event) {
  event.target.classList.add('hovered')
}

function dragleave(event) {
  event.target.classList.remove('hovered')
}

function dragdrop(event) {
  event.target.append(item)
  event.target.classList.remove('hovered')
}