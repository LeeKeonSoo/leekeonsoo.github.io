(() => {
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.main-nav a')];
  const root = document.documentElement;

  function alignSection(hash, focus = false) {
    const section = document.getElementById(hash.slice(1));
    if (!section) return;
    const heading = section.querySelector('h1, h2') || section;
    root.style.setProperty('--anchor-tail', '0px');
    const offset = (header?.getBoundingClientRect().height || 0) + 24;
    const top = Math.max(0, heading.getBoundingClientRect().top + window.scrollY - offset);
    const naturalLimit = Math.max(0, root.scrollHeight - window.innerHeight);
    // Short pages need room below the final section to reach its own heading.
    root.style.setProperty('--anchor-tail', `${Math.max(0, Math.ceil(top - naturalLimit))}px`);
    window.scrollTo({ top, behavior: 'instant' });
    if (focus) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    for (const link of links) {
      if (new URL(link.href).hash === hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  for (const link of links) {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      if (!document.getElementById(url.hash.slice(1))) return;
      event.preventDefault();
      if (location.hash !== url.hash) history.pushState(null, '', url.hash);
      alignSection(url.hash, true);
    });
  }

  function alignCurrentHash() {
    if (location.hash) alignSection(location.hash);
    else {
      root.style.setProperty('--anchor-tail', '0px');
      for (const link of links) link.removeAttribute('aria-current');
    }
  }
  window.addEventListener('hashchange', alignCurrentHash);
  window.addEventListener('load', alignCurrentHash);
  let resizeFrame;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(alignCurrentHash);
  });
  requestAnimationFrame(alignCurrentHash);
})();
