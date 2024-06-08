document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('changeTextButton');
    const h1 = document.querySelector('h1');

    button.addEventListener('click', () => {
        h1.textContent = '¡Texto cambiado!';
    });
});