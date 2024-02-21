/* ANIMATED DOTS JS */
const dots = document.querySelector('.loading__dots')

const addAnimated = () =>{
    /* Add animate class */
    dots.classList.add('animate')

    setTimeout(() =>{
        /* Remove animate class */
        dots.classList.remove('animate')

        setTimeout(() =>{
            /* Run the function again */
            addAnimated()
        }, 100)
    }, 2600)
}
addAnimated()