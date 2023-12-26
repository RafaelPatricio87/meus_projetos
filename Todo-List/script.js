const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa() {
  if(input.value == ""){
    alert('Adicione alguma tarefa')
  }else{
    minhaListaDeItens.push({
      tarefa: input.value,
      status: false
    })
  }

  input.value = ''
  mostrarTarefas()
}

function mostrarTarefas(){
    
  let novaLi = ''

  minhaListaDeItens.forEach(( item, index) => {
    novaLi += `
    <li  class="task  ${item.status && 'done'}">
    <img src="./img/checked.png" alt="check-na-tarefa" onclick='concluirTarefa(${index})'>
    <p>${item.tarefa}</p>
    <img src="img/trash.png" alt="tarefa-para-o-lixo" onclick='deletarItem(${index})'>
  </li>
    `
  })
  listaCompleta.innerHTML = novaLi

  localStorage.setItem('lista',JSON.stringify(minhaListaDeItens))

}
function concluirTarefa(posicao) {
   minhaListaDeItens[posicao].status = !minhaListaDeItens[posicao].status

   mostrarTarefas()

  }

function deletarItem(posicao){
  minhaListaDeItens.splice(posicao,1)
  mostrarTarefas()
}

function recarregarTarefas() {

  const tarefaDoLocalStoge = localStorage.getItem('lista')

  if(tarefaDoLocalStoge){
    minhaListaDeItens = JSON.parse(tarefaDoLocalStoge)
  }

  mostrarTarefas()
}
recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)