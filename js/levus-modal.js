//

class LevusModal{
  // приймає 2 параметра -- елемент, на якому клікають і блок, який має відкритися
  constructor(el,listen){
    this.el = document.querySelector(el);
    this.listen = listen;
  }

  click(){
    this.el.addEventListener('click', _ => {

      const div = document.createElement('div');
      div.append(this.listen);
      div.setAttribute('id', 'levus-modal');
      document.body.append(div);

    });
  }

}



/* 
function LevusModal(el,block){
  this.el = el;
  this.block = block;

  // елемент, на який будуть клікати
  const element = document.querySelector(this.el);

  // елемент, який має зявлятися, коли на нього клікають
  const div = document.createElement('div');
  div.append(this.block);
  div.setAttribute('id', 'id-modal');
  document.body.append(div);

  element.addEventListener('click', _ => {
    
  });
}
 */


(new LevusModal('#button', 'text')).click();
