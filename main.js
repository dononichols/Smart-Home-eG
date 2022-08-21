
//===========   NAV MENU :mobile ========

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");


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


//========   FAQ: Show/Hide faq ========

const faqs = document.querySelectorAll('.faq');

// Toggle open/close
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})



//========   Add Background Style to NAVBAR ========

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

