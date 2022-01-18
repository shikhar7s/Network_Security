'use strict';

const btnEncrypt = document.querySelector('.btn-primary-encrypt');
const btnDecrypt = document.querySelector('.btn-primary-decrypt');
const btnReset = document.querySelector('.btn--new');

btnEncrypt.addEventListener('click', function () {
  let form = document.getElementById('encrypt');
  let text_to_encrypt = form.elements['text_to_encrypt'].value;
  let new_text_to_encrypt = '';
  for (let i = 0; i < text_to_encrypt.length; i++) {
    if (
      text_to_encrypt[i].charCodeAt(0) >= 97 &&
      text_to_encrypt[i].charCodeAt(0) <= 122
    )
      new_text_to_encrypt += String.fromCharCode(
        25 - text_to_encrypt[i].charCodeAt(0) + 97 + 97
      );
    else if (
      text_to_encrypt[i].charCodeAt(0) >= 65 &&
      text_to_encrypt[i].charCodeAt(0) <= 90
    )
      new_text_to_encrypt += String.fromCharCode(
        25 - text_to_encrypt[i].charCodeAt(0) + 65 + 65
      );
    else new_text_to_encrypt += text_to_encrypt[i];
  }
  document.getElementById('show_encrypted').textContent = new_text_to_encrypt;
  let string = '';
  form.elements['text_to_encrypt'].value = string;
});

btnDecrypt.addEventListener('click', function () {
  let form = document.getElementById('decrypt');
  let text_to_decrypt = form.elements['text_to_decrypt'].value;
  let new_text_to_decrypt = '';
  for (let i = 0; i < text_to_decrypt.length; i++) {
    if (
      text_to_decrypt[i].charCodeAt(0) >= 97 &&
      text_to_decrypt[i].charCodeAt(0) <= 122
    )
      new_text_to_decrypt += String.fromCharCode(
        25 - text_to_decrypt[i].charCodeAt(0) + 97 + 97
      );
    else if (
      text_to_decrypt[i].charCodeAt(0) >= 65 &&
      text_to_decrypt[i].charCodeAt(0) <= 90
    )
      new_text_to_decrypt += String.fromCharCode(
        25 - text_to_decrypt[i].charCodeAt(0) + 65 + 65
      );
    else new_text_to_decrypt += text_to_decrypt[i];
  }
  document.getElementById('show_decrypted').textContent = new_text_to_decrypt;
  let string = '';
  form.elements['text_to_decrypt'].value = string;
});

btnReset.addEventListener('click', function () {
  let string;
  document.getElementById('show_encrypted').textContent = string;
  document.getElementById('show_decrypted').textContent = string;
});
