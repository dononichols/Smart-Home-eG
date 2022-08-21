const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");



//===========   NAV MENU :mobile ========

//________ OPEN NAV MENU
// add an Event Listener on the menuBtn
menuBtn.addEventListener("click", () => {
    menu.style.display = 'block'; // on click, show these events
    menuBtn.style.display = 'none'; // on click, remove menu button
    closeBtn.style.display = 'inline-block'; // and replace it with the closeBtn
});

//________ CLOSE NAV MENU
// add an Event Listener on the menuBtn
closeBtn.addEventListener("click", () => {
    menu.style.display = 'none'; // on click, show these events
    menuBtn.style.display = 'inline-block'; // on click, remove menu button
    closeBtn.style.display = 'none'; // and replace it with the closeBtn
});