import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ToDoContent from "./components/ToDoContent/ToDoContent";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Header />
        <AddToDo />
        <ToDoContent />
      </div>
      <Footer />
    </div>
  );
}
export default App;
