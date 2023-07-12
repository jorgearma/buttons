const btnclick = document.querySelector('#btns .tres ')
btnclick.addEventListener('click' , (e) => {

    const contenedorbtn = document.querySelector('#btns')
    const eliminar = contenedorbtn.lastChild;

eliminar.remove()


})



