import React, { useState } from 'react';
import ProdutoForms from './ProdutoForms';

const Produto = ({ produto }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (atualizarProduto) => {
    fetch(`http://localhost:3000/produtos/${atualizarProduto.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(atualizarProduto),
    })
    .then(response => response.json())
    .then(() => {
      setIsEditing(false);
    
    })
    .catch(error => {
      console.error('Erro ao atualizar produto:', error);
    });
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/produtos/${produto.id}`, {
      method: 'DELETE',
    })
    .then(() => {
     
    })
    .catch(error => {
      console.error('Erro ao deletar produto:', error);
    });
  };

  if (isEditing) {
    return (
      <ProdutoForms
        product={produto}
        onSave={handleSave}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <p>{produto.preco}</p>
      <p>{produto.dataDeCriacao}</p>
      <button onClick={() => setIsEditing(true)}>Editar</button>
      <button onClick={handleDelete}>Deletar</button>
    </div>
  )
};

export default Produto
