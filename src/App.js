import './App.css';
import Artists from './Artists';
import albums from './data';
import Cover from './Cover';
import cover from './data1';

function App() {
  return (
    <div>
      {cover.map((cov) => (
        <Cover coverImg={cov.coverImg} track1={cov.track1} track2={cov.track2} track3={cov.track3} track4={cov.track4} />
      ))}
      {albums.map((album) => (
        <Artists name={album.name} coverImg={album.coverImg} track1={album.track1} track2={album.track2} track3={album.track3} track4={album.track4} />
      ))}
    </div>
  );
}

export default App;
