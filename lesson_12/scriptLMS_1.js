const firstButton = document.querySelector('.btn_1');
const secondButton = document.querySelector('.btn_2');

let userUrl;
firstButton.addEventListener('click', () => {
    let location = prompt('Enter URL');
    if (location) {
        userUrl = location;
        alert('URL saved')
        return
    }
    alert('Try again');
})
secondButton.addEventListener('click', () => {
    if (userUrl) {
    window.location.href = userUrl;
    return;
    }
    alert('You must enter URL') 
})
