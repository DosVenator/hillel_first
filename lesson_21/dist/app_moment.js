"use strict";

var myBirthday = moment('2000-09-13').format('D MMMM YYYY');
document.querySelector('.date_birth').textContent = myBirthday;
var input = document.querySelector('.input_date');
var pattern = /^(0?[1-9]|[12][0-9]|3[01])[.,\s\/](0?[1-9]|1[0-2])[.,\s\/](19|20)\d{2}$/;
var valid;
document.querySelector('.btn-success').addEventListener('click', function () {
  var date = input.value;
  validator(date, pattern);
});
function validator(value, patt) {
  if (patt.test(value)) {
    valid = true;
    showResult(valid, value);
  } else {
    valid = false;
    showResult(valid, value);
  }
}
function showResult(valid, date) {
  var resultBlock = document.querySelector('.date_user');
  if (valid) {
    resultBlock.textContent = moment(date, 'DDMMYYYY').format('YYYY-MM-DD');
  } else {
    resultBlock.innerHTML = '';
    appendAlert('Invalid format. Enter the date 30.12.2000', 'danger', resultBlock);
  }
}