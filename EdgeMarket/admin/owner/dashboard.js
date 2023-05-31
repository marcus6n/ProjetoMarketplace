// Usuários fictícios
const users = [
  {
    nome: "Usuário 1",
    email: "usuario1@example.com",
    dataCompra: "2023-05-31",
  },
  {
    nome: "Usuário 2",
    email: "usuario2@example.com",
    dataCompra: "2023-05-30",
  },
  {
    nome: "Usuário 3",
    email: "usuario3@example.com",
    dataCompra: "2023-05-29",
  },
  {
    nome: "Usuário 4",
    email: "usuario4@example.com",
    dataCompra: "2023-05-28",
  },
  {
    nome: "Usuário 5",
    email: "usuario5@example.com",
    dataCompra: "2023-05-27",
  },
  // Adicione mais usuários fictícios aqui
  {
    nome: "Usuário 6",
    email: "usuario6@example.com",
    dataCompra: "2023-05-26",
  },
  {
    nome: "Usuário 7",
    email: "usuario7@example.com",
    dataCompra: "2023-05-25",
  },
  {
    nome: "Usuário 8",
    email: "usuario8@example.com",
    dataCompra: "2023-05-24",
  },
  {
    nome: "Usuário 9",
    email: "usuario9@example.com",
    dataCompra: "2023-05-23",
  },
  {
    nome: "Usuário 10",
    email: "usuario10@example.com",
    dataCompra: "2023-05-22",
  },
];

// Vendedores fictícios
const sellers = [
  {
    nome: "Vendedor 1",
    email: "vendedor1@example.com",
    dataAnuncio: "2023-05-31",
  },
  {
    nome: "Vendedor 2",
    email: "vendedor2@example.com",
    dataAnuncio: "2023-05-30",
  },
  {
    nome: "Vendedor 3",
    email: "vendedor3@example.com",
    dataAnuncio: "2023-05-29",
  },
  {
    nome: "Vendedor 4",
    email: "vendedor4@example.com",
    dataAnuncio: "2023-05-28",
  },
  {
    nome: "Vendedor 5",
    email: "vendedor5@example.com",
    dataAnuncio: "2023-05-27",
  },
  // Adicione mais vendedores fictícios aqui
  {
    nome: "Vendedor 6",
    email: "vendedor6@example.com",
    dataAnuncio: "2023-05-26",
  },
  {
    nome: "Vendedor 7",
    email: "vendedor7@example.com",
    dataAnuncio: "2023-05-25",
  },
  {
    nome: "Vendedor 8",
    email: "vendedor8@example.com",
    dataAnuncio: "2023-05-24",
  },
  {
    nome: "Vendedor 9",
    email: "vendedor9@example.com",
    dataAnuncio: "2023-05-23",
  },
  {
    nome: "Vendedor 10",
    email: "vendedor10@example.com",
    dataAnuncio: "2023-05-22",
  },
];

// NFTs fictícios
const nfts = [
  {
    nome: "NFT 1",
    descricao: "Descrição do NFT 1",
    vendedor: "Vendedor 1",
  },
  {
    nome: "NFT 2",
    descricao: "Descrição do NFT 2",
    vendedor: "Vendedor 2",
  },
  {
    nome: "NFT 3",
    descricao: "Descrição do NFT 3",
    vendedor: "Vendedor 3",
  },
  {
    nome: "NFT 4",
    descricao: "Descrição do NFT 4",
    vendedor: "Vendedor 4",
  },
  {
    nome: "NFT 5",
    descricao: "Descrição do NFT 5",
    vendedor: "Vendedor 5",
  },
  // Adicione mais NFTs fictícios aqui
  {
    nome: "NFT 6",
    descricao: "Descrição do NFT 6",
    vendedor: "Vendedor 6",
  },
  {
    nome: "NFT 7",
    descricao: "Descrição do NFT 7",
    vendedor: "Vendedor 7",
  },
  {
    nome: "NFT 8",
    descricao: "Descrição do NFT 8",
    vendedor: "Vendedor 8",
  },
  {
    nome: "NFT 9",
    descricao: "Descrição do NFT 9",
    vendedor: "Vendedor 9",
  },
  {
    nome: "NFT 10",
    descricao: "Descrição do NFT 10",
    vendedor: "Vendedor 10",
  },
];

// Solicitações de saque fictícias
const withdrawals = [
  {
    usuario: "Usuário 1",
    valor: 100.0,
    status: "Pendente",
  },
  {
    usuario: "Usuário 2",
    valor: 50.0,
    status: "Aprovado",
  },
  {
    usuario: "Usuário 3",
    valor: 200.0,
    status: "Rejeitado",
  },
  // Adicione mais solicitações de saque fictícias aqui
  {
    usuario: "Usuário 4",
    valor: 75.0,
    status: "Pendente",
  },
  {
    usuario: "Usuário 5",
    valor: 150.0,
    status: "Aprovado",
  },
  {
    usuario: "Usuário 6",
    valor: 300.0,
    status: "Rejeitado",
  },
  {
    usuario: "Usuário 7",
    valor: 90.0,
    status: "Pendente",
  },
  {
    usuario: "Usuário 8",
    valor: 80.0,
    status: "Aprovado",
  },
  {
    usuario: "Usuário 9",
    valor: 250.0,
    status: "Rejeitado",
  },
  {
    usuario: "Usuário 10",
    valor: 120.0,
    status: "Pendente",
  },
];



// Função para preencher a tabela de solicitações de saque
function fillWithdrawalTable() {
  const tableBody = document.getElementById("withdrawal-table-body");

  withdrawals.forEach((withdrawal) => {
    const row = document.createElement("tr");

    const usuarioCell = document.createElement("td");
    usuarioCell.textContent = withdrawal.usuario;
    row.appendChild(usuarioCell);

    const valorCell = document.createElement("td");
    valorCell.textContent = withdrawal.valor;
    row.appendChild(valorCell);

    const statusCell = document.createElement("td");
    statusCell.textContent = withdrawal.status;
    row.appendChild(statusCell);

    const actionsCell = document.createElement("td");
    const approveButton = document.createElement("button");
    approveButton.textContent = "Aprovar";
    approveButton.addEventListener("click", () => {
      approveWithdrawal(withdrawal.usuario);
    });
    actionsCell.appendChild(approveButton);

    const rejectButton = document.createElement("button");
    rejectButton.textContent = "Rejeitar";
    rejectButton.addEventListener("click", () => {
      rejectWithdrawal(withdrawal.usuario);
    });
    actionsCell.appendChild(rejectButton);

    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}

// Função para aprovar uma solicitação de saque
function approveWithdrawal(usuario) {
  const index = withdrawals.findIndex(
    (withdrawal) => withdrawal.usuario === usuario
  );
  if (index !== -1) {
    withdrawals[index].status = "Aprovado";
    refreshWithdrawalTable();
  }
}

// Função para rejeitar uma solicitação de saque
function rejectWithdrawal(usuario) {
  const index = withdrawals.findIndex(
    (withdrawal) => withdrawal.usuario === usuario
  );
  if (index !== -1) {
    withdrawals[index].status = "Rejeitado";
    refreshWithdrawalTable();
  }
}

// Função para atualizar a tabela de solicitações de saque
function refreshWithdrawalTable() {
  const tableBody = document.getElementById("withdrawal-table-body");
  tableBody.innerHTML = "";
  fillWithdrawalTable();
}

// Função principal para inicializar a página
function initializePage() {
  fillWithdrawalTable();
}

// Chamar a função principal para inicializar a página
initializePage();
