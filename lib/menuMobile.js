const menuMobileIcon = document.querySelector("#menu-button");
const menuMobileContainer = document.querySelector("#menu-mobile-container");
menuMobileIcon.addEventListener("click", e => {
  e.preventDefault();
  e.stopPropagation();

  if (menuMobileContainer.classList.contains("active")) {
    return menuMobileContainer.classList.remove("active");
  }

  menuMobileContainer.classList.add("active");
  document.addEventListener("click", e => {
    //It had to be of type "any" because of a TS bug that doesn't identify the property "path"
    if (e.path[0].id === "menu-mobile-container") return;
    menuMobileContainer.classList.remove("active");
  });
});
//# sourceMappingURL=menuMobile.js.map