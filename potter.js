const prompt = require("prompt-sync")();

const personagem = [];
const casa = [];
const especie = [];

//---------------------------------FUNÇÃO DE INCLUIR------------------------
function incluir() {
  console.log("\n✨ Cadastro do Aluno em Hogwarts ✨");
  console.log("-".repeat(80));

  //---------------------------------LÓGICA DE VALIDAÇÃO DE NOME------------------------
  let nomePersonagem = "";
  while (true) {
    nomePersonagem = prompt("Nome do Aluno: ");
    if (nomePersonagem === "Edecio") {
      console.log("Nome ofensivo em Hogwarts! Escolha outro... 💥");
      continue;
    } else {
      break;
    }
  }

  //---------------------------------LÓGICA DO CHAPÉU SELETOR------------------------
  console.log(" ");
  console.log("✨ Chapéu Seletor ✨");
  console.log(" ");

  const caracteristica = prompt(
    "Escolha sua principal característica (Coragem, Ambição, Inteligência, Gentileza): "
  );

  const casas = {
    coragem: "Grifinoria",
    ambicao: "Sonserina",
    inteligencia: "Corvinal",
    gentileza: "Lufa-Lufa",
  };

  //---------------------------------LÓGICA DA ESPÉCIE------------------------
  console.log(" ");
  const especiePersonagem = prompt("Qual a Espécie Mágica do Aluno: ");

  //---------------------------------ADICIONA VALORES AOS VETORES------------------------
  personagem.push(nomePersonagem);
  casa.push(casas[caracteristica.toLowerCase()] || "Sem teto");
  especie.push(especiePersonagem);
  console.log(" ");
  console.log("✨ Fantástico! Novo aluno cadastrado com sucesso! ✨");
}

//---------------------------------FUNÇÃO DE LISTAR------------------------
function listar() {
  console.log("\n✨Listagem de Alunos✨");
  console.log("-".repeat(80));
  console.log(
    "\nNº Nome ......................... Casa de Hogwarts ............. Espécie"
  );
  console.log("-".repeat(80));

  for (let i = 0; i < personagem.length; i++) {
    console.log(
      ` ${i + 1} ${personagem[i].padEnd(30)} ${casa[i].padEnd(30)} ${especie[
        i
      ].padEnd(30)}`
    );
  }
}

//---------------------------------FUNÇÃO DE PESQUISAR POR CASA------------------------
function pesq_casa() {
  console.log("\nPesquisa por Casa");
  console.log("-".repeat(80));

  // .toUpperCase() converte para letras maiúsculas

  const pesqCasa = prompt(
    "Por qual Casa de Hogwarts deseja pesquisar?⚡️ "
  ).toUpperCase();

  console.log(
    "\nNº Nome............... Casa de Hogwarts.............. Espécie"
  );
  console.log("-".repeat(80));

  let contador = 0;

  for (let i = 0; i < personagem.length; i++) {
    if (casa[i].toUpperCase() == pesqCasa) {
      console.log(
        ` ${i + 1} ${personagem[i].padEnd(30)} ${casa[i].padEnd(20)} ${
          especie[i]
        }`
      );
      contador = contador + 1;
    }
  }

  if (contador == 0) {
    console.log("💥Aluno não encontrado!💥");
  }
}

//---------------------------------FUNÇÃO DE PESQUISAR POR ESPECIE------------------------
function pesq_especie() {
  console.log("\nPesquisa por Espécie");
  console.log("-".repeat(80));

  const pesqEspecie = prompt(
    "Por qual Especie Mágica deseja pesquisar? "
  ).toUpperCase();

  console.log(
    "\nNº Nome............... Casa de Hogwarts.............. Espécie"
  );
  console.log("-".repeat(80));

  let contador = 0;

  for (let i = 0; i < personagem.length; i++) {
    if (especie[i].toUpperCase() == pesqEspecie) {
      console.log(
        ` ${i + 1} ${personagem[i].padEnd(30)} ${casa[i].padEnd(20)} ${
          especie[i]
        }`
      );
      contador = contador + 1;
    }
  }

  if (contador == 0) {
    console.log("💥Aluno não encontrado!💥");
  }
}

//---------------------------------FUNÇÃO DE EXCLUIR------------------------

function excluir() {
  listar();
  console.log("\nExclusão de Alunos");
  console.log("=".repeat(40));
  const numExcluir = Number(prompt("Número do Aluno (0 para retornar): "));
  if (numExcluir == 0) {
    return;
  }

  if (numExcluir > personagem.length) {
    console.log("💥Nenhum aluno não encontrado!💥");
    return;
  }
  const excluido = personagem.splice(numExcluir - 1, 1);
  casa.splice(numExcluir - 1, 1);
  especie.splice(numExcluir - 1, 1);

  console.log(
    "✨Avada Kedavra! Aluno(a) " +
      excluido.toString() +
      " excluído com sucesso!✨"
  );
}

//---------------------------------FUNÇÃO DE ESTATÍSTICA------------------------
function estatistica() {
  console.log("\nEstatística do Cadastro de Alunos");
  console.log("=".repeat(40));

  if (personagem.length == 0) {
    console.log("💥Nenhum aluno não encontrado!💥");
    return;
  }

  const numPersonagem = personagem.length;
  console.log("Número de alunos cadastrados: " + numPersonagem);
  console.log(".".repeat(40));
  console.log(" ");
  console.log("Quantidade de alunos por casa");
  console.log("-".repeat(40));

  let qtdGrif = 0;
  let qtdLuf = 0;
  let qtdCor = 0;
  let qtdSon = 0;

  for (let i = 0; i < casa.length; i++) {
    if (casa[i] === "Grifinoria") {
      qtdGrif++;
    } else if (casa[i] === "Lufa-Lufa") {
      qtdLuf++;
    } else if (casa[i] === "Corvinal") {
      qtdCor++;
    } else if (casa[i] === "Sonserina") {
      qtdSon++;
    }
  }
  console.log("Grifinoria 🦁: " + qtdGrif);
  console.log("Lufa-Lufa 🦝: " + qtdLuf);
  console.log("Cornival 🦤: " + qtdCor);
  console.log("Sonserina 🐍: " + qtdSon);
}

//---------------------------------PROGRAMA PRINCIPAL------------------------

do {
  console.log("\n✨HOGWARTS✨");
  console.log("-".repeat(80));
  console.log("1. Incluir Aluno");
  console.log("2. Listar Alunos");
  console.log("3. Pesquisar por Casa");
  console.log("4. Pesquisar por Espécie");
  console.log("5. Excluir Alunos");
  console.log("6. Estatística de Personagens");
  console.log("7. Finalizar");

  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesq_casa();
  } else if (opcao == 4) {
    pesq_especie();
  } else if (opcao == 5) {
    excluir();
  } else if (opcao == 6) {
    estatistica();
  } else if (opcao == 7) {
    break;
  } else {
    console.log("💥Opção Inválida💥");
  }
} while (true);
