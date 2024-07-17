import React, { useState, useEffect } from 'react';

const ProdutoForms = ({ product, onSave, onCancel }) => {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
    dataDeCriacao: '',
  });

  useEffect(() => {
    if (product) {
      setProduto({
        id: product.id || '',
        nome: product.nome || '',
        descricao: product.descricao || '',
        preco: product.preco || '',
        dataDeCriacao: product.dataDeCriacao || '',
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevProduto) => ({ ...prevProduto, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(produto);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        value={produto.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="text"
        name="descricao"
        value={produto.descricao}
        onChange={handleChange}
        placeholder="Descrição"
      />
      <input
        type="number"
        name="preco"
        value={produto.preco}
        onChange={handleChange}
        placeholder="Preço"
      />
      <input
        type="date"
        name="dataDeCriacao"
        value={produto.dataDeCriacao}
        onChange={handleChange}
        placeholder="Data de Criação"
      />
      <button type="submit">Salvar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default ProdutoForms;
