import validator from 'validator';
import { configisEmail, confingPassword, confingUserName } from './ObjConfig';
(() => {
  class validForm {
    typeForm: HTMLFormElement;
    arrayError: string;
    constructor() {
      this.typeForm = document.querySelector('#form') as HTMLFormElement;
      this.arrayError = '';
    }

    startMgs() {
      this.typeForm.addEventListener('submit', (ev) => {
        this.halderSubmit(ev);
      });
    }

    halderSubmit(ev: Event) {
      ev.preventDefault();
      this.userEmail();
    }

    userEmail() {
      let valid = true;
      const formFields = document.querySelectorAll(
        'input',
      ) as NodeListOf<HTMLInputElement> as NodeListOf<HTMLInputElement>;
      const formName = document.querySelector('.username') as HTMLInputElement;
      const formEmail = document.querySelector('.email') as HTMLInputElement;
      const passwordOne = document.querySelector(
        '.password',
      ) as HTMLInputElement;
      const passwordTwo = document.querySelector(
        '.password2',
      ) as HTMLInputElement;

      const errorMessage = document.querySelectorAll(
        '.error-message',
      ) as NodeListOf<HTMLInputElement> as NodeListOf<HTMLInputElement>;

      formFields.forEach((el: HTMLInputElement, indx: number) => {
        const input = el.value.length;

        errorMessage[indx].innerText = '';
        errorMessage[indx].style.display = 'none';

        if (!input) {
          valid = false;
          errorMessage[indx].innerHTML += `Preencha Este Campo!</br>`;
          errorMessage[indx].style.display = 'block';
        }

        if (input < 6) {
          valid = false;
          errorMessage[indx].innerHTML += 'No minimo 6 caracteres!</br>';
          errorMessage[indx].style.display = 'block';
        }

        return valid;
      });

      if (!validator.isStrongPassword(formName.value, confingUserName)) {
        valid = false;
        errorMessage[0].innerHTML +=
          'Precisa conter no minimo: 1 letra maiúscula!</br>';
        errorMessage[0].style.display = 'block';
      }

      if (!validator.isEmail(formEmail.value, configisEmail)) {
        valid = false;
        errorMessage[1].innerHTML += 'Esse Email não é Valido!</br>';
        errorMessage[1].style.display = 'block';
      }

      if (!validator.isStrongPassword(passwordOne.value, confingPassword)) {
        valid = false;
        errorMessage[2].innerHTML +=
          'Precisa conter: 1 letra maiúscula, simbolo, numero!</br>';
        errorMessage[2].style.display = 'block';
      }

      if (!validator.equals(passwordTwo.value, passwordOne.value)) {
        valid = false;
        errorMessage[2].innerHTML += 'As Senhas não são iguais!</br>';
        errorMessage[2].style.display = 'block';
      }

      if (!validator.isStrongPassword(passwordTwo.value, confingPassword)) {
        valid = false;
        errorMessage[3].innerHTML +=
          'Precisa conter: 1 letra maiúscula, simbolo, numero!</br>';
        errorMessage[3].style.display = 'block';
      }

      if (!validator.equals(passwordOne.value, passwordTwo.value)) {
        valid = false;
        errorMessage[3].innerHTML += 'As Senhas não são iguais!</br>';
        errorMessage[3].style.display = 'block';
      }

      if (valid) {
        formName.value = '';
        formEmail.value = '';
        passwordOne.value = '';
        passwordTwo.value = '';
        alert('Campo Enviado!');
      }
    }
  }

  const passar = new validForm();
  passar.startMgs();
})();
