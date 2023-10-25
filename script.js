const readline = require("node:readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const tasks = [];

function addTask(task) {
  return;
}

function editTask() {
  return;
}

function removeTask() { //Removendo tasks por Id
  const taskRemovida = tasks.findIndex(task => task.id === taskId); //Encontrando ID da task para ser removida
  if (taskRemovida !== -1){ //condição que encontra indice diferente de -1
tasks.splice(taskRemovida, 1); //através do método splice remove do array - argumento (1) que remove a task
console.log(`A tarefa ${task} foi removida com sucesso!`) ; 
}else{ //caso não seja encontrada por ter sido removida ou é inexistente
console.log(`A tarefa ${task} não foi encontrada :(`);
}
}

function listTask() {
  return;
}

function viewTask(task) {
  return;
}

function interation() {
  rl.question(
    `Escolha uma das opções abaixo:\n 
    1 - Adiconar tarefa\n 
    2 - Editar tarefa\n 
    3 - Remover tarefa\n 
    4 - Listar tarefas\n 
    5 - Visualizar tarefa\n 
    6 - Encerrar\n`,
    (answer) => {
      if (answer === "1") {
        console.log("\nAdicione uma nova tarefa: ");
      } else if (answer === "2") {
        console.log("\nDigite o ID da tarefas para editar: ");
      } else if (answer === "3") {
        console.log("\nDigite o ID da tarefas para remover: ");
      } else if (answer === "4") {
        console.log("\nDigite o ID da tarefas para visualizar: ");
      } else if (answer === "5") {
        console.log("\nDigite o ID da tarefas para visualizar: ");
      }
    }
  );
}

interation();
