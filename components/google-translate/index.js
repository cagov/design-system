const appendGoogleTranslateJS = () => {
  const JS = document.createElement('script');
  JS.type = 'text/javascript';
  JS.defer = 'defer';
  JS.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(JS);
};

class CAGOVGoogleTranslate extends window.HTMLElement {
  connectedCallback() {
    this.storagekey = 'google_translate_page_used';

    this.innerHTML = `<div class="quarter standard-translate d-none" id="google_translate_element">
      <a class="goog-init" href="#">Change language</a>
    </div>`;

    this.querySelector('.goog-init').addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem(this.storagekey, new Date().getTime());
      this.innerHTML = '<div class="quarter standard-translate" id="google_translate_element">loading</div>';
      this.loadGoogleTranslateJS();
    });

    this.loadGoogleTranslateJS();
  }

  loadGoogleTranslateJS() {
    if (sessionStorage.getItem(this.storagekey)) {
      appendGoogleTranslateJS();
    } else {
      this.querySelector('.standard-translate').classList.remove('d-none');
    }
  }
}
window.customElements.define('cagov-google-translate', CAGOVGoogleTranslate);

// global callback function for google translate javascript load
window.googleTranslateElementInit = () => {
  const translateEl = document.getElementById('google_translate_element');
  translateEl.innerHTML = '';
  translateEl.classList.remove('d-none');
  (() => new window.google.translate
    .TranslateElement({
      pageLanguage: 'en',
      gaTrack: !0,
      autoDisplay: !1,
      layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
    }, 'google_translate_element'))();
};
