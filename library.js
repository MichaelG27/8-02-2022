// объектная модель библиотеки
// Голяков, ПКС-220, 8 февраля 2022

// Эта программа предстваляет собой объектную модель для автоматизации работы библиотеки.
// Класс Client - это посетитель библиотеки, он может как попросить книгу у библиотекаря, так и вернуть её
// Класс Librarian - это библиотекарь, он выдает книги по запросу посетителя
// И Client, и Librarian - наследники класса Human (англ. человек), который имеет метод giveBook, исползуемый обоеми классами
// Таким образом, данная модель, реализуя наследование и полиморфизм, является примером применения объектно-ориентированного программирования 

let storage = []; // это хралилище всех книг, к которому обращается библиотекарь

class Human {
  constructor (name, inventory = []) {
    this.inventory = inventory;
    this.name = name;
  }
  giveBook (book_name, receiver) { 
    if (this.inventory[book_name]) {
      receiver.inventory.push(book_name);
      let index = this.inventory.indexOf(book_name)
      if (index > -1) {
        this.inventory.splice(index, 1);
      } else (console.log(`Такой книги нет в инвентаре: ${book_name}`))
    }
  }
  
}

class Client extends Human {
  constructor () {

  }
  askBook (book_name) {
    let librarian = new Librarian('name');
    librarian.getBookFromStorageAndGive(book_name, receiver_obj)
  }
  return_book (book_name) {
    let index = this.inventory.indexOf(book_name)
    if (index > -1) {
      this.giveBook(book_name, receiver_obj)
    } else {
      return console.log(`Эту книгу невозможно вернуть, так как её нет в инвентаре: ${book_name}`)
    }
  }
}

class Librarian extends Human {
  constructor () {

  }
  getBookFromStorageAndGive (book_name, receiver_obj) {
    let inventory_index = this.inventory.indexOf(book_name)
    if (inventory_index > -1) {
      this.giveBook(book_name, receiver_obj)
    } else {
      let storage_index = storage.indexOf(book_name);
      if (storage_index > -1) {
        this.inventory.push(storage[storage_index])
        this.giveBook(book_name, receiver_obj)
      } else {
        return console.log(`такой книги вообще нет: ${book_name}`)
      }
    }
  }
}
