/* =========================================================
   ARI WAHYUDI — PERSONAL PROFILE SCRIPT
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* NAVBAR — solid background on scroll */
  var navbar = document.getElementById('navbar');
  function handleNavbarScroll() {
    navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  handleNavbarScroll();
  window.addEventListener('scroll', handleNavbarScroll);

  /* NAVBAR — hamburger toggle */
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  navToggle.addEventListener('click', function () {
    var isOpen = primaryNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
    });
  });

  /* CONTACT FORM VALIDATION */
  var form = document.getElementById('contactForm');
  var formNote = document.getElementById('formNote');

  var validators = {
    fullName: function (value) { return value.trim().length >= 3 ? '' : 'Nama minimal 3 karakter.'; },
    email: function (value) {
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(value.trim()) ? '' : 'Format email tidak valid.';
    },
    message: function (value) { return value.trim().length >= 10 ? '' : 'Ceritakan kebutuhan Anda minimal 10 karakter.'; }
  };

  function showFieldError(fieldName, message) {
    var input = document.getElementById(fieldName);
    var errorEl = document.getElementById('error-' + fieldName);
    input.closest('.form-group').classList.toggle('has-error', Boolean(message));
    errorEl.textContent = message;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var isValid = true;

    Object.keys(validators).forEach(function (fieldName) {
      var input = document.getElementById(fieldName);
      var errorMessage = validators[fieldName](input.value);
      showFieldError(fieldName, errorMessage);
      if (errorMessage) isValid = false;
    });

    if (!isValid) {
      formNote.textContent = 'Mohon periksa kembali data yang Anda isi.';
      formNote.style.color = '#E5484D';
      return;
    }

    var fullName = document.getElementById('fullName').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var subject = encodeURIComponent('Permintaan Project dari ' + fullName);
    var body = encodeURIComponent('Nama: ' + fullName + '\nEmail: ' + email + '\n\nPesan:\n' + message);

    window.location.href = 'mailto:ariwahyudi.karier@gmail.com?subject=' + subject + '&body=' + body;

    formNote.textContent = 'Klien email Anda akan terbuka untuk mengirim pesan ini.';
    formNote.style.color = '#D4A657';
  });

  Object.keys(validators).forEach(function (fieldName) {
    document.getElementById(fieldName).addEventListener('input', function () {
      showFieldError(fieldName, '');
    });
  });

  /* FOOTER YEAR */
  document.getElementById('year').textContent = new Date().getFullYear();

});
