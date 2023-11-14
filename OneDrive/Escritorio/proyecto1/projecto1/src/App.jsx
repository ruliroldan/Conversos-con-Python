import './component/NavBar'
import './component/ItemListContainer'
import './component/CartWidget'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Este es mi E-Commerce!" />
    </div>
  );
}

export default App
