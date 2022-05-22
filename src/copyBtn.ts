const copyIpBtn = document.querySelector("#copyip-btn") as HTMLButtonElement;
const serverIp = document.querySelector("#serverip") as HTMLInputElement;

copyIpBtn.addEventListener("click", () => {
    //Select the input value
    serverIp.select();
    serverIp.setSelectionRange(0, 99999); //For mobile

    //Copy the input value to the user clipboard
    navigator.clipboard.writeText(serverIp.value);

    copyIpBtn.classList.add("clicked");
    copyIpBtn.textContent = "IP copiado!"
});