function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12){
        img.src = "FotoManha.jpg";
        document.body.style.backgroundColor = "#e2cd9f"

    }
    else if(hora >= 12 && hora <= 18){
        img.src = "FotoTarde.jpg";
        document.body.style.backgroundColor = "#b9846f"

    }   
    else{
        img.src = "FotoNoite.jpg";
        document.body.style.backgroundColor = "#515154"
    }
}