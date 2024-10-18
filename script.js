let yourTime = document.getElementById('yourtime');
let startTime = document.getElementById('start');
let timeLeft = document.getElementById('time');
let notification = document.getElementById('notification');

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
            timeLeft.textContent = '00:00:00'; // Khi hết giờ đặt về 00:00
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
inputTime();