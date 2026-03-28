function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let icon = document.getElementById("icon");

    if (document.body.classList.contains("dark-mode")) {
      icon.innerHTML = "☀️";
    } else {
      icon.innerHTML = "🌙";
    }
  }

  function start() {
    window.location.href = "styles.css";
  }