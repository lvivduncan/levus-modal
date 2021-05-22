const wrapper = document.createElement('div');
wrapper.setAttribute('id', 'levus-wrapper');

document.querySelectorAll('.levus-modal').forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();

        const link = this.dataset.link;

        document.querySelectorAll('.levus-hidden-modal').forEach(elems => elems.classList.remove('active'));

        const viewport = window.innerHeight;

        document.getElementById(link).classList.add('active');
        document.getElementById(link).style.top = `${viewport/2-60}px`;
        
        // todo: window.innerHeight - document.documentElement.scrollHeight
        document.querySelector('body').classList.add('lock');
        document.querySelector('body').append(wrapper);

    });
});

wrapper.addEventListener('click', function(){
    closeModal();
});

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