/*
bt = document.querySelector('button')

bt.onclick = () => {
    document.querySelector('html').classList.toggle('light')
}
*/

function toggleMode() {
    const html = document.querySelector('html')
    const img = html.querySelector('#profile img')

    html.classList.toggle('light')

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Avatar Light')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Avatar Dark')
    }
}