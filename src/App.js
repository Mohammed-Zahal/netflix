import './App.css';
import Banner from './components/Banner/Banner';
import { originals, action, horror, romantic, comedy, Documentaries } from './urls'
import Navbar from './components/Navbar/Navbar';
import Rowpost from './Rowpost/Rowpost';

function App() {
  return (
    <div >
      <Navbar />
      <Banner />
      <Rowpost url={originals} title='NEFLIX ORIGINALS' />
      <Rowpost url={action} title='ACTION' isSmall />
      <Rowpost url={horror} title='HORROR' isSmall />
      <Rowpost url={romantic} title='ROMANTIC' isSmall />
      <Rowpost url={comedy} title='COMEDY' isSmall />
      <Rowpost url={Documentaries} title='DOCUMENTARIES' isSmall />



    </div>
  );
}

export default App;
