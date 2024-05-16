

function MostraMenu(){
    let menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function SomeMenu(){
    let somemenu = document.getElementById("somemenu");
    somemenu.classList.toggle("some");
}


// Adicione um ouvinte de evento ao documento
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const somemenu = document.getElementById("somemenu");

    const pesquisa = document.getElementById('pesquisa');
  
    // Verifique se o clique não ocorreu dentro do menu ou do ícone do menu
    if (!menu.contains(event.target) && !somemenu.contains(event.target)) {
      // Oculte o menu
      menu.classList.remove("show");
      somemenu.classList.remove("some");
      pesquisa.style.display = 'block';
    }
    else{
      
    pesquisa.style.display = 'none';
    }


   

  });












  // function SomeRevito (){
  //   let revitoFoto = document.getElementById('revitoFoto');
  //   let revitoParagrafo = document.getElementById('revitoTexto');
  //   let revitoTitulo = document.getElementById('revitoTitulo');
  //   let revitoRM = document.getElementById('revitoRm');


  //   revitoFoto.classList.toggle('Some');
  //   revitoParagrafo.classList.toggle('Some');
  //   revitoRM.classList.toggle('Some');
  //   revitoTitulo.classList.toggle('Some');


  //   //let kaian   document.getElementById('');
  //   //let lucas
  // }







