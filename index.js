const btn = document.querySelector('.contenedor-botones .boton')

const crearbtn = () =>{
    const nuevobtn = document.createElement('button')
    const contenedor = document.querySelector('.contenedor-botones')

    nuevobtn.innerHTML = btn.innerHTML
    
    btn.classList.forEach(clase => {nuevobtn.classList.add(clase)})



    contenedor.appendChild(nuevobtn)



}
crearbtn()



