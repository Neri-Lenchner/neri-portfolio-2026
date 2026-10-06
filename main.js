function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function navLinksMarkup() {
  return NAV.links.map(l => `
    <li>
      <a href="${l.href}">
        ${l.label}
      </a>
    </li>`
  ).join('');
}

function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="nav-logo">
      ${NAV.logo}
        <span>
          .
        </span>
    </div>
    <ul class="nav-links">
      ${navLinksMarkup()}
    </ul>
    <button
      class="nav-toggle"
      type="button"
      aria-label="Open menu"
      aria-expanded="false"
      aria-controls="mobile-menu"
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <line class="bar bar-1" x1="2" y1="5" x2="20" y2="5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line class="bar bar-2" x1="2" y1="11" x2="20" y2="11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <line class="bar bar-3" x1="2" y1="17" x2="20" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  `;
  return nav;
}

function createMobileMenu() {
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.id = 'mobile-menu';
  menu.innerHTML = `
    <ul class="mobile-menu-links">
      ${navLinksMarkup()}
    </ul>
  `;
  return menu;
}

function wireMobileNav(nav, menu) {
  const toggle = nav.querySelector('.nav-toggle');

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('nav-open'));
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) setOpen(false);
  });
}

function createHero() {
  const [tagLine1, tagLine2, tagLine3] = HERO.tagline;
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <div class="hero-inner">
      <div class="hero-content">
        <div class="hero-label">
          ${HERO.label}
        </div>
        <h1 class="hero-tagline">
          <span class="line-1">
            ${tagLine1}
          </span>
          <span class="outline line-2">
            ${tagLine2}
          </span>
          <span class="line-3">
            ${tagLine3}
          </span>
        </h1>
        <div class="hero-name">
          ${HERO.name}
        </div>
        <div class="hero-sub">
          ${HERO.subtitle.map(subtitle => `
            <span>
              ${subtitle}
            </span>
           `)
      .join('<span class="dot">•</span>')}
        </div>
        <div class="hero-cta">
          <a href="#works" class="btn-primary">
            View My Work
          </a>
          <a href="#contact" class="btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
      <div class="hero-image-wrap">
        <img 
            src="${HERO.image}" 
            alt="" class="hero-image-bg" 
            aria-hidden="true" 
        />
      <div class="hero-image-frame">
        <img 
          src="${HERO.image}" 
          alt="${HERO.name}" 
          class="hero-image" 
        />
        <div class="hero-image-grain"></div>
        <div class="hero-image-scanlines"></div>
        <div class="hero-image-overlay"></div>
      </div>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="scroll-line"></div>
    </div>
  `;
  return section;
}

function createAbout() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about';
  section.innerHTML = `
    <div class="section-number">
      ${ABOUT.sectionNumber}
    </div>
    <h2 class="section-title">
      ${ABOUT.title}<br />
      <span class="dim">
        ${ABOUT.titleDim}
      </span>
    </h2>
    <div class="about-grid">
      <div class="about-bio">
        ${ABOUT.bio.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="about-stats">
        ${ABOUT.stats.map(s => `
          <div class="stat-card">
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  return section;
}

function createStack() {
  const section = document.createElement('section');
  section.id = 'stack';
  section.className = 'stack';
  section.innerHTML = `
    <div class="section-number">
      ${STACK.sectionNumber}
    </div>
    <h2 class="section-title">
      ${STACK.title}<br />
      <span class="dim">
        ${STACK.titleDim}
      </span>
    </h2>
    <div class="stack-grid">
      ${STACK.items.map((item, i) => `
        <div class="stack-card">
          <div class="stack-num">
            ${String(i + 1).padStart(2, '0')}
          </div>
          <div class="stack-name">
            ${item.name}
          </div>
          <div class="stack-role">
            ${item.role}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  return section;
}

function createWorks() {
  const section = document.createElement('section');
  section.id = 'works';
  section.className = 'works';
  section.innerHTML = `
    <div class="section-number">
      ${PROJECTS.sectionNumber}
    </div>
    <h2 class="section-title">
      ${PROJECTS.title}<br />
        <span class="dim">
          ${PROJECTS.titleDim}
        </span>
    </h2>
    <div class="works-grid">
      ${PROJECTS.items.map(p => `
        <div class="project-card${p.featured ? ' featured' : ''}">
          <div class="project-num">
            ${p.num}
          </div>
          <div class="project-title">
            ${p.title}
          </div>
          <div class="project-desc">
            ${p.desc}
          </div>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${p.link
      ? `<a href="${p.link}" class="project-link" target="_blank" rel="noopener noreferrer">
            View Project ▶
          </a>`
      : ''}
          ${p.liveLink
      ? `<a
          href="${p.liveLink}"
          class="project-link"
          target="_blank"
          rel="noopener noreferrer">
              ${p.liveLinkLabel || 'Live Demo'} ▶
         </a>`
      : ''}
        </div>
      `).join('')}
    </div>
  `;
  return section;
}

function terminalLine(item) {
  if (item.type === 'comment') {
    return `<div class="terminal-line">
              <span class="key">
                ${item.key}
              </span>          
              ${esc(item.value)}
            </div>`;
  }
  const cls = item.type === 'available' ? 'available' : 'val';
  return `<div class="terminal-line">
            <span class="key">
              ${item.key}
            </span>    
            <span class="${cls}">  
              ${esc(item.value)}
            </span>
          </div>
        `;
}

function createTerminal() {
  const section = document.createElement('section');
  section.className = 'terminal-section';
  section.innerHTML = `
    <div class="section-number">${TERMINAL.sectionNumber}</div>
    <h2 class="section-title">${TERMINAL.title}<br />
      <span class="dim">
        ${TERMINAL.titleDim}
      </span>
    </h2>
    <div class="terminal">
      <div class="terminal-bar">
        <div class="terminal-dot"></div>
        <div class="terminal-dot"></div>
        <div class="terminal-dot"></div>
        <div class="terminal-title">
          ${TERMINAL.windowTitle}
        </div>
      </div>
      <div class="terminal-body">
        <div>
          ${TERMINAL.left.map(terminalLine).join('')}
        </div>
        <div>
          ${TERMINAL.right.map(terminalLine).join('')}
        </div>
      </div>
    </div>
  `;
  return section;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'contact';
  footer.className = 'footer-wrapper';
  footer.innerHTML = `
    <div class="footer-section">
      <div class="footer-eyebrow">
        ${FOOTER.eyebrow}
      </div>
      <div class="footer-heading">
        ${FOOTER.heading} 
            <span>
              ${FOOTER.headingHighlight}
            </span>
      </div>
      <a href="mailto:${FOOTER.email}" class="footer-email">
        ${FOOTER.email}
      </a>
      <div class="social-links">
        ${FOOTER.social.map(s => `
          <a href="${s.href}" target="_blank" rel="noopener noreferrer" class="social-link">
            ${s.label} ↗
          </a>
        `).join('')}
      </div>
      <div class="footer-copy">
        ${FOOTER.copyright}
      </div>
    </div>
  `;
  return footer;
}

function divider() {
  const hr = document.createElement('hr');
  hr.className = 'section-divider';
  return hr;
}

function init() {
  const root = document.getElementById('root');

  const glow1 = document.createElement('div');
  glow1.className = 'glow-1';
  const glow2 = document.createElement('div');
  glow2.className = 'glow-2';

  const navbar = createNavbar();
  const mobileMenu = createMobileMenu();
  wireMobileNav(navbar, mobileMenu);

  root.append(
    glow1,
    glow2,
    navbar,
    mobileMenu,
    createHero(),
    divider(),
    createAbout(),
    divider(),
    createStack(),
    divider(),
    createWorks(),
    divider(),
    createTerminal(),
    createFooter()
  );
}

init();
