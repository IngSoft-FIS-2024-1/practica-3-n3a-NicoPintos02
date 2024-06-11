class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages, words = 0) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    this.setWords(words);  // Set words in constructor
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error("Title must be a string");
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error("Title cannot be empty");
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error("Author must be a string");
    }
    author = author.trim();
    if (author.length === 0) {
      author = "Anónimo";
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error("Pages must be a number");
    }
    if (pages < 1) {
      throw new Error("Pages must be at least 1");
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if (typeof (words) !== 'number' || isNaN(words)) {
      throw new Error("Words must be a number");
    }
    if (words < 0) {
      throw new Error("Words cannot be negative");
    }
    this.#words = words;
  }

  wordsPerPage() {
    if (this.#pages === 0) return 0;
    return this.#words / this.#pages;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
  }
}

export default Book;
