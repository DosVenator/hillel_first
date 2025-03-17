// const ab = document.querySelector('.containerParent2');
// const li = document.querySelector('.li');
// ab.addEventListener('click', event => {
//  if (event.target.classList.contains('btn_li')) {
//     console.log('hello')
//  }
// })
// document.querySelector('.btn_input').addEventListener('click', () => {
//     console.log(document.querySelector('.input').value)
// })

// let mss = [
//     {text: 'jjdhdh', id: '1'},
//     {text: 'jjdhdsdsdff', id: '2'},
//     {text: 'jjdhdh dnhwhe dew', id: '3'}
// ];
// mss.forEach((a) => {
//     const par = document.createElement('p');
//     par.textContent = a.text;
//     li.appendChild(par);
// })

const btnAdd = document.querySelector('.btn_input');
const ol = document.querySelector('.ol');
btnAdd.addEventListener('click', () => {
    const input = document.querySelector('.input');
    const textInput = input.value;
    if (textInput === '') {
        return;
    }
    const li = document.createElement('li');
    const btnDel = document.createElement('button');
    btnDel.classList.add('btn_delete')
    btnDel.classList.add('button')
    btnDel.textContent = 'Delete'
    li.textContent = textInput;
    li.appendChild(btnDel);
    ol.appendChild(li);
    input.value = '';
});
ol.addEventListener('click', event => {
    if (event.target.classList.contains('btn_delete')) {
        event.target.parentElement.remove();
    }
})