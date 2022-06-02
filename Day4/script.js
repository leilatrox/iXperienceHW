const form = document.getElementById("form");
const input = document.getElementById("input");
const butt = document.getElementById("button");

// elem.parentElement.children[2].innerHTML = 'person';
// elem.setAttribute("title", "hello");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
    //input.value = '';
});

input.addEventListener("change", (e) => {
    debugger;
    localStorage.setItem('name', e.target.value); //or input.value
})

// form.addEventListener('click', (e) => {
//     console.log('form click');
// });

butt.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('button click');
});

input.value = localstorage.getItem('name');

// console.log(elem.removeAttribute('class'));