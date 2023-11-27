function enviarTarefa() {
  let inputTarefa = document.getElementById('tarefa').value;
  let lista = document.getElementById('lista');
  
  let tarefaItem = document.createElement('div');
  tarefaItem.classList.add('tarefa-item');
  
  let checkDiv = document.createElement('div');
  checkDiv.classList.add('check');
  
  let p = document.createElement('p');
  p.textContent = inputTarefa;
  
  let checkBox = document.createElement('input');
  let deletar = document.createElement('i');
  checkBox.type = "checkbox";

  
  deletar.classList.add("bi", "bi-trash");

  // Adiciona primeiro o parágrafo e depois a checkbox ao div de verificação
  checkDiv.appendChild(checkBox);
  checkDiv.appendChild(p);

  // Adiciona o div de verificação e o ícone de deletar à tarefaItem
  tarefaItem.appendChild(checkDiv);
  tarefaItem.appendChild(deletar);

  // Adiciona a tarefaItem à lista
  lista.appendChild(tarefaItem);
  deletar.addEventListener('click',deletarTarefa)
  checkBox.addEventListener('change',function() {
    let elementoPai = checkBox.parentElement;
    let elementoAvo = elementoPai.parentElement;
    if(checkBox.checked){
      elementoAvo.classList.add('ativo')
    }else{
      elementoAvo.classList.remove('ativo')
    }
  })
}

function deletarTarefa(e){
 let elementoPai = e.target.parentElement;
 elementoPai.remove()
 console.log(elementoPai)
}