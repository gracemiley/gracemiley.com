// header scroll behavior
(function() {
  const header = document.querySelector('header');
  if (!header) return;
  const isHero = document.querySelector('.hero');
  if (!isHero) {
    // Non-hero pages: always solid dark-text header
    header.classList.add('solid');
    return;
  }
  // Hero pages: start with dark (white text) header, switch on scroll
  header.classList.add('dark-header');
  function updateHeader() {
    if (window.scrollY > 60) {
      header.classList.add('solid');
      header.classList.remove('dark-header');
    } else {
      header.classList.remove('solid');
      header.classList.add('dark-header');
    }
  }
  window.addEventListener('scroll', updateHeader);
  updateHeader();
})();

// hero switcher (home page only)
(function() {
  if (!document.getElementById('heroBg')) return;

  const projects = [
    { num:'01', title:'ant farm office', label:'wearables · branding · soft goods', desc:'a wearable brand exploring personal intuition vs. corporate hive mindset. the go with your gut bag — designed and sewn by grace.', image:'images/bagpic1.webp', link:'ant-farm-office.html' },
    { num:'02', title:'gria studio', label:'branding · identity · creative direction · product design', desc:'a multi-disciplinary design studio co-founded with mia bookstaber — branding, creative direction, and product design.', image:'images/Artboard 15gs2 (1).webp', link:'gria-studio.html' },
    { num:'03', title:'gjso soundscapes', label:'branding · graphic design · print · identity system', desc:'a full season identity system for the grand junction symphony orchestra\'s 47th season — posters, banners, brochures, and merch across 8 concerts.', image:'images/Mockup (2).webp', link:'gjso-soundscapes.html' },
    { num:'04', title:'nrhh swoop chapter', label:'branding · identity · social media · merch · illustration', desc:'creative director for the university of utah\'s nrhh chapter — logo, merch, event graphics, and a full social media campaign.', image:'images/phonebig.webp', link:'nrhh-swoop.html' },
    { num:'05', title:'shaped by water', label:'branding · print · exhibition · toy design · fabrication', desc:'a semester-long brand and merchandise system inspired by the history of the great salt lake — posters, pamphlets, hand-cast resin and crayon toys.', image:'images/SBWposterpromotion11102.webp', link:'shaped-by-water.html' },
    { num:'06', title:'digital threads', label:'editorial design · publication · ux · social impact', desc:'an interactive digital zine helping newcomers navigate resettlement resources and digital literacy — presented at the irc\'s tech confluence in new york city.', image:'images/Digitalthreadsmockup.webp', link:'digital-threads.html' },
    { num:'07', title:'object + play', label:'event design · print · editorial · illustration · branding', desc:'logo, zine, poster, price list, and social campaign for a gala showcasing nine artists at the gala in salt lake city.', image:'images/Screenshot 2026-01-23 at 12.55.59 PM (1).webp', link:'object-and-play.html' },
    { num:'08', title:'missing piece / fleur', label:'product design · branding · packaging · 3d · design research', desc:'a full product redesign of phlur\'s viral fragrance — repositioned from grief to ambition. new packaging, identity, bottle design, and tech packs.', image:'images/FinalImage (2).webp', link:'missing-piece-fleur.html' },
    { num:'09', title:'barriers', label:'game design · 3d · installation · character design · print · interactive', desc:'a site-specific video game projected onto real cave walls in millcreek canyon — with hand-built arduino controller, low-poly characters, and an original narrative.', image:'images/0BF9B406-0839-49D8-AE76-B746DA3AA7C1 (1).webp', link:'barriers.html' }
  ];

  const bg = document.getElementById('heroBg');
  const label = document.getElementById('heroLabel');
  const title = document.getElementById('heroTitle');
  const desc = document.getElementById('heroDesc');
  const btn = document.getElementById('heroBtn');
  const dots = document.getElementById('heroDots');
  const sidebar = document.getElementById('heroSidebar');
  const sideNum = document.getElementById('sideNum');

  function update(idx) {
    const p = projects[idx];
    bg.style.backgroundImage = 'url(' + p.image + ')';
    label.textContent = p.label;
    title.textContent = p.title;
    desc.textContent = p.desc;
    btn.href = p.link;
    sideNum.textContent = p.num + ' / 09';
    document.querySelectorAll('.hero-dot').forEach((d,i) => d.classList.toggle('active', i===idx));
    document.querySelectorAll('.side-item').forEach((s,i) => s.classList.toggle('active', i===idx));
  }

  projects.forEach((p, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i===0 ? ' active' : '');
    dot.onclick = () => update(i);
    dots.appendChild(dot);

    const item = document.createElement('div');
    item.className = 'side-item' + (i===0 ? ' active' : '');
    item.innerHTML = '<div class="side-dot"></div><div class="side-tooltip">' + p.num + ' — ' + p.title + '</div>';
    item.onclick = () => update(i);
    sidebar.insertBefore(item, sideNum);
  });

  update(0);
})();

// work page filter
(function() {
  const filters = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.grid-item');
  if (!filters.length) return;

  filters.forEach(btn => {
    btn.addEventListener('click', function() {
      filters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.dataset.filter;
      items.forEach(item => {
        if (cat === 'all' || item.dataset.cat.includes(cat)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
})();
