import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  // el componente usa el hook useContext para acceder al contexto de la aplicación
  // el contexto de la aplicación es el que provee información sobre los TODOs
  // el componente obtiene la cantidad total de todos y la cantidad de todos completados
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  const noTodos = totalTodos === 0;
  const allCompleted = totalTodos > 0 && totalTodos === completedTodos;

  return (
    // el componente recibe dos props: totalTodos y completedTodos
    // totalTodos es la cantidad totalTodos de todos
    // completedTodos es la cantidad de todos completados
    // el componente renderiza la cantidad de todos completados y la cantidad total de todos
    <h1 className="TodoCounter">
      {noTodos ? (
        <>📝 ¡Aún no tienes TODOs! Crea uno para comenzar.</>
      ) : allCompleted ? (
        <>🎉 ¡Felicidades! Has completado todos tus TODOs 🎉</>
      ) : (
        <>
          Has completado <span>{completedTodos}</span> de{' '}
          <span>{totalTodos}</span> TODOs
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
