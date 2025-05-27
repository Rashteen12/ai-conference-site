document.addEventListener('DOMContentLoaded',()=> {
  // Tabs
  const tabs=document.querySelectorAll('.tab');
  const tabContents=document.querySelectorAll('.tab-content');
  tabs.forEach((tab,i)=>tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    tabContents.forEach(c=>c.style.display='none');
    tabContents[i].style.display='block';
  }));

  // Modal
  const modal=document.getElementById('modal');
  const modalBody=document.getElementById('modal-body');
  document.querySelectorAll('.btn-modal').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      modalBody.innerHTML=btn.dataset.modalContent;
      modal.style.display='flex';
    });
  });
  document.getElementById('modal-close').onclick=()=>modal.style.display='none';
  window.onclick=e=>{ if(e.target==modal) modal.style.display='none'; };
});