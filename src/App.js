import logo from './logo.svg';
import './App.css';
import NavB from './components/Navbar/NavB';
import BodySec from './components/BodySec/BodySec';
import BodyBG from './components/BodyBG/BodyBG';
import BodySec2 from './components/BodySec/BodySec2';

function App() {
  return (
    <main>
      <NavB/>
      <BodyBG/>
      <BodySec/>
      <BodySec2/>
    </main>
  );
}

export default App;
