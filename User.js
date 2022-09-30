class Usuario {
      constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros
      }


  getFullName() {
      return `${this.nombre} ${this.apellido}`
  }

  getMascotas() {
    return this.mascotas.length
  }

  addMascota(mascota){
    this.mascotas.push (mascota)
  }
  addBook(nombre, autor) {
      this.libros.push({
        nombre: nombre,
        autor: autor
      })
    }

  getBooks() {
      let nombres = []
      for (let i = 0; i < this.libros.length; i++) {
        nombres.push(this.libros[i].nombre)
      }
      return nombres
    }
}

let nombre = 'Roberto'
let apellido = 'Ramirez'
let mascotas = []
let libros = []
let usuario = new Usuario(nombre, apellido, mascotas, libros);

usuario.addMascota(
  'Perra llamada Princesa'
)
usuario.addMascota(
  'Gato llamado Draco'
)
usuario.addBook('Harry Potter y la piedra filosofal', 'J. K. Rowling')
usuario.addBook('El señor de los anillos el retorno del rey', 'J. R. R. Tolkien')

console.log(usuario)
