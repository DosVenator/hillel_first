const wrap = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');
const tabl = document.querySelector('.table');
btn.addEventListener('click', () => {
    tabl.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        tabl.appendChild(row);
        for (let j = 1; j <= 10; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);  
        }
    }
    wrap.appendChild(tabl);
    tabl.classList.toggle('active');
})
