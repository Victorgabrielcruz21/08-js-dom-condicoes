function calcular(){

    var data = new Date;
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    }
    else {
        var fsex = document.getElementsByName("radesex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if(fsex[0].checked){
            genero = "Homem";
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute("src", "CriançaHomem.jpg");

            }
            else if(idade >= 11 && idade < 15){
                //Pre adolcente
                img.setAttribute("src", "PreAdolcenteHomem.jpg");

            }
            else if(idade >= 15 && idade < 18){
                //Adolecente
                img.setAttribute("src", "AdolecenteHomem.jpg");

            }
            else if(idade >= 18 && idade < 25){
                //Jovem Adulto
                img.setAttribute("src", "JovemAdultoHomem.jpg");

            }
            else if(idade >= 25 && idade < 50){
                //Adulto
                img.setAttribute("src", "AlisonFoto.png");

            }
            else {
                //Idoso
                img.setAttribute("src", "veio.jpg");

            }
        }
        else if(fsex[1].checked){
            genero = "Mulher";
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute("src", "CriançaMulher.jpg");

            }
            else if(idade >= 11 && idade < 15){
                //Pre adolcente
                img.setAttribute("src", "PreAdolcenteMulher.jpg");

            }
            else if(idade >= 15 && idade < 18){
                //Adolecente
                img.setAttribute("src", "AdolcenteMulher.jpg");

            }
            else if(idade >= 18 && idade < 25){
                //Jovem Adulto
                img.setAttribute("src", "JovemAdultoMulher.jpg");

            }
            else if(idade >= 25 && idade < 50){
                //Adulto
                img.setAttribute("src", "Adulta.jpg");

            }
            else if( idade > 125){
                img.setAttribute("src", "idade++.jpg");

            }
            else {
                //Idoso
                img.setAttribute("src", "Veia.jpg");

            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }



}   