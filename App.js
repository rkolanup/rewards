
import './App.css';
import data from './data';
import RewardTable from './RewardTable'

function App() {
  return (
    <div className="App" >
      <h1>Rewards Table</h1>
      <RewardTable customers={data.customers} />
    </div>
  );
}

export default App;
