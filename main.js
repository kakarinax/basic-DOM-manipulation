import BotaoConclui from "./componentes/concluiTarefa.js";
import DeleteButton from "./componentes/deletaTarefa.js";

const createTask = (evento) => {
  evento.preventDefault(); // prevenindo comportamento default, neste caso, de refresh ao clicar
  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const task = document.createElement("li"); // cria elemento no DOM
  task.classList.add("task"); // add classe no elemento
  const conteudo = `<p class="content">${value} </p>`; // template string - interpolar html com js
  task.innerHTML = conteudo;

  task.appendChild(BotaoConclui());
  task.appendChild(DeleteButton());
  lista.appendChild(task); // cria elemento filho
  input.value = " ";
};

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", createTask);
