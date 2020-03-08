/**
 * 
 * @param {*} el -- елемент, на якому клікають
 * @param {*} content -- блок, який має з'являтися по кліку
 */
function levusModal(el,content){
  const element = document.querySelector(el);

  const div = document.createElement('div');
  div.append(content);
  div.setAttribute('style', 'position: absolute; top: calc(50% - 50px); right: calc(50% - 50px); bottom: calc(50% - 50px); left: calc(50% - 50px); width: 100px; height: 100px; background: red; color: white; padding: 10px;');

  element.addEventListener('click', _ => {
    document.body.appendChild(div);
    document.body.style.backgroundColor = 'rgba(0,0,0,0.3)';
  });

  setTimeout( _ => {
    document.body.removeAttribute('style');
    div.remove();
  }, 3000);

}

levusModal('#button', 'test click');