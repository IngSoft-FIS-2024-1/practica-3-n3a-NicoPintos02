// book.test.js
import { describe, it, expect, beforeEach } from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => new Book('Test Title', 123, 100)).toThrow(Error);
    expect(() => {
      const book = new Book('Test Title', 'Test Author', 100);
      book.setAuthor(123);
    }).toThrow(Error);
  });

  it('check page param is a number', () => {
    expect(() => new Book('Test Title', 'Test Author', '100')).toThrow(Error);
    expect(() => {
      const book = new Book('Test Title', 'Test Author', 100);
      book.setPages('100');
    }).toThrow(Error);
  });

  it('check pages not < 1', () => {
    expect(() => new Book('Test Title', 'Test Author', 0)).toThrow(Error);
    expect(() => new Book('Test Title', 'Test Author', -1)).toThrow(Error);
    expect(() => {
      const book = new Book('Test Title', 'Test Author', 100);
      book.setPages(0);
    }).toThrow(Error);
  });

  it('toString()', () => {
    const book = new Book('Test Title', 'Test Author', 100, 5000);
    expect(book.toString()).toBe('Título: Test Title Autor: Test Author Páginas: 100 Palabras: 5000');
  });

  it('Book setWords and getWords', () => {
    const book = new Book('Test Title', 'Test Author', 100);
    book.setWords(5000);
    expect(book.getWords()).toBe(5000);
  });

  it('Book setWords with invalid value', () => {
    const book = new Book('Test Title', 'Test Author', 100);
    expect(() => book.setWords('5000')).toThrow(Error);
    expect(() => book.setWords(-5000)).toThrow(Error);
  });

  it('Book wordsPerPage', () => {
    const book = new Book('Test Title', 'Test Author', 100, 5000);
    expect(book.wordsPerPage()).toBe(50);
  });

  // Test para wordsPerPage con cero páginas
  it('Book wordsPerPage with zero pages', () => {
    const book = new Book('Test Title', 'Test Author', 0, 5000);
    expect(book.wordsPerPage()).toBe(0);
  });

  // Test para wordsPerPage con páginas establecidas a cero posteriormente
  it('Book wordsPerPage when pages set to zero later', () => {
    const book = new Book('Test Title', 'Test Author', 100, 5000);
    book.setPages(0);
    expect(book.wordsPerPage()).toBe(0);
  });

  // Nuevo test: Autor como cadena vacía
  it('setAuthor with empty string sets author to "Anónimo"', () => {
    myBook.setAuthor('');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  // Nuevo test: Autor como espacios en blanco
  it('setAuthor with whitespace string sets author to "Anónimo"', () => {
    myBook.setAuthor('   ');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  // Nuevo test: Prueba para wordsPerPage con palabras establecidas a 0
  it('Book wordsPerPage with zero words', () => {
    const book = new Book('Test Title', 'Test Author', 100, 0);
    expect(book.wordsPerPage()).toBe(0);
  });

  // Nuevo test: Prueba para setWords con números decimales
  it('Book setWords with decimal number', () => {
    const book = new Book('Test Title', 'Test Author', 100);
    book.setWords(5000.5);
    expect(book.getWords()).toBe(5000.5);
  });
});
