// Estrutura de dados

// Stack (Pilha)

// Criamos uma classe para cada nó da pilha
class Node {
    // Cada nó possui duas propriedades, seu valor e um ponteiro que indica o nó que o segue
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};
// Criamos uma classe para pilha
class Stack {
    // A pilha possui três propriedades, o primeiro nó, o último nó e o tamanho da pilha
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    };
    // O metódo push recebe um valor e o adiciona ao "topo" da pilha
    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        };
        return ++this.size;
    };
    // O método pop elimina o elemento no "topo" da pilha e retorna seu valor
    pop() {
        if (!this.first) return null;
        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        };
        this.first = this.first.next;
        this.size--;
        return temp.value;
    };
};

const stck = new Stack;

stck.push('value1');
stck.push('value2');
stck.push('value3');

console.log(stck.first);
console.log(stck.last);
console.log(stck.size);

stck.push('value4');
console.log(stck.pop())