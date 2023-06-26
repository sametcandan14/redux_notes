/*
reducer ilk aşamada store un nasıl değişeceğine karar verir.
reducer bir fonksiyondur
2 adet parametre alır
a- state: reducerda tutulan verilerin son durumu
b- action: reducerda storun nasıl etkilenmesi gerektiğini söyleyen type ve payload 
değerlerine sahip obje.
reducer oluşturma adımları
1- state in uygulama başladığı ilk anda sahip olacağı değerler tanımlanır.
bu başlangıç değerine initial state denir.
initialState değeri state'e aktarılır => state=initialState

2- actionu parametre olarak alıyoruz.
action tip değeri analiz edilir.
action' ın tip değerine göre storun nasıl etkilemesi gerektiğini tanımlıyoruz.

3 reducer ı store a tanıtmak için export edilir.

*/

const initialState = {
  todos: [],
  sayi: 0,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    //ekleme aksiyonu dispatch edildiği anda çalışır.
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        sayi: state.sayi + 1,
      };
    case "DELETE_TODO":
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
        sayi: state.sayi - 1,
      };

    case "UPDATE_TODO":
      const cloneTodos = state.todos;
      const i = cloneTodos.findIndex((item) => item.id === action.payload.id);
      cloneTodos[i] = action.payload;
      return { ...state, todos: cloneTodos };
    default:
      return state;
  }
};

export default todoReducer;
