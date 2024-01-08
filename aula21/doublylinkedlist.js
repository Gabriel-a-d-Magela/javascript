// Estrutura de dados

// Linked list

// Doubly linked list

// Criamos uma classe para cada nó da lista

class Node {
    // Cada nó possui três propriedades, seu valor, um ponteiro que indica o nó seguinte e um ponteiro que indica o nó anterior
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    };
};

// Criamos uma classe para a lista
class DoublyLinkedList {
    // A lista possui três propriedades, o cabeçalho, a cauda(final) e o tamanho da lista
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    // O método push recebe um valor como parâmetro e o atribui como final da lista
    push(val) {
        const newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        };
        this.length++;
        return this;
    };
    // O método pop remove o final da lista
    pop() {
        if (!this.head) return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        };
        this.length--;
        return poppedNode;
    };
    // O método shift remove o topo da lista
    shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        };
        this.length--;
        return oldHead;
    };
    // O método unshift pega um valor como parâmetro e o atribui como o topo da lista
    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        };
        this.length++;
        return this;
    };
    // O método get recebe um número de índice como parâmetro e retorna o valor do nó naquele índice
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            };
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            };
        };
        return current;
    };
    // O método set recebe um número de índice e um valor como parâmetros e modifica o valor do nó no índice fornecido na lista
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        };
        return false;
    };
    // O método insert recebe um número de índice e um valor como parâmetros e insere o valor no índice fornecido na lista
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    };
};

const itemLista = new DoublyLinkedList;

itemLista.push('Abacaxi');
itemLista.push('Banana');
itemLista.push('Carambola');
itemLista.push('Damasco');
itemLista.push('Goiaba');
itemLista.push('Laranja');
itemLista.push('Melancia');

console.log(itemLista);

itemLista.pop();
console.log(itemLista);

itemLista.shift();
console.log(itemLista);

itemLista.unshift('Abacate');
console.log(itemLista);

console.log(itemLista.get(3));

itemLista.set(5, 'Limão');
console.log(itemLista);

itemLista.insert(4, 'Framboesa');
console.log(itemLista.get(4));