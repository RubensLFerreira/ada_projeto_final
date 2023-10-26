const readline = require("node:readline");

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const tasks = [];

function addTask(task) {
  let id = 0;
  return;
}

function editTask(idTask, newTask) {
  try {
    const taskNumber = Number(idTask);

    if (!isNaN(taskNumber)) {
      const indexTask = tasks.findIndex((item) => item.id === taskNumber);
      tasks[indexTask].task = newTask;
      console.log(tasks);
    } else {
      console.log("\nErro! Digite um ID válido!\n");
    }
  } catch (error) {
    console.error({ message: error });
  }
}

function removeTask(taskId) {
  // Removendo tasks por Id
  const taskRemovida = tasks.findIndex((task) => task.id === parseInt(taskId)); // Encontrando ID da task para ser removida
  if (taskRemovida !== -1) {
    // Condição que encontra indice diferente de -1
    tasks.splice(taskRemovida, 1); // Através do método splice remove do array - argumento (1) que remove a task
    console.log(`A tarefa ${taskId} foi removida com sucesso!`);
  } else {
    // Caso não seja encontrada por ter sido removida ou é inexistente
    console.log(`A tarefa ${taskId} não foi encontrada :(`);
  }
}

function listTask() {
  return;
}

function viewTask(task) {
  return;
}

function close() {
  return rl.close();
}

function interation() {
  rl.question(
    `Escolha uma das opções abaixo: 
    1 - Adiconar tarefa 
    2 - Editar tarefa 
    3 - Remover tarefa 
    4 - Listar tarefas 
    5 - Visualizar tarefa 
    6 - Encerrar\n`,
    (answer) => {
      if (answer === "1") {
        console.log("\nAdicione uma nova tarefa: ");
      } else if (answer === "2") {
        rl.question("\nDigite o ID da tarefas para editar: ", (idTask) => {
          rl.question("\nDigite a nova tarefa: ", (newTask) => {
            editTask(idTask, newTask);
            interation();
          });
        });
      } else if (answer === "3") {
        rl.question(
          "\nDigite o ID da tarefa que deseja remover: ",
          (taskId) => {
            removeTask(taskId);
            interation();
          }
        );
      } else if (answer === "4") {
        console.log("\nDigite o ID da tarefas para visualizar: ");
      } else if (answer === "5") {
        console.log("\nDigite o ID da tarefas para visualizar: ");
      } else if (answer === "6") {
        console.log("Encerrando o programa!");
        close();
      }
    }
  );
}

interation();
