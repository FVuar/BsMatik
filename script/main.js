function Icon(icon) {
    let svg;
    switch (icon) {
        case 'theme':
            svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                       stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"/>
            </svg>`;
            break;
        case 'lang':
            svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>`;
            break;
        default:
            break;
    }
    return svg;
}
function Show() {
    return {
        lang: function() {
            const homePage = Translate().homeLang();
            const changeLanguage = document.getElementById('changeLanguage');
            let currentLang = JSON.parse(localStorage.getItem('preferences')).lang;

            if (currentLang === "en") {
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
            changeLanguage.value = currentLang;
        },
        theme: function() {
            const changeTheme = document.getElementById('changeTheme');
            let currentTheme = JSON.parse(localStorage.getItem('preferences')).theme;
            
            document.documentElement.dataset.theme = currentTheme;
            currentTheme === "system" ? document.documentElement.removeAttribute('data-theme') : document.documentElement.dataset.theme = currentTheme;;
            changeTheme.addEventListener('change', (e) => {   
                e.target.value === "system" ? document.documentElement.removeAttribute('data-theme') : document.documentElement.dataset.theme = e.target.value;
                document.querySelector(`#changeTheme option[value="${e.target.value}"]`).selected = true;
                update.preferences({ theme: e.target.value })
            })
            changeTheme.value = currentTheme;
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const show = Show();

    document.getElementById('changeThemeLabel').innerHTML = Icon('theme');
    document.getElementById('changeLanguageLabel').innerHTML = Icon('lang');
    show.lang();
    show.theme();
})