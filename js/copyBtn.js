const copyIpBtn = document.querySelector("#copyip-btn");

copyIpBtn.addEventListener("click", () => {
    copyIpBtn.classList.add("clicked");
    copyIpBtn.textContent = "IP copiado!"
})