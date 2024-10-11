let tarefas = ["Estudar JavaScript", "Ir à academia", "Ler um livro"];

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
    return `Tarefa "${tarefa}" adicionada com sucesso!`;
}

function listarTarefas() {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa}`);
    });
    return tarefas.length;
}

function totalDeTarefas() {
    return `Você tem ${tarefas.length} tarefas na lista.`;
}

console.log(adicionarTarefa("Caminhar no parque"));

let numeroDeTarefas = listarTarefas();
console.log(`Total de tarefas listadas: ${numeroDeTarefas}`);

console.log(totalDeTarefas());

function adicionarTarefaAleatoria() {
    const tarefasAleatorias = [
        "Fazer uma pausa", 
        "Assistir a um filme", 
        "Ler um artigo interessante", 
        "Meditar por 10 minutos"
    ];
    const tarefa = tarefasAleatorias[Math.floor(Math.random() * tarefasAleatorias.length)];
    return adicionarTarefa(tarefa);
}

console.log(adicionarTarefaAleatoria());
listarTarefas();

}