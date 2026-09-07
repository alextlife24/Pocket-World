import './style.css';
import { KEY, parseSave, story, type Save, type Choice } from './state';
import { scene } from './scene';
const app = document.querySelector<HTMLDivElement>('#app')!;
let save: Save|null = null;
let storageWarning = '';
try { save = parseSave(localStorage.getItem(KEY)); } catch { storageWarning = 'Saving is unavailable in this browser. You can still play this visit.'; }
let tomorrow = !!save;
let busy = false;
let timer: ReturnType<typeof setTimeout>|undefined;
function log(event:string, extra:object={}) { console.info('[Pocket World]', { event, timestamp: new Date().toISOString(), elapsedMs: Math.round(performance.now()), ...extra }); }
function render() {
  app.className = tomorrow ? 'preview' : '';
  const content = save ? story[save.choice] : null;
  app.innerHTML = `<header><span class="brand">✧ POCKET WORLD</span><span class="edition">A SMALL BEGINNING</span></header>
  <section class="chapter"><p class="eyebrow">DAY 1 ${tomorrow?'· A GLIMPSE OF TOMORROW':'· BEFORE DAWN'}</p><h1>The Fallen Star</h1></section>
  <section class="world ${save?'chosen':''} ${tomorrow?'tomorrow':''}" aria-label="Your village">${scene(save?.choice??null,tomorrow)}
  ${!save?'<button class="place hill" data-choice="hill" aria-label="Hill — keep the star on the hill"><span>Hill</span><small>A quiet view</small></button><button class="place square" data-choice="square" aria-label="Square — keep the star in the square"><span>Square</span><small>A shared light</small></button>':''}
  <div class="world-caption">${tomorrow?content!.evidence:save?'A small choice. A new landmark.':'Tap a place for the fallen star.'}</div></section>
  <section class="story" aria-live="polite" aria-atomic="true"><div class="speech"><span class="portrait">${save&&!tomorrow?'◒':'✦'}</span><div><p class="speaker">${content&&!tomorrow?content.speaker:'Mira'}</p><p class="line">“${content?(tomorrow?content.callback:content.reaction):'It fell before dawn. Where should we keep it?'}”</p></div></div>
  ${content?`<div class="memory"><span>✧</span><div><p class="eyebrow">DAY 1 — THE FALLEN STAR</p><p>${content.memory}</p></div></div><div class="actions">${tomorrow?'<p class="closure">This is what your choice made possible.</p><button id="back" class="secondary">Back to today</button>':'<button id="return" class="primary">Come back to see what they make of it</button><button id="tomorrow" class="secondary">Preview Tomorrow →</button>'}</div>`:'<p class="hint">One little star. Two places it could belong.</p>'}</section>
  <footer><span id="save-status" role="status">${storageWarning || (save?'Your choice is saved on this device.':'Choose today. See what they remember tomorrow.')}</span><button id="reset">Reset Prototype</button></footer>`;
  document.querySelectorAll<HTMLButtonElement>('[data-choice]').forEach(b=>b.onclick=()=>choose(b.dataset.choice as Choice));
  document.querySelector<HTMLButtonElement>('#tomorrow')?.addEventListener('click',()=>{tomorrow=true;render();log('tomorrow_previewed');});
  document.querySelector<HTMLButtonElement>('#back')?.addEventListener('click',()=>{tomorrow=false;render();});
  document.querySelector<HTMLButtonElement>('#return')?.addEventListener('click',()=>{document.querySelector('#save-status')!.textContent='Your village will be here. Refresh or preview to see what changed.';});
  document.querySelector<HTMLButtonElement>('#reset')!.onclick=()=>{ clearTimeout(timer); busy=false; save=null; tomorrow=false; try{localStorage.removeItem(KEY);storageWarning='';}catch{storageWarning='Storage could not be cleared. This visit has been reset.';}render();log('prototype_reset'); };
}
function choose(choice:Choice) {
  if (busy || save) return;
  busy=true;
  log('first_tap',{choice});
  // Commit before animation so a refresh or tab suspension never loses the tap.
  save={choice,completedAt:Date.now()};
  try{localStorage.setItem(KEY,JSON.stringify(save));}catch{storageWarning='Could not save. Your choice lasts only for this visit.';log('save_failed');}
  document.querySelectorAll<HTMLButtonElement>('[data-choice]').forEach(b=>{b.disabled=true;b.classList.add('leaving');});
  const mira=document.querySelector<SVGGElement>('#mira')!;
  mira.style.transform=choice==='hill'?'translate(139px,176px)':'translate(279px,241px)';
  const carried=document.querySelector<SVGGElement>('#carried-star')!;
  carried.style.transform=choice==='hill'?'translate(-19px,-14px)':'translate(121px,51px)';
  document.querySelector('.line')!.textContent=choice==='hill'?'“I’ll carry it up to the hill.”':'“Let’s give it a home in the square.”';
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  timer=setTimeout(()=>{
    document.querySelector(`#${choice}-mark`)?.classList.add('built');
    carried.classList.add('placed');
    timer=setTimeout(()=>{busy=false;render();document.querySelector('.world')?.classList.add('sunset');log('completion',{choice});},reduced?0:1800);
  },reduced?0:1200);
}
document.addEventListener('visibilitychange',()=>document.documentElement.classList.toggle('paused',document.hidden));
window.addEventListener('pageshow',e=>{if(e.persisted && !busy){try{save=parseSave(localStorage.getItem(KEY));tomorrow=!!save;}catch{}render();}});
window.addEventListener('storage',e=>{if(e.key===KEY){clearTimeout(timer);busy=false;save=parseSave(e.newValue);tomorrow=!!save;render();}});
render();log('first_render');

