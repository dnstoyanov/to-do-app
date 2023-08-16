import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TasksContent from "./components/TasksContent/TasksContent";
import { TasksProvider } from "./contexts/TaskContext";

function App() {
  return (
    <TasksProvider>
      <div className="app">
        <div className="content">
          <Header />
          <AddTask />
          <TasksContent />
        </div>
        <Footer />
      </div>
    </TasksProvider>
  );
}
export default App;
