import { useState } from "react";

const SubmitForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState(''); 

  const handleInputChange = (event) => {
    setNewTask(event.target.value); 
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);  
      setNewTask(''); 
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "30vh",
        padding: "0 15px",  
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4"> 
         
            <div className="mb-3">
              <input
                type="text"
                value={newTask}
                onChange={handleInputChange} 
                placeholder="Nouvelle tâche"
                className="form-control" 
              />
            </div>
            <button 
            style={{ backgroundColor: 'light-purple', color: 'white' }} className="btn btn w-100"
              onClick={handleAddTask}
              // className="btn btn-primary w-100"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;
