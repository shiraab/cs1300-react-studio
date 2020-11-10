import logo from './logo.svg';
import './App.css';

import Listicle from './Listicle.jsx';

function App() {
  const data = ['#aec494', '#9119ec', '#580677', '#08c8c7',
    '#aa5f6f', '#808807', '#f5239f', '#17a588', '#29bf30', '#576ecf', '#af78d5',
    '#681303'];

  return (
    <div className="App">
      <h1>Some snazzy colors</h1>
      <Listicle items={data}/>
    </div>
  )
}

export default App;
