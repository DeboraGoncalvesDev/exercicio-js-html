function validar (n1, n2){
    var n1 =  document.getElementById ('n1');
    var n2 =  document.getElementById ('n2');

    if (n2.value <= n1.value){
        document.getElementById('erro').innerHTML= "Formulário invalido!";
    } else {
        document.getElementById('sucesso').innerHTML= "Formulário valido!";
                                     
   
    

}         

}