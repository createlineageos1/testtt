function launchApp(path) {
  const win = document.getElementById("app-window");
  fetch(path)
    .then(res => res.text())
    .then(html => {
      win.innerHTML = html;
    });
}
