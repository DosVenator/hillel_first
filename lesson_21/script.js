const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const myModal = document.querySelector('.btn-primary');
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alertTrigger = document.getElementById('liveAlertBtn')

let alertToggle = false;

function toggleAlert() {
    const existingAlert = document.querySelector('.custom-alert');
    if (alertToggle && existingAlert) {
      existingAlert.remove();
      alertToggle = false;
    } else {
      appendAlert('Nice, you triggered this alert message!', 'success', alertPlaceholder);
    }
  }

const appendAlert = (message, type, block) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('custom-alert');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  block.appendChild(wrapper)
  alertToggle = true;
}

if (alertTrigger) {
    alertTrigger.addEventListener('click', toggleAlert);
  }


