// Estrutura de dados

// Graph (Grafos)

// Lista de adjacência

// Grafo não direcionado e não ponderado

// Criamos uma classe para o grafo
class Graph {
    // O grafo possui apenas uma propriedade que é a lista de adjacências
    constructor() {
        this.adjacencyList = {};
    };
    // O método addNode pega um valor de nó como parâmetro e o adiciona como uma chave à adjacencyList se ele não estava presente anteriormente
    addNode(node) {
        if(!this.adjacencyList[node]) this.adjacencyList[node] = [];
    };
    // O addConnection usa dois nós como parâmetros e adiciona cada nó ao array de conexões do outro
    addConnection(node1, node2) {
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    };
    // O removeConnection usa dois nós como parâmetros e remove cada nó do array de conexões do outro
    removeConnection(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1);
    };
    // O método removeNode usa um valor de nó como parâmetro. Ele remove todas as conexões com aquele nó presente no grafo e, em seguida, exclui a chave do nó da lista de adjacência
    removeNode(node) {
        while(this.adjacencyList[node].length) {
            const adjacentNode = this.adjacencyList[node].pop();
            this.removeConnection(node, adjacentNode);
        };
        delete this.adjacencyList[node];
    };
};

const MinasGerais = new Graph();

MinasGerais.addNode('Belo Horizonte');
MinasGerais.addNode('Sabará');
MinasGerais.addNode('Nova Lima');
MinasGerais.addNode('Contagem');

MinasGerais.addConnection('Belo Horizonte', 'Sabará');
MinasGerais.addConnection('Belo Horizonte', 'Nova Lima');
MinasGerais.addConnection('Belo Horizonte', 'Contagem');
MinasGerais.addConnection('Sabará', 'Nova Lima');

console.log(MinasGerais);