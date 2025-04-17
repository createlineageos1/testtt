function launchApp(path) {
  const frame = document.getElementById("app-frame");
  frame.src = path;
  frame.style.display = "block";
}

function updateTime() {
  const now = new Date();
  const timeStr = now.getHours().toString().padStart(2, '0') + ":" +
                  now.getMinutes().toString().padStart(2, '0');
  document.getElementById("time").textContent = timeStr;
}

setInterval(updateTime, 1000);
updateTime();
