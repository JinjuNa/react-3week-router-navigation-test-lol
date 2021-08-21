import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './Navigation';
import Champions from './pages/Champions';
import ChampionInfo from './pages/ChampionInfo';

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <h2>리그오브 레전드 sample 홈페이지 만들기</h2>
      <BrowserRouter>
        <Navigation />
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/champions" component={Champions} />
        <Route path="/champion_info/:id" component={ChampionInfo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
