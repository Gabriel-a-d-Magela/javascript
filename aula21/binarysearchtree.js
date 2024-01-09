// Estrutura de dados

// Trees

// Binary Search Tree (BST)

// Criamos uma classe para cada nó da árvore
class Node{
    // Cada nó possui três propriedades, seu valor, um ponteiro que indica o nó à sua esquerda e um ponteiro que indica o nó à sua direita
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    };
};
// Criamos uma classe para o BST
class BinarySearchTree{
    // A árvore possui apenas uma propriedade que é seu nó raiz
    constructor(){
        this.root = null;
    };
    // O método insert recebe um valor como parâmetro e insere o valor em seu local correspondente dentro da árvore
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        };
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                };
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                };
                current = current.right;
            };
        };
    };
    // O método find recebe um valor como parâmetro e itera pela árvore procurando por esse valor
    // Se o valor for encontrado, ele retorna o nó correspondente e se não for, retorna indefinido
    find(value){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            };
        };
        if(!found) return undefined;
        return current;
    };
    // O método contains recebe um valor como parâmetro e retorna true se o valor for encontrado dentro da árvore
    contains(value){
        if(this.root === null) return false;
        let current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            };
        };
        return false;
    };
};

const noArvore = new BinarySearchTree;

noArvore.insert(2);
noArvore.insert(1);
noArvore.insert(3);

console.log(noArvore);

console.log(noArvore.find(3));

console.log(noArvore.contains(1));