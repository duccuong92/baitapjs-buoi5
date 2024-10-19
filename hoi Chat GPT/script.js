new Date().getDate()
let messenger = document.getElementById('messenger');

setInterval(function() {

    }

let currentDate = document.getElementById('date');
let currentTime = document.getElementById('time');

currentTime = function updateTime() {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    let formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

    return `${formattedTime} ${formattedDate}`;

}

updateTime();
