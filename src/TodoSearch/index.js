import React, { useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch({}) {
  // estamos recibiendo el estado y el actualizador del estado
  const { searchValue, setSearchValue } = React.useContext(TodoContext); // de esta manera se puede acceder al contexto

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue} // que valor tiene el input de busqueda
      onChange={event => {
        setSearchValue(event.target.value);
      }} // de esta manera se puede cambiar el valor del input de busqueda
    />
  );
}

export { TodoSearch };
