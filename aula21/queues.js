// Estrutura de dados

// Queues (Filas)

// Criamos uma classe para cada nó da fila
class Node {
    // Cada nó possui duas propriedades, seu valor e um ponteiro que indica o nó que o segue
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Queue {
    // A fila possui três propriedades, o primeiro nó, o último nó e o tamanho da fila
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    };
    // O método enqueue recebe um valoe e o adiciona no "fim" da fila
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        };
        return ++this.size;
    };
    // O método dequeue elimina o elemento no "ínicio" da fila e retorna seu valor
    dequeue() {
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    };
};

const quickQueue = new Queue;

quickQueue.enqueue('value1');
quickQueue.enqueue('value2');
quickQueue.enqueue('value3');

console.log(quickQueue.first);
console.log(quickQueue.last);
console.log(quickQueue.size);

quickQueue.enqueue('value4');
console.log(quickQueue.dequeue())