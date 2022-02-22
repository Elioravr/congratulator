import logo from './logo.svg';
import data from './data.json'
import './App.scss';

function App() {
  const {congratulations, mainPicture, mainText} = data;
  console.log('congratulations.length % 3', congratulations.length % 3);
  return (
    <div className="App">
      <div className="header">אודי בן 55</div>
      <div className="main-picture-container">
        <div className="main-text">{mainText}</div>
        <div className="main-picture" style={{backgroundImage: `url(${mainPicture})`}}></div>
      </div>
      <div className="list-container">
        {congratulations.map(item => {
          return (
            <div className={`item-container ${item.size ? `size-${item.size}` : ''}`} style={{backgroundImage: `url(${item.imageUrl})`}}>
              {item.writer}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
