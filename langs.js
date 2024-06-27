if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en');
}
function Translate() {
    return {
        homeLang: function() {
            return {
                parent: document.getElementById('publish'),
                tr: function() {
                    const inner = `
<div class="row">
    <p class="mini-title">
        BsMatik, hesap makinesi uygulamasıdır.
    </p>
</div>
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
                    localStorage.setItem('lang', 'tr');
                    this.parent.innerHTML = inner;
                },
                en: function() {
                    const inner = `
<div class="row">
    <p class="mini-title">
        BsMatik is a calculation application.
    </p>
</div>
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
                    localStorage.setItem('lang', 'en');
                    this.parent.innerHTML = inner;
                }
            }
        }
    }
}