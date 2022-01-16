
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
     <main>
       <p>
       <h1>Ich bin aktuell auf der Suche einen Praktikumsplatz</h1>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <h1>Persönliche Daten</h1>
     <br></br>
     <br></br>
     <h3>Adresse: "Tempelhofer Straße 18, 30853 Langenhagen"</h3>
     <br></br>
     <h3>Telefon: "01573 0809835"</h3>
     <br></br>
     <h3>E-Mail: "danilyapin65@gmail.com"</h3>
     <br></br>
     <h3>Geburtsdatum: "17.03.2003"</h3>
     <br></br>
     <h3>Familienstand: "ledig"</h3>
     <br></br>
     <h3>Staatsangehörigkeit: "portugiesisch"</h3>
     <br></br>
     <br></br>
     </p>
     </main>
     <TodoList />
     </div>
     
  );
}

export default App;
