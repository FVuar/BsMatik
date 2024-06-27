document.addEventListener('DOMContentLoaded', () => {
    const homePage = Translate().homeLang();
    const changeLanguage = document.getElementById('changeLanguage');

    if (localStorage.getItem('lang') === "en") {
        homePage.en();
    } else {
        homePage.tr();
    }
    
    changeLanguage.addEventListener('change', (e) => {
        if (e.target.value === "en") {
            homePage.en();
        } else {
            homePage.tr();
        }
        document.querySelector(`#changeLanguage option[value="${e.target.value}"]`).selected = true;
    })
    changeLanguage.value = localStorage.getItem('lang');

})