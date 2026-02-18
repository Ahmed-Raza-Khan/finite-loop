
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");

    toggle.addEventListener("click", () => {
        if (menu.style.right === "0px") {
            menu.style.right = "-100%";
        } else {
            menu.style.right = "0";
        }
    });
