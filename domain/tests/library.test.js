import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });
  it('throw an error when setting an empty name', () => {
    expect(() => new Library('')).toThrow(Error);
    expect(() => {
      const library = new Library('Test Library');
      library.setName('');
    }).toThrow(Error);
  });

  it('Library totalWords', () => {
    const library = new Library('Test Library');
    library.addBook('Test Title 1', 'Test Author 1', 100, 5000);
    library.addBook('Test Title 2', 'Test Author 2', 200, 8000);
    expect(library.totalWords()).toBe(13000);
  });
  
  it('Library totalWords with no books', () => {
    const library = new Library('Test Library');
    expect(library.totalWords()).toBe(0);
  });
});