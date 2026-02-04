/* Mobile menu toggle + small UX helpers */
(function(){
  const btn = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if(btn && menu){
    btn.addEventListener('click', () => {
      const isOpen = menu.getAttribute('data-open') === 'true';
      menu.setAttribute('data-open', String(!isOpen));
      menu.style.display = isOpen ? 'none' : 'block';
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
    // default: closed on mobile
    menu.style.display = 'none';
    menu.setAttribute('data-open', 'false');
    btn.setAttribute('aria-expanded', 'false');
  }

  // Update year in footer
  const y = document.querySelector('[data-year]');
  if(y){ y.textContent = String(new Date().getFullYear()); }
})();
