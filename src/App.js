import './App.css';
import NavB from './components/Navbar/NavB';
import BodySec from './components/BodySec/BodySec';
import BodyBG from './components/BodyBG/BodyBG';
import BodySec2 from './components/BodySec/BodySec2';
import BodySec3 from './components/BodySec/BodySec3';
import BodySec4 from './components/BodySec/BodySec4';

function App() {
  return (
    <main>
      <NavB/>
      <BodyBG/>
      <BodySec/>
      <BodySec2/>
      <BodySec3/>
      <BodySec4/>
    </main>
  );
}

export default App;
