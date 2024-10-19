// Bài tập 1

let yourTime = document.getElementById('yourtime');
let startTime = document.getElementById('start');
let timeLeft = document.getElementById('time');
let notification = document.getElementById('notification');

let closeBtn = document.getElementById('close-my-modal');

startTime.onclick = function inputTime() {
    let yourTimeValue = yourTime.value;
    let urTime = parseInt(yourTimeValue);

    if (isNaN(urTime) || urTime <= 0) {
        let stringHTML = `
            <h1 style="font-size: 16px;">Vui lòng nhập thời gian hợp lệ</h1>
        `
        const notificationBlock  = document.getElementById('notification');
        notificationBlock.innerHTML = stringHTML;
    }

    notification.style.display = 'none'; // Ẩn thông báo trước khi bắt đầu

    // Đếm ngược với setTimeout

    function timeLeftFunction() {
        if (urTime > 0) {
            timeLeft.textContent = formatTime(urTime);
            urTime--; // Giảm thời gian đếm ngược
            setTimeout(timeLeftFunction, 1000); // Gọi lại hàm sau 1 giây
          } else {
            timeLeft.textContent = '00:00:00'; // Khi hết giờ đặt về 00:00:00
            notification.style.display = 'block'; // Hiển thị thông báo
          }
    }

    timeLeftFunction();
}

function formatTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds % 3600) / 60);
    let second = seconds % 60;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}
// formatTime(seconds);


// Nút X close thông báo - xem lại

function close() {
    console.log("hi")
    document.getElementById('notification').style.display = 'none';
    closeBtn.style.display = 'none';
    document.body.style.overflow = 'unset';
}

closeBtn.onclick = close;

// Bài tập 2

// new Date().getDate()
// let messenger = document.getElementById('messenger');

// setInterval(function() {

//     }

// let currentDate = document.getElementById('date');
// let currentTime = document.getElementById('time');

// currentTime = function updateTime() {
//     let currentDate = new Date();
//     let hours = currentDate.getHours();
//     let minutes = currentDate.getMinutes();
//     let seconds = currentDate.getSeconds();
//     let day = currentDate.getDate();
//     let month = currentDate.getMonth() + 1;
//     let year = currentDate.getFullYear();

//     let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     let formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

//     // Hiển thị thời gian và ngày tháng trong HTML
//     document.getElementById('date-store').innerHTML = `<p>${formattedDate}</p>`;
//     document.getElementById('time-store').innerHTML = `<p>${formattedTime}</p>`;

// }

// Cập nhật mỗi giây
// setInterval(updateTime, 1000);

// Chạy ngay khi trang được tải
// updateTime();

// Test lai github