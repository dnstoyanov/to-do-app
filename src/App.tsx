import { ToastContainer } from "react-toastify";
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
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="colored"
          />
        </div>

        <Footer />
      </div>
    </TasksProvider>
  );
}
export default App;
