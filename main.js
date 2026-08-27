function esc(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
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
      ${NAV.links.map(l => `
        <li>
          <a href="${l.href}">
            ${l.label}
          </a>
        </li>`
  ).join('')}
    </ul>
  `;
  return nav;
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
          <a href="${p.link}" class="project-link" target="_blank" rel="noreferrer">
            View Project ▶
          </a>
          ${p.liveLink 
      ? `<a 
          href="${p.liveLink}" 
          class="project-link" 
          target="_blank" 
          rel="noreferrer">
              Live Demo ▶
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
          <a href="${s.href}" target="_blank" rel="noreferrer" class="social-link">
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

  root.append(
    glow1,
    glow2,
    createNavbar(),
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
