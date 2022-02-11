document.querySelector("svg rect:nth-child(2)").addEventListener('mouseenter', (event) => {
    event.currentTarget.classList.add('mouseenter')
})

document.querySelector("svg rect:nth-child(2)").addEventListener('mouseleave', (event) => {
    event.currentTarget.classList.remove('mouseenter')
})