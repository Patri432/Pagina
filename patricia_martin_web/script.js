const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const selector = $('#selector');
const apps = {patricia: $('#patricia'), pica: $('#pica')};

function showWorld(name){
  selector.hidden = true;
  Object.entries(apps).forEach(([key, el]) => el.hidden = key !== name);
  window.scrollTo(0,0);
}

function showSelector(){
  Object.values(apps).forEach(el => el.hidden = true);
  selector.hidden = false;
  window.scrollTo(0,0);
}

$$('[data-open]').forEach(btn => btn.addEventListener('click', () => showWorld(btn.dataset.open)));
$$('[data-back]').forEach(btn => btn.addEventListener('click', showSelector));

function activateTab(app, id){
  $$('.tab', app).forEach(t => t.classList.toggle('active', t.dataset.tab === id));
  $$('.page', app).forEach(p => p.classList.toggle('active', p.id === id));
  window.scrollTo({top:0, behavior:'smooth'});
}

Object.values(apps).forEach(app => {
  $$('.tab', app).forEach(tab => tab.addEventListener('click', () => activateTab(app, tab.dataset.tab)));
  $$('[data-tab-go]', app).forEach(btn => btn.addEventListener('click', () => activateTab(app, btn.dataset.tabGo)));
  $$('[data-open]', app).forEach(btn => btn.addEventListener('click', () => showWorld(btn.dataset.open)));
});

$$('.subtab').forEach(btn => btn.addEventListener('click', () => {
  const page = btn.closest('.page');
  const type = btn.dataset.work;
  $$('.subtab', page).forEach(b => b.classList.toggle('active', b === btn));
  $$('[data-projects]', page).forEach(grid => grid.hidden = grid.dataset.projects !== type);
}));

// Permite abrir una pestaña desde la URL, útil para enlaces y GitHub Pages.
function tabFromHash(){
  const hash = location.hash.slice(1);
  if(!hash) return;
  if(hash.startsWith('p-')) { showWorld('patricia'); activateTab(apps.patricia, hash); }
  if(hash.startsWith('m-')) { showWorld('pica'); activateTab(apps.pica, hash); }
}
window.addEventListener('hashchange', tabFromHash);
window.addEventListener('DOMContentLoaded', tabFromHash);
