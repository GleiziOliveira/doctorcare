window.addEventListener('scroll', onScroll)
//está adicionando um evento direito na janela inteira, 

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

//colocou nome para executar a função de forma mais facil e por nome 
function activateMenuAtCurrentSection(section) { //vai ativar o menu na sessão que tiver aparecendo ali 
  // variavel const, é uma variavel constante que vai recriar a targetLine, e cada vez que fizer scroll esse código será executado e irá recriar o targetLine e não vai mudar o seu valor e por isso o const (para ser constante e não var de variavel)
  const targetLine = scrollY + innerHeight / 2 

  const sectionTop = section.offsetTop //deslocamento de topo
  const sectionHeight = section.offsetHeight//deslocamento de altura
  //o topo da sessão chegou ou ultrapassou a linha alfa 


  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    // a seção termina onte ?
  const sectionEndsAt = sectionTop + sectionHeight
   //o final da seção passou da linha alvo 
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

   
   // limites da seção
  const sectionBoundaries =
     sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
 
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`) //variavel de javascripit
//querySelector significa pesquisa pelo seletor  
//``templateliterals (que é o acento grave ``) como tem isso pode fazer uma interpolação que é uma troca por esse sinal ${} dentro do {} coloca qualquer coisa do java no caso aqui irá colocar o id sectionId
// O que está dentro do ${}será pego como string e não objeto 
   menuElement.classList.remove('active') 
   if (sectionBoundaries) {
     menuElement.classList.add('active') 
   }
// tem que remover o active e depois se precisar ele será adicionado por causa do if, quando passa dos limites ele é removido     

//quando for fazer uma logica é colocar nomes significativa. 


}
// não se usa var, se for para mudar alguma coisa usa-se let essa mudança tem haver com a visibilidade dessa variavel nesse conjunto de chaves
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)

//{} é um objeto vazio
// var "nome para a variavel" ={ objeto}
//os pontos é para acessar alguma coisa de objeto
// se ver qualquer ponto é pq o cara anterior é um objeto isso no JS
//quando cria uma função no js só é enxergado por estar dentro do par de chaves {} para jogar alguma coisa para fora é preciso usar o return
//quando for fazer alguma coisa de logica de programação precisa saber quais os dados, pq precisa de uma sequencia logica 