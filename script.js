// 쁘띠첼 리디자인 — 섹션 메뉴 · 제품 갤러리 · 디자인 갤러리 · 진입 모션
var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// 섹션 메뉴: 누르면 부드럽게 이동, 스크롤 위치에 따라 지금 섹션 표시
var navLinks = Array.prototype.slice.call(document.querySelectorAll('.secnav a'));
var sections = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });
function setCurrent(id) {
  navLinks.forEach(function (a) {
    var on = a.getAttribute('href') === '#' + id;
    if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    if (on && a.scrollIntoView && innerWidth < 1100) a.parentElement.parentElement.scrollLeft = a.offsetLeft - 16;
  });
}
function onScroll() {
  var mid = innerHeight * 0.4, current = sections[0].id;
  sections.forEach(function (s) { if (s.getBoundingClientRect().top <= mid) current = s.id; });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1].id;
  setCurrent(current);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 같은 그룹 안에서 하나만 누른 상태로 — 다시 누르면 풀려요
function pressGroup(buttons, onChange) {
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wasOn = btn.getAttribute('aria-pressed') === 'true';
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      if (!wasOn) btn.setAttribute('aria-pressed', 'true');
      if (onChange) onChange(wasOn ? null : btn);
    });
  });
}

// 제품 갤러리: 고른 제품 이름·문구로 아래 설명을 바꿔요
var pName = document.getElementById('pinfo-name');
var pLine = document.getElementById('pinfo-line');
var pDefault = { name: pName.textContent, line: pLine.textContent };
pressGroup(Array.prototype.slice.call(document.querySelectorAll('.ptile')), function (btn) {
  if (!btn) { pName.textContent = pDefault.name; pLine.textContent = pDefault.line; return; }
  pName.textContent = btn.dataset.name + ' · ' + btn.dataset.ko;
  pLine.textContent = btn.dataset.line;
});

// 디자인 갤러리
pressGroup(Array.prototype.slice.call(document.querySelectorAll('.dwork')));

// 섹션 진입 모션: 처음 화면 아래에 있던 제목·갤러리만 짧게 올라와요
if (!reduce && 'IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('wait'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.sec .label, .sec .ko-title, .keywords, .pgallery, .dgallery').forEach(function (el) {
    el.classList.add('rv');
    if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('wait'); io.observe(el); }
  });
}
