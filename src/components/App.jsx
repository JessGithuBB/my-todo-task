import { useState } from "react";
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';
import Header from './Header'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [tasks, setTasks] = useState([]); 

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        position: "relative", // Cela permet de superposer des éléments enfants
        minHeight: "100vh", 
        backgroundImage: "url('/rhema-kallianpur-fIF0Hdikywc-unsplash.jpg')", // L'image en arrière-plan
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Calque semi-transparent pour l'image */}
      <div
        style={{
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          backgroundColor: "rgba(186, 32, 32, 0.12)", // Couleur semi-transparente noire avec 50% d'opacité
          zIndex: -1, // Pour s'assurer que le calque reste sous les autres composants
        }}
      ></div>

      {/* Ajoutez le Header ici */}
      <Header />

      {/* Le reste de votre contenu */}
      <div className="container mt-5">
        <TodoList tasks={tasks} onRemoveTask={handleRemoveTask} />
        <SubmitForm onAddTask={handleAddTask} />
      </div>
    </div>
  );
};

export default App;
