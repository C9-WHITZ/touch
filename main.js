let nomeConvidados = [];

function enviar(){
    let nominho = document.getElementById("nome").value;
    nomeConvidados.push(nominho);
    document.getElementById("mostrar").innerHTML=nomeConvidados.toString();
}

function ordemalfabetica(){
    nomeConvidados.sort();
    let i = nomeConvidados.join("<br>")
    document.getElementById("ordemalfabetica").innerHTML=i.toString(); 
}

function pesquisarnome(){
    let s = document.getElementById("pesquisar").value;
    let encontrado = 0;
    let contador;
    
    for(contador=0;contador<nomeConvidados.length;contador++){
        if(s==nomeConvidados[contador]){
            encontrado = encontrado + 1;
        }    
    }
    document.getElementById("nomeslocalizados").innerHTML="nome encontrado" + encontrado + "vez(es)";
}