import ToDo from './constructor.js';
import LocalStorage from './mock-storage.js';
// document.body.innerHTML = `

// <section class="main container">
// <ul class="first">
//   <li>
//     <span class="left">Today's To Do</span>
//     <button class="right refresh" ><i class="white fas fa-sync-alt"></i></button>
//   </li>
// </ul>
// <form onSubmit="return false">
//   <input id="input" type="text" placeholder="Add to your list...">
//   <button class="add" type="submit">
//         <i class="far fa-share-square fa-rotate-180"></i>
//       </button>
// </form>
// <div id='drag' class="tasks"></div>
// <button class='grey clear-all'>Clear all Completed</button>
// </section>
  
// `;

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

//    describe('testing remove function', () => {
//      it('testing if one toDo is removed', () => {
//        toDo.removeToDo(1);
//        expect(toDo.list.length).toBe(1);
//      });
//    });