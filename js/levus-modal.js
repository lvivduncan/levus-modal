/*
  2 параметри:
  1 -- елемент, на який клікають, 
  2 -- контент, який має бути показано
*/

function levusModal(el,hidden){
  // елемент, на який клікають
  const element = document.querySelector(el);

  // контент, який має бути показаний після кліку
  const content = document.querySelector(hidden);
  
  // відкриваємо вікно
  element.addEventListener('click', e => {
    e.stopPropagation();
    content.classList = 'levus-modal active';
    document.body.classList = 'levus-body';
  });

  // закриваємо вікно
  document.body.addEventListener('click', _ => {
    content.classList = 'levus-modal';
    document.body.classList = '';
  });

}

// тест 1
levusModal('#button', '#hidden');

// тест 2
levusModal('#button2', '#hidden2');