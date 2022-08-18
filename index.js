/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

TODAS  las respuestas deben ser USER-FRIENDLY. 
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.). 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸*/


/*👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).*/

const pizzas = [
    {
    id:1,
    nombre: "Pizza Napolitana",
    ingredientes: ["Queso","Tomate","Ajo"],
    precio: 1000,
    },
    {
    id:2,
    nombre: "Pizza Barrigona",
    ingredientes: ["Queso","Jamon","Huevos Fritos","Panceta"],
    precio:2000
    },
    {
    id:3,
    nombre: "Pizza Especial",
    ingredientes: ["Queso","Jamon","Morrones"],
    precio:1200
    },
    {
    id:4,
    nombre: "Pizza Calabresa ",
    ingredientes: ["Queso","Longaniza","Morrones"],
    precio:1500
    },
    {
    id:5,
    nombre: "Pizza Vegetariana",
    ingredientes: ["Queso","Brocoli","Morrones","Choclo"],
    precio:1700
    },
    {
    id:6,
    nombre: "Pizza Fugazzeta",
    ingredientes: ["Queso","Cebolla","Oregano"],
    precio:1800
    }
];

/*a) Las pizzas que tengan un id impar.*/

pizzas.forEach( (pizza) => {
    if(pizza.id % 2 !== 0) {
        console.log(`la ${pizza.nombre} tiene un id impar`);
    }
})

/* b) ¿Hay alguna pizza que valga menos de $600?*/

const pizzaMenorA600 = pizzas.some( (pizza) => pizza.precio <600);

console.log(pizzaMenorA600 ? `Hay pizzas que su valor es menor a 600` : `No hay pizzas que su valor sea menor a 600` )

/* c) El nombre de cada pizza con su respectivo precio.*/

pizzas.forEach( (pizza) => {
    console.log(`La ${pizza.nombre} tiene un valor de ${pizza.precio}`)
})

/*d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
 */

pizzas.forEach ((pizzas) => {
    console.log (`La ` + pizzas.nombre + `:`)
    pizzas.ingredientes.forEach((ingrediente) => {
        console.log(`-${ingrediente}`)
    })
})