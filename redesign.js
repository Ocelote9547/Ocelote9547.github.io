/* Product navigation: generated from the real sections on each page. */
(() => {
  const main = document.querySelector('main');
  if (!main) return;
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden','true');
  document.body.append(progress);
  const sections = [...main.querySelectorAll(':scope > section')].filter(section => section.querySelector('h2'));
  if (document.body.classList.contains('app-party') || document.body.classList.contains('app-nexo') || document.body.classList.contains('app-launcher') || document.body.classList.contains('app-connect') || document.body.classList.contains('app-circle') || document.body.classList.contains('app-utils')) {
    const nav = document.createElement('nav');
    nav.className = 'product-section-nav';
    nav.setAttribute('aria-label','Secciones del proyecto');
    sections.forEach((section,index) => {
      const heading = section.querySelector('h2');
      if (!section.id) section.id = 'seccion-' + (index + 1);
      const link = document.createElement('a');
      link.href = '#' + section.id;
      link.textContent = heading.textContent.replace(/\s+/g,' ').trim().replace(/[.!?]+$/,'');
      nav.append(link);
    });
    const header = document.querySelector('.product-header');
    if (header) header.insertAdjacentElement('afterend',nav);
    const links = [...nav.querySelectorAll('a')];
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          links.forEach(link => {
            const active = link.hash === '#' + entry.target.id;
            if (active) link.setAttribute('aria-current','location');
            else link.removeAttribute('aria-current');
          });
        });
      },{rootMargin:'-25% 0px -60% 0px'});
      sections.forEach(section => observer.observe(section));
    }
  }
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? Math.min(100,Math.max(0,window.scrollY / max * 100)) : 0) + '%';
  };
  update();
  window.addEventListener('scroll',update,{passive:true});
  window.addEventListener('resize',update);
})();
