if (!localStorage.getItem('preferences')) {
    localStorage.setItem('preferences', JSON.stringify({ lang: "en", theme: "system" }));
}
function Update() {
    return {
        storage: function(pref = { lang: undefined, theme: undefined }) {
            localStorage.setItem('preferences', JSON.stringify(pref));
        },
        preferences: function(pref = {lang: undefined, theme: undefined}) {
            let local = JSON.parse(localStorage.getItem('preferences')) || {};
            let opt = {
                lang: pref.lang === undefined ? local.lang : pref.lang,
                theme: pref.theme === undefined ? local.theme : pref.theme
            };
            this.storage(opt);
        }
    }
}
const update = Update();

function Meta(meta = {
    lang : "en",
    title : "Simple Calculator",
    description: "BsMatik is a calculation application. You can easily perform addition, subtraction, multiplication and division operations from this application"
}) {
    const project_name = "BsMatik";
    document.querySelector('title').innerText = `${meta.title} | ${project_name}`;
    document.querySelector('meta[name="description"]').content = meta.description;
    document.querySelector('meta[property="og:title"]').content = `${project_name}, ${meta.title}`;
    document.querySelector('meta[property="og:description"]').content = meta.description;
    document.querySelector('meta[name="twitter:title"]').content = `${project_name}, ${meta.title}`;
    document.querySelector('meta[name="twitter:description"]').content = meta.description;
    document.documentElement.lang = meta.lang;
}
function Translate() {
    return {
        homeLang: function() {
            return {
                parent: document.getElementById('publish'),
                tr: function() {
                    const inner = `
<hr>
<div class="row">
    <div class="col">
        <h3>Nedir bu BsMatik?</h3>
    </div>
    <div class="col">
        <p>
            BsMatik bir hesap makinesi uygulamasıdır.  Toplama, çıkarma, çarpma ve bölme işlemlerini bu uygulamadan kolaylıkla gerçekleştirebilirsiniz.
        </p>
    </div>
</div>
<hr>
<div class="row">
    <div class="col">
        <h3>BsMatik Nasıl Kullanılır?</h3> 
    </div>
    <div class="col">
        <p>
            Uygulamaya girdiğinizde aşağıda toplama, çıkarma, çarpma ve bölme işlemleri yer almaktadır.  Yapacağınız hesaplamaya göre birini seçin, ardından ilgili girdi alanlarına sayılarınızı girin, eşitle butonuna bastığınızda size verdiğiniz işlemin sonucunu döndürecektir.
        </p>
    </div>
</div>
<hr>
<div class="row">
    <div class="col">
        <h3>Nasıl İndirilir ve Kurululur?</h3>
    </div>
    <div class="col">
        <p>
            BsMatik'in Windows için son sürümünü aşağıdaki bağlantıdan indirebilirsiniz. Kurulum için exe dosyasına çift tıklayıp başlatmanız yeterlidir.
            <h4><a target="_blank" href="https://github.com/FVuar/BsMatik/releases/latest"><code>En Son Sürümü İndirmek için Tıklayınız</code></a></h4>
        </p>

    </div>
</div>
<hr>
<div class="row">
    <div class="col">
        <h3>Uygulamada oluşabilecek hatalar!</h3>
    </div>
    <div class="col">
        <p>
            <ul>
                <li>Lütfen metinsel bir değer girmekten kaçının.</li>
                <li>Girdi alanlarına kopyala-yapıştır işlevi uygulamayınız.</li> 
                <li>Lütfen özel karakterler(.,*/- vb.) kullanmayınız.</li>   
            </ul>
        </p>

    </div>
</div>
<hr>
                    `;
                    update.preferences({ lang: 'tr' })
                    Meta({ lang: 'tr', title: 'Basit Hesap Makinesi', description: "BsMatik bir hesap makinesi uygulamasıdır. Toplama, çıkarma, çarpma ve bölme işlemlerini bu uygulamadan kolaylıkla gerçekleştirebilirsiniz." });
                    this.parent.innerHTML = inner;
                },
                en: function() {
                    const inner = `
<hr>
<div class="row">
    <div class="col">
        <h3>Description:</h3>
    </div>
    <div class="col">
        <p>
            BsMatik is a calculation application. You can easily perform addition, subtraction, multiplication and division operations from this application. Thank you for using.
        </p>
    </div>
</div>
<hr>
<div class="row">
    <div class="col">
        <h3>How to Use BsMatik?</h3> 
    </div>
    <div class="col">
        <p>
            When you enter the application, below are the operations of add, subtract, multiply and divide. Choose one according to the calculation you will make, then enter your numbers in the textboxes, when you press the equalize button, it will give you the result.
        </p>
    </div>
</div>
<hr>
<div class="row">
    <div class="col">
        <h3>Installation:</h3>
    </div>
    <div class="col">
        <p>
            You can download the latest version of BsMatik for Windows from the link below. For installation, simply double-click the exe file and start it without taking any action.
            <h4><a target="_blank" href="https://github.com/FVuar/BsMatik/releases/latest"><code>Download the Latest Version</code></a></h4>
        </p>

    </div>
</div>
<hr>
<div class="row">
    <div class="col">
        <h3>Errors that may occur in the application!</h3>
    </div>
    <div class="col">
        <p>
            <ul>
                <li>Please do not enter a string value.</li>
                <li>Do not copy-paste string value into text box.</li> 
                <li>Special Character : .,*/- etc. Do not use.</li>   
            </ul>
        </p>

    </div>
</div>
<hr>
                    `;
                    update.preferences({ lang: 'en' })
                    Meta()
                    this.parent.innerHTML = inner;
                }
            }
        }
    }
}