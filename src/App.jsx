import React, { useState, useEffect } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(false);

  // UseEffect com fetch (requisições assíncronas)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados); //Salva os dados vindo da API no estado
        setCarregando(false); // Desativa a mensagem carregando
      });
  }, []); // Array vazio para executar apenas UMA vez ao abrir a tela

   return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Lista de Tarefas</h2>

      {carregando ? (
        <p className="text-center">Carregando...</p>
      ) : (
        <div className="row">

          {tarefas.map((item) => (
            <div className="col-md-6 mb-3" key={item.id}>
              <div className="card shadow-sm">
                <div className="card-body">

                  <h5 className="card-title">{item.title}</h5>

                  {item.completed ? (
                    <span className="badge bg-success">Concluído</span>
                  ) : (
                    <span className="badge bg-warning text-dark">Pendente</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
