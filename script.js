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

function removeTask() {
  return;
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
