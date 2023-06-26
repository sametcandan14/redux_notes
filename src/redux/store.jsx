/* 
*store oluşturma:
* 1 redux kütüphaneseinden createStore ve combineReducers import edilir.
* 2 store içerisinde tutulacak veriler kategorize edilir ve herbiri için reducer oluşturulur.
* 3 oluşturulan reducerlar combineReducer() yardımıyla birleştirilir.
* 4 createstore metodu çağırılır ve argüman olarak verilir.
* 5 store export edilir.
*


*/

import todoReducer from "./todoReducer";
import categoryReducer from "./categoryReducer";

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  todoReducer,
  categoryReducer,
});

//store oluşturulur
const store = createStore(rootReducer);

//store proje tanıtmak için export edilir.
export default store;
