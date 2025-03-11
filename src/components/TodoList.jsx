import React from "react";

const TodoList = ({ tasks, onRemoveTask }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "30vh", padding: "20px" }}>
      <div className="container text-center">
        <div style={{ fontFamily: 'Chewy, serif' }}>
          {/* Le titre avec une largeur limitée et la bordure/ombre */}
          <h2
            className="fs-1 mb-4 text-white shadow"
            style={{
              display: "inline-block", // Faire en sorte que le titre ne prenne pas toute la largeur
              padding: "10px", // Ajouter du padding pour aérer un peu le titre
              borderRadius: "5px", // Bordure arrondie
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Ombre autour du titre
            }}
          >
            Tâches à effectuer
          </h2>
        </div>

        <div className="list-group" style={{ maxWidth: "100%", margin: "0 auto" }}>
          {tasks.map((task, index) => (
            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span className="fs-6">{task}</span>
              <button 
                type="button" 
                className="btn-close btn-sm"
                aria-label="Close"
                onClick={() => onRemoveTask(index)}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
