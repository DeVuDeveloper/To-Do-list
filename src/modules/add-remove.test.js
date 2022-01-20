/**
 * @jest-environment jsdom
 */

import Dom from './mock-html.js';
import ToDo from './constructor.js';
import LocalStorage from './mock-storage.js';
import renderList from './render'
global.localStorage = new LocalStorage();

const toDo = new ToDo();

describe('testing Add function', () => {
    test('adding toDo', () => {
      toDo.addToDo('add one toDo');
      expect(toDo.list.length).toBe(1);
    });
  
    test('testing description', () => {
      toDo.addToDo({ description: 'do something' });
      expect(toDo.list[1].description).toBe('do something');
   });
  });

describe('testing remove function', () => {
  test('testing if one toDo is removed', () => {
    toDo.removeToDo();
    expect(toDo.list.length).toBe(0);
    });
 });