import React, { useState, useEffect } from 'react';
import Produto from './Produtos';
import LoadingSpinner from './LoadingSpinner';

const ProdutoLista = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/produtos')
      .then(response => response.json())
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Erro ao carregar produtos</p>;

  return (
    <div>
      {produtos.map(produto => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </div>
  )
};

export default ProdutoLista
