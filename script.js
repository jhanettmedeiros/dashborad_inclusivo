function abrirImagem() {
    window.open("https://drive.google.com/file/d/1ZQR-EIh4CH74F-LvDmQ5FHmzbzvuc3W3/view?usp=sharing", "_blank");
  }

  function lerAviso() {
    const texto = "Esse é um aviso importante. Por favor, preste atenção.";
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    window.speechSynthesis.speak(fala);
  }  
  
  const contrastSlider = document.getElementById('contrastSlider');
  contrastSlider.addEventListener('input', function () {
    const value = contrastSlider.value;
    document.body.style.filter = `contrast(${value}%)`;
  });

  const fontSizeSlider = document.getElementById('fontSizeSlider');
  const root = document.documentElement; // A raiz da página (html)

  fontSizeSlider.addEventListener('input', function () {
    const newSize = `${this.value}px`;
    root.style.setProperty('--base-font-size', newSize);
  });

  const popupToggle = document.getElementById('popupToggle');
  popupToggle.addEventListener('change', function () {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(modal => {
      if (!this.checked) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
      }
    });
  });