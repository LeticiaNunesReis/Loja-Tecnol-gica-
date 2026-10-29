//Seleciona o nome do produto e valor
let nomeProduto="";
let precoProduto= 0;
let carrinho= [];

// Busca a seleção e confirma ela
let produtoSelecionado= document.getElementById("produto-selecionado");
let mensagem = document.getElementById("mensagem");

function adicionarProduto() {
    let produtoInput = document.getElementById("nomeProduto");
    let nomeProduto = produtoInput.value;

    if (nomeProduto !== "") {
        carrinho.push(nomeProduto); //Adiciona o produto ao array acumulado
        produtoInput.value = "";
        produtoInput.focus();
    }

    let listaHTML = "<strong>Itens no Carrinho (" + carrinho.length + "):</strong><br>";

    for (let i = 0; i < carrinho.length; i++) {
        listaHTML += "- " + carrinho[i] + "<br>";
    }

    document.getElementById("carrinhoLista").innerHTML = listaHTML;
}

//======= Bloco de Conteudo ======

//Seleciona o produto 1
document.getElementById("fone").addEventListener("click", function(){
    nomeProduto = "Fone de ouvido";
    precoProduto =100;
    produtoSelecionado.textContent= nomeProduto;

});

//Seleciona o produto 2

document.getElementById("teclado").addEventListener("click", function() {
    nomeProduto = "Teclado";
    precoProduto =150;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 3

 document.getElementById("mouse").addEventListener("click", function() {
    nomeProduto = "Mouse";
    precoProduto= 80;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 4

 document.getElementById("monitor").addEventListener("click", function() {
    nomeProduto = "Monitor";
    precoProduto= 750;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 5

 document.getElementById("mousepad").addEventListener("click", function() {
    nomeProduto = "Mousepad";
    precoProduto= 40;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 6

 document.getElementById("gabinete").addEventListener("click", function() {
    nomeProduto = "Gabinete";
    precoProduto= 2500;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 7

 document.getElementById("memoriaram").addEventListener("click", function() {
    nomeProduto = "Memória ram";
    precoProduto= 250;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 8

 document.getElementById("ssd").addEventListener("click", function() {
    nomeProduto = "SSD";
    precoProduto= 300;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 9

 document.getElementById("cpu").addEventListener("click", function() {
    nomeProduto = "Cpu";
    precoProduto= 1200;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 10

 document.getElementById("actionfigure-01").addEventListener("click", function() {
    nomeProduto = "Poppy The Angel Action Figure";
    precoProduto= 220;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 11

 document.getElementById("actionfigure-02").addEventListener("click", function() {
    nomeProduto = "Poppy The Beauty Action Figure";
    precoProduto= 200;
    produtoSelecionado.textContent= nomeProduto;
 });

 //Seleciona o produto 12

 document.getElementById("actionfigure-03").addEventListener("click", function() {
    nomeProduto = "Poppy Daisy Action Figure";
    precoProduto= 190;
    produtoSelecionado.textContent= nomeProduto;
 });

//===================================  Calculo e Comparação   =================================================

document.getElementById("calcular").addEventListener("click", function (){
     //Verifica se o produto foi selecionado, caso não 
    //solicitando a seleção
    if (precoProduto === 0) {
        mensagem.textContent = "Por favor, Selecione um Produto...";
        return;
    }


//Converte a quantidade em número/valor
    let quantidade = Number(document.getElementById("quantidade").value);

    //Verifica se a quantidade é valida/existente/disponivel
    // ( Situação de comparação de disponibilidade)
    if (quantidade < 1 || !Number.isInteger(quantidade)) {
        mensagem.textContent = "informe uma Quantidade";
        return;
    }

    // Ele efetua o cálculo da quantidade com o preço do produto 

        let subtotal = precoProduto * quantidade; 
    
    //=============== Cupom de Desconto =================

    let codigo = document.getElementById("cupom").value;
    let desconto = 0;

    //Elemento Condicional para o desconto do produto ser aplicado 
    if (codigo.toUpperCase() === "BRASA10") {
        desconto = subtotal * 0.10;
        mensagem.textContent= "Brasa 10% off Aplicado!";
    } else if (codigo === "") {
        mensagem.textContent= "Desconto não aplicado.";
    } else {
        mensagem.textContent= "Cupom inválido!"; 
    }

        //=========== Total a pagar ===================

        let total = subtotal - desconto;

        // Converter o valor para moeda

        document.getElementById("subtotal").textContent=
            subtotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

        document.getElementById("desconto").textContent =
            desconto.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});

        document.getElementById("total").textContent =
            total.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});

    });