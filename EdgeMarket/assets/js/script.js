// Obtenha a referência para o formulário de envio de mensagem
const form = document.querySelector("form");

// Adicione um ouvinte de evento para o envio do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evite o comportamento padrão de recarregar a página

  // Obtenha o valor da mensagem digitada pelo usuário
  const message = document.querySelector("textarea[name=message]").value;

  // Crie uma nova mensagem no chat
  const messageContainer = document.createElement("div");
  messageContainer.className = "message";

  const userSpan = document.createElement("span");
  userSpan.className = "user";
  userSpan.textContent = "Usuário:";

  const contentSpan = document.createElement("span");
  contentSpan.className = "content";
  contentSpan.textContent = message;

  messageContainer.appendChild(userSpan);
  messageContainer.appendChild(contentSpan);

  // Adicione a nova mensagem ao chat
  const chatContainer = document.querySelector(".chat-container");
  chatContainer.appendChild(messageContainer);

  // Limpe o campo de texto da mensagem
  document.querySelector("textarea[name=message]").value = "";
});
