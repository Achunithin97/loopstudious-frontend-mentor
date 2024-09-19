var close_Btn = document.getElementById('close');
var hamburger_Btn = document.getElementById('dropdown');
var navListMenu_Btn = document.getElementById('menu');
hamburger_Btn.addEventListener('click', () => {
    let display = navListMenu_Btn.style.display;
    console.log('hi')
    if (display === 'none') {
        console.log('hello')
        navListMenu_Btn.style.display = 'block'
        hamburger_Btn.style.display = 'none'
    } else {
        close_Btn.addEventListener('click', () => {
            console.log('bye')
            navListMenu_Btn.style.display = 'none'
            hamburger_Btn.style.display = 'block'
        })
    }
})


