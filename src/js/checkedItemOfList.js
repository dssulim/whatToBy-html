let itemOfList = document.querySelectorAll('.row-list');
itemOfList.forEach(item=> {
    item.addEventListener('click', function (event){
        let target = event.target;
        console.log(target.className);
        if (target.className === 'title-of-the-item'){
            target.classList.toggle('title-checked');
        } else if (target.className === 'title-of-the-item title-checked') {
            target.classList.toggle('title-checked');
        } else if (target.className === 'check-item'){

        }

    })
})
