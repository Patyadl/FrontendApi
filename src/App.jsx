import React, { useState } from 'react';
import ProdutoLista from './components/ProdutoLista';
import ProdutoForms from './components/ProdutoForms';


const App = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddProduct = (produto) => {
    fetch('http://localhost:3000/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    })
    .then(response => response.json())
    .then(() => {
      setIsAdding(false);
      // Refresh the product list or add the new product to the state
    })
    .catch(error => {
      console.error('Erro ao adicionar produto:', error);
    });
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ProdutoLista />
      {isAdding ? (
        <ProdutoForms onSave={handleAddProduct} onCancel={() => setIsAdding(false)} />
      ) : (
        <button onClick={() => setIsAdding(true)}>Adicionar Produto</button>
      )}
    </div>
  )
}

export default App
