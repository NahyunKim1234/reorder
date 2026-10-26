(()=>{
 const splash=document.querySelector('#launch-screen');
 if(!splash)return;
 let closed=false;
 function close(){if(closed)return;closed=true;splash.hidden=true;splash.removeEventListener('click',close)}
 splash.addEventListener('click',close);
 const img=splash.querySelector('img');
 const ready=img?.complete?Promise.resolve():new Promise(resolve=>{img?.addEventListener('load',resolve,{once:true});img?.addEventListener('error',resolve,{once:true});setTimeout(resolve,1200)});
 ready.then(()=>setTimeout(close,650));
 setTimeout(close,2000);
 document.addEventListener('keydown',close,{once:true});
})();
