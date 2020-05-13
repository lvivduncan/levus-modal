/*
  2 параметри:
  1 -- елемент, на який клікають, 
  2 -- контент, який має бути показано
*/

function levusModal(clickElement,hiddenElement){
  // елемент, на який клікають
  const element = document.querySelector(clickElement);

  // контент, який має бути показаний після кліку
  const content = document.querySelector(hiddenElement);

  // створюємо кнопку для закриття модального вікна
  const close = document.createElement('div');
  close.classList.add('levus-close');
  document.body.append(close);
  
  // відкриваємо вікно
  element.addEventListener('click', _ => {
    content.classList.add('active');
    document.body.classList.add('levus-body');
    close.classList.add('active');
  });

  // закриваємо вікно
  close.addEventListener('click', _ => {
    content.classList.remove('active');
    document.body.removeAttribute('class');
    close.classList.remove('active');
  });

  // закриваємо натиснувши на кнопку "ескейп"
  document.addEventListener('keyup', e => {
    if(e.key === "Escape" || e.keyCode === 'Escape') {
      content.classList.remove('active');
      document.body.removeAttribute('class');
      close.classList.remove('active');
    }
  });
}

// тест 1
levusModal('#button', '#hidden');

// тест 2
levusModal('#button2', '#hidden2');