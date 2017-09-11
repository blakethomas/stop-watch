var time = 0;

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

$start.addEventListener('click', function(event){
  event.preventDefault()
  window.setInterval(update, 1000)
  window.setInterval(updateDom, 0)
});
