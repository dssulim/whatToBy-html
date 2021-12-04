function displayHideUserMenu(myParentElement, shim, userMenu, userMenuItem){
    //console.log(myParentElement, shim, userMenu, userMenuItem);
    const shimUserMenu = document.querySelector("." + shim);
    const targetClosestUserMenu = "." + userMenu;
    const targetClosestUserMenuItem = "." + userMenuItem;
    const shimMenu = "." + shim;
    const parentElement = document.querySelector("." + myParentElement);
    shimUserMenu.classList.add("shim-modal-show");

    parentElement.addEventListener("click", function(event){
        let target = event.target;
        if(target.closest(targetClosestUserMenu) && !target.closest(targetClosestUserMenuItem)) {
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

// window.addEventListener('DOMContentLoaded', function() {
//     let headerRight = document.querySelector(".header-right");
//     let shimUserMenu = document.querySelector(".shim-user-menu");
//
//     headerRight.addEventListener("click", function(event){
//         // console.log(event.target);
//         let target = event.target;
//         if(target.closest(".user-menu") && !target.closest(".user-menu-item"))
//             event.stopPropagation();
//         else if( target.closest(".shim-user-menu") )
//             shimUserMenu.classList.remove("shim-modal-show");
//         else shimUserMenu.classList.add("shim-modal-show");
//     });
//
//     let settingsButton = document.querySelector(".settings-button");
//     let shimUserMenuSettings = document.querySelector(".shim-user-menu-settings");
//     //console.log(shimUserMenuSettings); // null
//
//     settingsButton.addEventListener("click", function(event){
//         //console.log(event.target);
//         let target = event.target;
//         if(target.closest(".user-menu-settings") && !target.closest(".user-menu-item-s"))
//             event.stopPropagation();
//         else if( target.closest(".shim-user-menu-settings") )
//             shimUserMenuSettings.classList.remove("shim-modal-show-s");
//         else shimUserMenuSettings.classList.add("shim-modal-show-s");
//     });
// });