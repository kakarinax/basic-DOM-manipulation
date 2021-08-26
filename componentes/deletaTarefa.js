const DeleteButton = () => {
  const deleteButton = document.createElement("button");

  deleteButton.innerHTML = "Deletar";
  deleteButton.addEventListener("click", deleteTask);
  return deleteButton;
};

const deleteTask = (evento) => {
  const deleteButton = evento.target;
  const taskComplete = deleteButton.parentElement;
  taskComplete.remove(); // removendo o li - nó da arvore DOM -
};

export default DeleteButton