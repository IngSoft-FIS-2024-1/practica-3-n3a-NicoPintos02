import Book from './book.js';

class Library {

  #name;
  #inventory = [];

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error('Name must be a string');
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error('Name cannot be empty');
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words = 0) {
    const newBook = new Book(title, author, pages, words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    return this.#inventory.reduce((sum, book) => sum + book.getWords(), 0);
  }
}

export default Library;
