const library = [
  {
    title: "Diez negritos",
    author: "Agatha Christie",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "La máquina que cambió el mundo",
    author: "Salvador Lucas Alba",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

for (i = 0; i < library.length; ++i) {
	library[i].status.read = true;
};

// Desestructurar el título del primer libro
const {title: firstBook} = library[0]

console.log(firstBook);

const str = JSON.stringify(library);

console.log(str);