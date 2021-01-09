const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('form');

function showError(input, message) {
  const control = input.parentElement;
  control.className = 'form-control error';
  input.placeholder = '';
  const small = control.querySelector('small');
  small.textContent = message;
}

function showsuccess(input) {
  let control = input.parentElement;
  control.className = 'form-control success';
  const small = control.querySelector('small');
  small.textContent = '';
}

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {

  e.preventDefault();

  if(fname.value === '') {
    showError(fname, 'First Name Cannot be empty')
  } else {
    showsuccess(fname);
  }

  if(lname.value === '') {
    showError(lname, 'Last Name Cannot be empty')
  } else {
    showsuccess(lname);
  }

  if(email.value === '') {
    showError(email, 'Email Cannot be empty')
  } else if(!isValidEmail(email.value)) {
    showError(email, 'Looks like this is not an Email')
  }else {
    showsuccess(email);
  }

  if(password.value === '') {
    showError(password, 'Password Cannot be empty')
  } else {
    showsuccess(password);
  }

})