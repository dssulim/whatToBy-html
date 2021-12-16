let lists = document.querySelectorAll('.section-heading-shop-item');
lists.forEach(list=> {
    list.addEventListener('click', function(event){
        let target = event.target;
        console.log(target);
        let arrow = target.querySelector('.arrow-of-list');
        if(target.closest('.section-heading-shop-item')) {
            let parentTarget = target.closest('.section-heading-shop-item');
            arrow = parentTarget.querySelector('.arrow-of-list');
            arrow.classList.toggle('rotate-180');
        }
        else if(arrow) {
            arrow.classList.toggle('rotate-180');
        }
    });
});