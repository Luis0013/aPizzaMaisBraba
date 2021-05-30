const btnMobile = document.querySelector('#btnMobile')

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('arial-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('arial-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir menu')
    }
}

btnMobile.addEventListener('touchstart', toggleMenu);