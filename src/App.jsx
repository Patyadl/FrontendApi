import React, { useState } from 'react';
import ProdutoForms from './components/ProdutoForms';
import ProdutoLista from './components/ProdutoLista';
import './App.css';


const App = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddProduct = (product) => {
    fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(response => response.json())
    .then(() => {
      setIsAdding(false);
     
    })
    .catch(error => {
      console.error('Erro ao adicionar produto:', error);
    });
  };

  return (
    <div className="App">
      <div className={"titulo"}>
      <h1>Lista de Produtos</h1>
      </div>
      <ProdutoLista />
      {isAdding ? (
        <ProdutoForms onSave={handleAddProduct} onCancel={() => setIsAdding(false)} />
      ) : (
        <div className={"btAdd"}> 
        <button id={"btAdd"} onClick={() => setIsAdding(true)}>Adicionar Produto</button>
        </div>
      )}
    </div>
  );
};

export default App;
