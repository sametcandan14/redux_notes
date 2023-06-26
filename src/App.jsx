import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-5">
      <h1>Redux</h1>
      <AddForm />
      <ListTodos />
    </div>
  );
}

export default App;
