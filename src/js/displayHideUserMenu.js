function displayHideUserMenu(myParentElement, shim, userMenu, userMenuItem){
    //console.log(myParentElement, shim, userMenu, userMenuItem);
    let subModal = false;
    const shimUserMenu = document.querySelector("." + shim);
    const targetClosestUserMenu = "." + userMenu;
    const targetClosestUserMenuItem = "." + userMenuItem;

    const shimMenu = "." + shim;
    const parentElement = document.querySelector("." + myParentElement);
    shimUserMenu.classList.add("shim-modal-show");

    parentElement.addEventListener("click", function(event){
        let target = event.target;
        if(target.closest(targetClosestUserMenu) ) {
            event.stopPropagation();
        }
        else if( target.closest(shimMenu) ) {
            shimUserMenu.classList.remove("shim-modal-show");
        }
        else {
            shimUserMenu.classList.add("shim-modal-show");
        }
    });
}

function displayHideSubModal(subMyParentElement, subShim, subUserMenu, subUserMenuItem){
    const subShimUserMenu = document.querySelector("." + subShim);
    const subTargetClosestUserMenu = "." + subUserMenu;
    const subTargetClosestUserMenuItem = "." + subUserMenuItem;

    const subShimMenu = "." + subShim;
    const subParentElement = document.querySelector("." + subMyParentElement);
    subShimUserMenu.classList.add("shim-modal-show");

    subParentElement.addEventListener("click", function(event){
        let subtarget = event.target;
        if(subtarget.closest(subTargetClosestUserMenu) && !subtarget.closest(subTargetClosestUserMenuItem) ) {
            event.stopPropagation();
        }
        else if( subtarget.closest(subShimMenu) ) {
            subShimUserMenu.classList.remove("shim-modal-show");
        }
        else {
            subShimUserMenu.classList.add("shim-modal-show");
        }
    });
}

