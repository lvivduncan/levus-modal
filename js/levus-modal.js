/*
  2 блок:
  1 -- елемент, на який клікають, 
  2 -- контент, який має бути показано
*/

function levusModal(el,hidden){
  // елемент, на який клікають
  const element = document.querySelector(el);

  // контент, який має бути показаний після кліку
  const content = document.querySelector(hidden);
  
  element.addEventListener('click', e => {
    e.stopPropagation();
    content.classList = 'levus-modal active';
    document.body.classList = 'levus-body';
  });

  document.body.addEventListener('click', _ => {
    content.classList = 'levus-modal';
    document.body.classList = '';
  });

  console.log(element, content)

}

levusModal('#button', '#hidden');
levusModal('#button2', '#hidden2');