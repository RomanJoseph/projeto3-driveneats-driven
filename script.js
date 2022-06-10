function marcar(objeto,categoria){
    const before = document.querySelector("."+ categoria + ".selecionado")
    if(before != null){
        before.classList.remove("selecionado");
    }

    objeto.classList.add("selecionado");

    fazerPedido();
}

function fazerPedido(){
    const comida = document.querySelector(".comida.selecionado");
    const bebida = document.querySelector(".bebida.selecionado");
    const doce = document.querySelector(".doce.selecionado");
  
    if (comida != null && bebida != null && doce != null) {
      document.querySelector(".button-nao-pode-comprar").style.display ="none";
      document.querySelector(".button-pode-comprar").style.display ="flex";
    }
  }