import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cadastro = () => {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const salvas = localStorage.getItem('tarefas');

    if (salvas) {
      setTarefas(JSON.parse(salvas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionar = (e) => {
    e.preventDefault();

    if (!texto.trim()) return;

    setTarefas([...tarefas, { texto }]);
    setTexto('');
  };

  const remover = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="text-center mb-4">Gerenciador de Tarefas</h2>

        <form onSubmit={adicionar} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nova tarefa..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />

            <button className="btn btn-dark" type="submit">Adicionar</button></div>
        </form>

        {tarefas.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded p-3 mb-2 d-flex justify-content-between align-items-center"
          >
            <span>{item.texto}</span>

            <button
              onClick={() => remover(index)}
              className="btn btn-outline-danger btn-sm"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return <Cadastro />;
}

export default App;