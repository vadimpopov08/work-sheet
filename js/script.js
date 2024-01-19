const myButton = document.getElementById('myButton')
const nameInput = document.getElementById('nameInput')
const list = document.getElementById('list')

myButton.addEventListener('click', function (eve) {
    eve.preventDefault();
    console.log('Тест')
})