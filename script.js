// show current date in jumbotron
setInterval(function() {
let date = moment()
document.getElementById('currentDay').textContent = date.format('[Today is] MMMM Do YYYY, h:mm:ss a')
}, 1000);
// save typed text per row to local storage
// show typed text in rows from local storage
// change color of textareas based on the time
const timeblock = document.querySelectorAll('.time-block')
console.log(timeblock)
for (var i = 0; i < timeblock.length; i++) {
    console.log(timeblock[i].id)
    if (parseInt(timeblock[i].id) < moment().hours()) {
        document.getElementById(timeblock[i].id.toString()).children[1].style.backgroundColor = '#d3d3d3'
    }
    else if (parseInt(timeblock[i].id) === moment().hours()) {
        document.getElementById(timeblock[i].id.toString()).children[1].style.backgroundColor = '#ff6961'
    }
    else {
        document.getElementById(timeblock[i].id.toString()).children[1].style.backgroundColor = '#77dd77'
    }
}