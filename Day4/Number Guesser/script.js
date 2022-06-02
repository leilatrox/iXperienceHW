const input = document.getElementById('number-in');
const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', (e) => {
    const gen = Math.round(Math.random() * 10);
    const elem = document.createElement('div');
    output.classList.remove('hide');
    elem.classList.add('alert');
    output.innerHTML = '';
    if (input.value == gen) {
        elem.classList.add('alert-success');
        elem.innerHTML = 'yes it was ' + gen;
    } else {
        elem.classList.add('alert-danger');
        elem.innerHTML = 'no it was ' + gen;
    }
    output.appendChild(elem);
})