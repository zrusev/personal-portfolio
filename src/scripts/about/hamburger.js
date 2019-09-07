(() => {
    const btn = document.getElementById("menu-toggle");
    const chkbox = document.getElementById("menuToggle").getElementsByTagName("input")[0];
    const lines = btn.querySelectorAll(".line");
    const cls = {
        open: "open",
        close: "close"
    };
    let btnClass = cls.open;

    btn.addEventListener("click", () => {
        if (btn.classList.contains(cls.open)) {
            btn.classList.remove(btnClass);
            btnClass = cls.close;
            chkbox.checked = false;
        } else if (btn.classList.contains(cls.close)) {
            btn.classList.remove(btnClass);
            btnClass = cls.open;
            chkbox.checked = true;
        }

        void btn.offsetWidth;
        btn.classList.add(btnClass);
    });
})();