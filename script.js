const topbar=document.querySelector('.topbar');
addEventListener('scroll',()=>topbar?.classList.toggle('scrolled',scrollY>18),{passive:true});
const menu=document.querySelector('.menu'),nav=document.querySelector('.navlinks');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
document.body.classList.add('motion-ready');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.05});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
document.querySelectorAll('[data-download]').forEach(button=>button.addEventListener('click',()=>{const text=`RECLAIMR\nDigital Asset Recovery & Protection Infrastructure\n\nLOST ACCESS SHOULDN'T MEAN LOST ASSETS.\n\nPROJECT OVERVIEW — NOT THE FINAL TECHNICAL WHITEPAPER\nThe full technical whitepaper is in development.\n\n${document.querySelector('.doc-content').innerText}\n`;const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='RECLAIMR-whitepaper-preview.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}));
if(nav && menu){nav.id='main-navigation';menu.setAttribute('aria-controls',nav.id);const close=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')};document.addEventListener('keydown',event=>{if(event.key==='Escape' && nav.classList.contains('open')){close();menu.focus()}});document.addEventListener('click',event=>{if(!event.target.closest('.nav'))close()});nav.querySelectorAll('a').forEach(a=>{if(a.classList.contains('active'))a.setAttribute('aria-current','page');a.addEventListener('click',close)});}
const main=document.querySelector('main');if(main){main.id='main-content';const skip=document.createElement('a');skip.href='#main-content';skip.className='skip-link';skip.textContent='Skip to content';document.body.prepend(skip);}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
