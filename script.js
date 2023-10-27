const readline = require("node:readline"); 

const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const tasks = []; 

var sequence = 1;


function addTask() {
  rl.question("Digite o nome da tarefa: ", (task) => {
      let id = sequence;
      sequence++;
  
      let tarefa = {
        id: id,
        task: task,
      }
  
      tasks.push(tarefa);
      console.log(`\nTarefa criada: {id: ${tarefa.id}, task: ${tarefa.task}}\n`);
      interation();
    });
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

//FUNÇÃO P/ REMOVER UMA TASK COM BASE NO ID.
function removeTask(taskId) {
  const taskNumber = Number(taskId);
  
  if (!isNaN(taskNumber)) {
    // Condição que encontra o indice da tarefa com base no ID.
    const taskRemovida = tasks.findIndex((task) => task.id === parseInt(taskNumber)); // Encontrando ID da task para ser removida.
 if(!isNaN(taskRemovida !== -1)){
    tasks.splice(taskRemovida, 1); // Através do método splice remove do array - argumento (1) que remove a task.
    console.log(`A tarefa ${taskId} foi removida com sucesso!`);
  } else {
    // Caso não seja encontrada por ter sido removida ou é inexistente.
    console.log(`A tarefa ${taskId} não foi encontrada`);
  }
}else{
  console.log("\n É necessário informar um ID válido! Por favor tente novamente.");
}
}

function listTask() {
  return;
}

function viewTask(id) {
  try {
    const taskId = Number(id);
    if (isNaN(taskId)) {
      throw new Error("\nErro! Digite um ID válido!\n")
    };

    const taskBuscada = tasks.filter((task) => task.id === taskId);

    if (!taskBuscada.length) {
      throw new Error("\nTarefa não localizada\n")
    };

    return console.log('\n',taskBuscada,'\n');

  } catch (error) {
    return console.error(error.message);
  }
};

//FUNÇÃO ENCERRAR PROGRAMA
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
        //Add task
        addTask();
      } else if (answer === "2") {
        //Edita task
        rl.question("\nDigite o ID da tarefas para editar: ", (idTask) => {
          rl.question("\nDigite a nova tarefa: ", (newTask) => {
            editTask(idTask, newTask);
            interation();
          });
        });
      } else if (answer === "3") {
        //Remove task
        rl.question(
          "\nDigite o ID da tarefa que deseja remover: ",
          (taskId) => {
            removeTask(taskId);
            interation();
          }
        );
      } else if (answer === "4") {
        //Listando todas tasks
        console.log("\nDigite o ID da tarefas para visualizar: ");
      } else if (answer === "5") {
        //Lista apenas uma task por ID
        rl.question("\nDigite o ID da tarefas para visualizar: ", (idTask) => {
          viewTask(idTask);
          interation()
        });
      } else if (answer === "6") {
        //Encerra
        console.log("Encerrando o programa!");
        close();
      }
    }
  );
}

interation(); 