import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ToDoContent from "./components/ToDoContent/ToDoContent";
import { TasksProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TasksProvider>
      <div className="app">
        <div className="content">
          <Header />
          <AddToDo />
          <ToDoContent />
        </div>
        <Footer />
      </div>
    </TasksProvider>
  );
}
export default App;
