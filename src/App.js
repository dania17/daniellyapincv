import logo from './logo.svg';
import './App.css';

import TodoList from "./Component/TodoList"
import Todo from "./Component/Todo"

function App() {
  return (
    <div className="App">
      
      <header>
      <h2>Lebenslauf</h2>
     
     
     </header>
     <Todo />
     <br></br>
     <h1>Persönliche Daten:</h1>
     <br></br>
     <br></br>
     <h3>Adresse: "Tempelhofer Straße 18, 30853 Langenhagen"</h3>
     <h3>Telefon: "01573 0809835"</h3>
     <h3>E-Mail: "danilyapin65@gmail.com"</h3>
     <h3>Geburtsdatum: "17.03.2003"</h3>
     <h3>Familienstand: "ledig"</h3>
     <h3>Staatsangehörigkeit: "portugiesisch"</h3>
     <br></br>
     <br></br>
     <TodoList />
     </div>
     
  );
}

export default App;
