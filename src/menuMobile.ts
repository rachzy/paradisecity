const menuMobileIcon = document.querySelector("#menu-button") as HTMLIFrameElement;
const menuMobileContainer = document.querySelector("#menu-mobile-container") as HTMLDivElement;

menuMobileIcon.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if(menuMobileContainer.classList.contains("active")) {
        return menuMobileContainer.classList.remove("active");
    }
    menuMobileContainer.classList.add("active");
    document.addEventListener("click", (e: any) => { //It had to be of type "any" because of a TS bug that doesn't identify the property "path"
        if(e.path[0].id === "menu-mobile-container") return;
        menuMobileContainer.classList.remove("active");
    })
})