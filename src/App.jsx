import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // UseEffect com fetch (requisições assíncronas)
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados); //Salva os dados vindo da API no estado
        setCarregando(false); // Desativa a mensagem carregando
      });
  }, []); // Array vazio para executar apenas UMA vez ao abrir a tela

  return (
    <>
      <div>
        <div>
          <h2>Tarefas vindas da API</h2>
          <p>Consumindo dados de JSONPlaceholder via fetch e useEffect</p>
          {carregando ? (
            <div>Carregando...</div>
          ) : (
            <ul>
              {tarefas.map((item) => (
                <li key={item.id}>{item.title}
                {item.completed ? 'Concluído' 
                : 'Pendente'}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )

}

export default App
