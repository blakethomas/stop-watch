var time = 0
var id = null
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')
var $reset = document.querySelector('#reset')

function update() {
  time = time + 1
}

function updateDom() {
  time.toString()
  $time.textContent = time
}

function toggleStart() {
  $start.classList.toggle('startbutton')
}

function startTimer() {
  if (id === null) {
    id = window.setInterval(update, 1000)
    window.setInterval(updateDom, 16)
  }
}

function stopTimer() {
  window.clearInterval(id)
  id = null
}

function reset(){
  time = 0
}

$start.addEventListener('click', function() {
  startTimer()
  toggleStart()
})

$stop.addEventListener('click', function() {
  stopTimer()
  toggleStart()
})

$reset.addEventListener('click', reset)
