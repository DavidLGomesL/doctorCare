function onScroll() {
//Aparece linha verde no topo para destacar o menu e cabeçalho.  
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  }else {
    return navigation.classList.remove('scroll')
  }

};

//Abri e fecha menu
function openMenu() {
  document.body.classList.add('menuExpandido')
};

function closeMenu() {
  document.body.classList.remove('menuExpandido')
};

//ScrollReaveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #servicos,
  #servicos header,
  #servicos .card,
  #sobre,
  #sobre header,
  #sobre .conteudo
`);