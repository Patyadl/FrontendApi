import React, { useState } from 'react';
import ProdutoForms from './ProdutoForms';
import LoadingSpinner from './LoadingSpinner';

const Produto = ({ produto }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const handleSave = (atualizarProduto) => {
    setIsLoading(true);

    fetch(`https://minhaapirestful.onrender.com/produtos/${atualizarProduto.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(atualizarProduto),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao atualizar produto')
        }
        return response.json()
      })
      .then(() => {
        setIsEditing(false);
        window.location.reload()
      })
      .catch(error => {
        console.error('Erro ao atualizar produto:', error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  };


  const handleDelete = () => {
    fetch(`http://localhost:3000/produtos/${produto.id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao deletar produto')
      }
      return response.json();
    })
    .then(() => {
      window.location.reload(); 
      console.error('Erro ao deletar produto:', error)
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
    <div className="Produtos-content">
      {isLoading && <LoadingSpinner />} 
      {isEditing ? (
        <ProdutoForms
          product={produto}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="Produtos">
          <h2>{produto.nome}</h2>
          <p>{produto.descricao}</p>
          <p>{produto.preco}</p>
          <p>{produto.dataDeCriacao}</p>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete}>Deletar</button>
        </div>
      )}
    </div>
  );
};

export default Produto;
