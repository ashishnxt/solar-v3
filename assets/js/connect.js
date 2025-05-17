  fetch('/connect.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('connectWrapper').innerHTML = data;
      // Re-bind the button events after injecting
      const connectBtn = document.getElementById("connectBtn");
      const container = document.getElementById("connectContainer");

      connectBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        container.classList.toggle("active");
      });

      document.addEventListener("click", (e) => {
        if (!container.contains(e.target)) {
          container.classList.remove("active");
        }
      });

      window.addEventListener("scroll", () => {
        container.classList.remove("active");
      });
    });
