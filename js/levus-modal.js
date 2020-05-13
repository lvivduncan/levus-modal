/*
  2 параметри:
  1 -- елемент, на який клікають, 
  2 -- контент, який має бути показано
*/

// todo: кнопка "закрити" і закриття при натискання на "ескейп"

function levusModal(el,hidden){
  // елемент, на який клікають
  const element = document.querySelector(el);

  // контент, який має бути показаний після кліку
  const content = document.querySelector(hidden);

  // створюємо кнопку для закриття модального вікна
  const close = document.createElement('div');
  close.classList.add('levus-close');

  document.addEventListener('DOMContentLoaded', _ => {
    document.body.append(close);
  });
  
  // відкриваємо вікно
  element.addEventListener('click', _ => {
    content.classList = 'levus-modal active';
    document.body.classList = 'levus-body';
    close.classList.add('active');
  });

  // закриваємо вікно
  close.addEventListener('click', _ => {
    content.classList = 'levus-modal';
    document.body.classList = '';
    close.classList.remove('active');
  });

}

// тест 1
levusModal('#button', '#hidden');

// тест 2
levusModal('#button2', '#hidden2');