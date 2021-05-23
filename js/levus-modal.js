// 23-05-2021
{
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'levus-wrapper');

    document.querySelectorAll('.levus-modal').forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault();

            const link = this.dataset.link;

            // автоматично закриваємо всі інші модальні вікна
            document.querySelectorAll('.levus-hidden-modal').forEach(elems => elems.classList.remove('active'));

            // висота видимого вікна
            const viewport = window.innerHeight;

            // показуємо модальне вікно
            document.getElementById(link).classList.add('active');
            document.getElementById(link).style.top = `${viewport/2-60}px`;
            
            // активуємо враппер
            document.querySelector('body').classList.add('lock');
            document.querySelector('body').append(wrapper);

        });
    });

    // закриваємо по кліку
    wrapper.addEventListener('click', function(){
        closeModal();
    });

    // закриваємо, натиснувши кнопку "ескейп"
    document.addEventListener('keydown', e => {
        if(e.code == 'Escape' && e.key == 'Escape'){
            closeModal();
        }
    });

    function closeModal(){
        document.querySelectorAll('.levus-hidden-modal').forEach(item => item.classList.remove('active'));
        document.querySelector('body').classList.remove('lock');
        wrapper.remove();
    }
}

// todo: auto detect height and width modal size