/**
 * @jest-environment jsdom
 */

import Dom from './mock-html.js';
import ToDo from './constructor.js';
import LocalStorage from './mock-storage.js';

global.localStorage = new LocalStorage();

const toDo = new ToDo();

  describe('testing Add function', () => {
    test('adding toDo', () => {
      toDo.addToDo('add-one-toDo');
      expect(toDo.list.length).toBe(1);
    });

    test('testing description', () => {
      toDo.addToDo('do something');
      expect(toDo.list[1].description).toBe('do something');
    });

   test('adding toDo', () => {
    toDo.addToDo('add-one-more-toDo');
    expect(toDo.list.length).toBe(3);
  });
  });

  describe('testing remove function', () => {
    test('testing if one toDo is removed', () => {
    const index = 1;
     toDo.removeToDo(index);
      expect(toDo.list.length).toBe(2);
      });
   });

  describe('editing test', () => {
    const toDo = new ToDo();
    toDo.addToDo({
    description: 'add-one-toDo'
  });
    const newDescription = toDo.list[0];
    newDescription.description = 'change me';
    toDo.editToDo(newDescription);

  it('testing if new description is edited', () => {
    expect(toDo.list[0].description).toBe('change me');
  });
});

  describe('testing completed tasks', () => {
    const toDo= new ToDo();
    toDo.addToDo('completed');
    const checkingToDo = toDo.list[0];
    checkingToDo.completed = true;
    toDo.editToDo(checkingToDo);
  it('test is toDo is completed', () => {
    expect(toDo.list[0].completed).toBeTruthy();
  });
});

describe('testing clear all completed', () => {

const toDo = new ToDo();

const firstTask = toDo.list[0];
  firstTask.completed = true;
    toDo.editToDo(firstTask);

const secondTask = toDo.list[1];
   secondTask.completed = true;
   toDo.editToDo(secondTask);

  it('Checking if the list is empty', () => {

    toDo.clearCompleted();
    expect(toDo.list.length).toBe(0);
  });
});