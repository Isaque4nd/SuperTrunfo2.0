var cartas1 = {
    nome: "Naruto",
    imagem: "https://narutokonoha.com/wp-content/uploads/2019/10/Imagens-do-anime-Naruto-para-Imprimir-e-Colorir.jpg",
    atributos: {
        ataque: 40,
        defesa: 30,
        ninjutsu: 70,
    }

};

var cartas2 = {
    nome: "Sasuke",
    imagem:"https://staticg.sportskeeda.com/editor/2022/07/b5a01-16570752464477-1920.jpg",
    atributos: {
        ataque: 40,
        defesa: 25,
        ninjutsu: 65,
    }

};

var cartas3 = {
    nome: "Sakura",
    imagem:"http://pm1.narvii.com/6623/0a327fc32c264fa3d8de36f7ff889e544b27ca6d_00.jpg",
    atributos: {
        ataque: 50,
        defesa: 30,
        ninjutsu: 60,
    }

};

var cartas4 = {
    nome: "Hashirama",
    imagem:"https://nerdhits.com.br/wp-content/uploads/2020/05/hashirama-senju-curiosidades-1200x900.jpg",
    atributos: {
        ataque: 70,
        defesa: 60,
        ninjutsu: 80,
    }

};

var cartas5 = {
    nome: "Kakashi",
    imagem:"https://besthqwallpapers.com/Uploads/27-12-2020/149054/thumb2-kakashi-hatake-4k-blue-neon-lights-naruto-characters-artwork.jpg",
    atributos: {
        ataque: 55,
        defesa: 50,
        ninjutsu: 70,
    }

};

var cartas = [cartas1, cartas2, cartas3, cartas4, cartas5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 5);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}