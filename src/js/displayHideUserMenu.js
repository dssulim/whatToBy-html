window.addEventListener('DOMContentLoaded', function() {
    let headerRight = document.querySelector(".header-right");
    let shimUserMenu = document.querySelector(".shim-user-menu");
    headerRight.addEventListener("click", function(event){
        let target = event.target;
        if(target.closest(".user-menu") && !target.closest(".user-menu-item"))
            event.stopPropagation();
        else if( target.closest(".shim-user-menu") )
            shimUserMenu.classList.remove("shim-modal-show");
        else shimUserMenu.classList.add("shim-modal-show");
    });
});