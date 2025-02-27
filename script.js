const btnNo = document.querySelector("#btn-random")

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%"
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%"
}

btnNo.addEventListener("mouseenter", function (e) {
    moverAleatoriamente(e.target)
})

document.querySelectorAll(".btn a").forEach(button => {
    button.addEventListener("click", function () {
      this.classList.add("bounce");
  
      setTimeout(() => {
        this.classList.remove("bounce");
      }, 600);
    });
  });