(()=>{
  let value='system';
  try{const saved=localStorage.getItem('reorder.appearance.v2');if(['dark','light','system'].includes(saved))value=saved}catch{}
  document.documentElement.dataset.theme=value;
  window.reorderAppearance=function(theme){
    if(!['dark','light','system'].includes(theme))return;
    document.documentElement.dataset.theme=theme;
    try{localStorage.setItem('reorder.theme',theme);localStorage.setItem('reorder.appearance.v2',theme)}catch{}
    update();
  };
  function update(){
    const theme=document.documentElement.dataset.theme;
    const dark=theme==='dark'||theme==='system'&&matchMedia('(prefers-color-scheme:dark)').matches;
    document.documentElement.dataset.colorMode=dark?'dark':'light';
    document.querySelectorAll('meta[name="theme-color"]').forEach(meta=>meta.content=dark?'#000000':'#ffffff');
  }
  document.addEventListener('DOMContentLoaded',update);
  matchMedia('(prefers-color-scheme:dark)').addEventListener('change',update);
  update();
})();
