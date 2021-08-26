const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "Concluir";
  botaoConclui.addEventListener("click", concTask);

  return botaoConclui;
};

const concTask = (evento) => {
  const botaoConclui = evento.target;

  const taskComplete = botaoConclui.parentElement;

  taskComplete.classList.toggle("done");
};

export default BotaoConclui;