
function addProgressBar() {
      const container = document.getElementById("container");

      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";

      const fill = document.createElement("div");
      fill.className = "fill";

      progressBar.appendChild(fill);
      container.appendChild(progressBar);

      
      setTimeout(() => {
        fill.style.width = "100%";
      }, 10);
    }
