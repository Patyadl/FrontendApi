import React, { useState } from 'react';

const ProdutoForms = ({ produto, onSave, onCancel }) => {
  const [nome, setNome] = useState(produto?.nome || '');
  const [descricao, setDescricao] = useState(produto?.descricao || '');
  const [preco, setPreco] = useState(produto?.preco || '');
  const [dataDeCriacao, setDataDeCriacao] = useState(produto?.dataDeCriacao || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ id: produto?.id, nome, descricao, preco, dataDeCriacao })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        type="text"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de Criação"
        value={dataDeCriacao}
        onChange={(e) => setDataDeCriacao(e.target.value)}
      />
      <button type="submit">Salvar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  )
};

export default ProdutoForms;
