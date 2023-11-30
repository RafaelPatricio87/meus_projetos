function enviarTarefa() {
  let inputTarefa = document.getElementById('tarefa').value;
  let lista = document.getElementById('lista');

  let tarefaItem = document.createElement('div');
  tarefaItem.classList.add('tarefa-item');

  let checkDiv = document.createElement('div');
  checkDiv.classList.add('check');

  let p = document.createElement('p');
  p.textContent = inputTarefa;
  
  let iconDiv = document.createElement('div')
  
  let checkBox = document.createElement('input');
  let editar = document.createElement('i');
  let deletar = document.createElement('i');
  
  checkBox.type = "checkbox";
  editar.classList.add("bi", "bi-pencil", "icon");
  deletar.classList.add("bi", "bi-trash");

  // Adiciona a checkbox e o parágrafo ao div de verificação
  checkDiv.appendChild(checkBox);
  checkDiv.appendChild(p);

  // Adiciona o div de verificação e os ícones de editar e deletar à tarefaItem
  tarefaItem.appendChild(checkDiv);
  iconDiv.appendChild(editar);
  iconDiv.appendChild(deletar);
  tarefaItem.appendChild(iconDiv);

  // Adiciona a tarefaItem à lista
  lista.appendChild(tarefaItem);

  // Adiciona eventos
  deletar.addEventListener('click', deletarTarefa);
  editar.addEventListener('click', editarTarefa);
  checkBox.addEventListener('change', function () {
    let elementoAvo = checkBox.closest('.tarefa-item');
    if (checkBox.checked) {
      elementoAvo.classList.add('ativo');
    } else {
      elementoAvo.classList.remove('ativo');
    }
  });

  // Limpa o valor do input
  document.getElementById('tarefa').value = '';
}

function deletarTarefa(e) {
  let elementoPai = e.target.parentElement;
  let elementoAvo = elementoPai.parentElement;
  elementoAvo.remove();
}

function editarTarefa(e){
  console.log(e.target)
}