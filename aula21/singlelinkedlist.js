// Estrutura de dados

// Linked list

// Singly linked list

// Criamos uma classe para cada nó da lista
class Node {
    // Cada nó possui duas propriedades, seu valor e um ponteiro que indica o nó que o segue
    constructor(val) {
        this.val = val;
        this.next = null;
    };
};

// Criamos uma classe para a lista
class SinglyLinkedList {
    // A lista possui três propriedades, o cabeçalho, a cauda (final) e o tamanho da lista
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    };
    // O método push recebe um valor como parâmetro e o atribui como final da lista
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        };
        this.lenght++;
        return this;
    };
    // O método pop remove o final da lista
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        };
        this.tail = newTail;
        this.tail.next = null;
        this.lenght--;
        if(this.lenght === 0) {
            this.head = null;
            this.tail = null;
        };
        return current;
    };
    // O método shift remove o topo da lista
    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.lenght--;
        if(this.lenght === 0) {
            this.tail = null;
        };
        return currentHead;
    };
    // O método unshift pega um valor como parâmetro e o atribui como o topo da lista
    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        };
        newNode.next = this.head;
        this.head = newNode;
        this.lenght++;
        return this;
    };
    // O método get recebe um número de índice como parâmetro e retorna o valor do nó naquele índice
    get(index) {
        if(index < 0 || index >= this.lenght) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    };
    // O método set recebe um número de índice e um valor como parâmetros e modifica o valor do nó no índice fornecido na lista
    set(index, val) {
        const foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        };
        return false;
    };
    // O método insert recebe um número de índice e um valor como parâmetros e insere o valor no índice fornecido na lista
    insert(index, val) {
        if(index < 0 || index > this.lenght) return false;
        if(index === this.lenght) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.lenght++;
        return true;
    };
    // O método remove pega um número de índice como parâmetro e remove o nó no índice fornecido na lista
    remove(index) {
        if(index < 0 || index >= this.lenght) return undefined;
        if(index === 0) return this.shift();
        if(index === this.lenght - 1) return this.pop();
        const previousNode = this.get(index - 1);
        const removed = previousNode.next;
        previousNode.next = removed.next;
        this.lenght--;
        return removed;
    };
    // O método reverse inverte a lista e todos os ponteiros para que a cabeça se torne a cauda e a cauda se torne a cabeça
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.lenght; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        };
        return this;
    };
};

const itemLista = new SinglyLinkedList;

itemLista.push('Amarelo');
itemLista.push('Verde');
itemLista.push('Vermelho');
itemLista.push('Azul');
itemLista.push('Laranja');
itemLista.push('Violeta');
itemLista.push('Rosa');
itemLista.push('Ciano');

console.log(itemLista.head);
console.log(itemLista.tail);
console.log(itemLista.lenght);

itemLista.pop();
console.log(itemLista.tail);

itemLista.shift();
console.log(itemLista.head);

itemLista.unshift('Amarelo');
console.log(itemLista.head);

console.log(itemLista.get(4));

itemLista.set(1, 'Cinza');
console.log(itemLista.get(1));

itemLista.insert(6, 'Verde');
console.log(itemLista.get(6));

itemLista.remove(4);
console.log(itemLista.get(4));

itemLista.reverse();
console.log(itemLista.head);
console.log(itemLista.tail);
console.log(itemLista.lenght);

console.log(itemLista.get(0));
console.log(itemLista.get(1));
console.log(itemLista.get(2));
console.log(itemLista.get(3));
console.log(itemLista.get(4));
console.log(itemLista.get(5));
console.log(itemLista.get(6));