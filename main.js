var time = 0
var limit = null
var id = null
var $time = document.querySelector('#time')
var $start = document.querySelector('#start')
var $stop = document.querySelector('#stop')

function update(){
  return time = time + 1
}

function updateDom(){
  time.toString()
  return $time.textContent = time
}

function removeStart(){
  if (id !== null) {
    $start.remove()
  }
  return
}

function startTimer(){
  if(id === null){
    id = window.setInterval(update, 1000)
    window.setInterval(updateDom, 16)
  }
}


function stopTimer(){
  window.clearInterval(id)
  id = null
  return
}

$start.addEventListener('click', function(event){
  event.preventDefault()
  startTimer()
  removeStart()
});

$stop.addEventListener('click', function(event){
  event.preventDefault()
  stopTimer()
})
