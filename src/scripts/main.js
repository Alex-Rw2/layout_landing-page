document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact__forms');

  form.addEventListener('submit', (e) => {
    // impede o reload da página
    e.preventDefault();

    // dispara a validação nativa dos campos
    if (!form.checkValidity()) {
      // se algum campo inválido, deixa o browser mostrar os erros
      form.reportValidity();

      return;
    }

    // aqui todos os campos são válidos
    form.reset();

    // opcional: feedback visual
  });
});
