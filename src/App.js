import './App.css';
import Kosar from './components/Kosar';
import Termekek from './components/Termekek';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fakestore webshop</h1>
      </header>
      <main className='row'>
        <aside className="col-lg-3">
          <h3>Kosar:</h3>
          <Kosar />
        </aside>
        <article className="col-lg-9">
          <h3>Termekek:</h3>
          <Termekek />
        </article>
      </main>
    </div>
  );
}

export default App;
