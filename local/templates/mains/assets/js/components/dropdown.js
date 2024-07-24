const dropdown = () => {
    const itemsNode = document.querySelectorAll('.dropdown__item');
    
    const toggleActiveClass = (itemCurrent) => {
        if(itemCurrent.classList.contains('is-open')) {
            itemCurrent.classList.remove('is-open');
        }else {
            itemCurrent.classList.add('is-open');
        }
    }

    itemsNode.forEach(item=> {
        const itemTop = item.querySelector('.dropdown__item-top');
        itemTop.addEventListener('click', ()=> toggleActiveClass(item));
    });
}

export default dropdown;