(function(){
  document.querySelectorAll('.nav').forEach(function(nav){
    if(nav.querySelector('.mobile-menu-toggle')) return;
    var brand=nav.querySelector('.brand');
    if(!brand) return;
    var btn=document.createElement('button');
    btn.type='button';
    btn.className='mobile-menu-toggle';
    btn.setAttribute('aria-label','開啟導覽選單');
    btn.setAttribute('aria-expanded','false');
    btn.textContent='☰';
    brand.insertAdjacentElement('afterend',btn);
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.textContent=open?'✕':'☰';
    });
    nav.querySelectorAll('a:not(.brand)').forEach(function(a){
      a.addEventListener('click',function(){
        if(window.matchMedia('(max-width: 820px)').matches){
          nav.classList.remove('nav-open');btn.setAttribute('aria-expanded','false');btn.textContent='☰';
        }
      });
    });
  });
})();
