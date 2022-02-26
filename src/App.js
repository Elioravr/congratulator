import {useState, useEffect} from 'react';

import logo from './logo.svg';
import data from './data.json'
import './App.scss';

let scrollY = 0;
function App() {
  const {congratulations, mainPicture, mainText} = data;
  const [page, setPage] = useState('app');
  const [selectedCongrats, setSelectedCongrats] = useState(null);

  const createHandleItemClick = (congrats) => {
    return () => {
      setPage('congrats-modal');
      setSelectedCongrats(congrats);
    }
  }

  return (
    <div className={`App ${page !== 'app' ? 'disabled' : ''}`}>
      <div className="header">אודי בן 55</div>
      <div className="main-picture-container">
        <div className="main-text">{mainText}</div>
        <div className="main-picture border-with-shadow" style={{backgroundImage: `url(${process.env.PUBLIC_URL + mainPicture})`}}></div>
      </div>
      <div className="list-container">
        {congratulations.map((item, index) => {
          return (
            <div key={index} onClick={createHandleItemClick(item)} className={`item-container border-with-shadow ${item.size ? `size-${item.size}` : ''}`} style={{backgroundImage: `url(${process.env.PUBLIC_URL + item.imageUrl})`, backgroundPosition: item.backgroundPosition}}>
              {item.writer}
            </div>
          );
        })}
      </div>

      <div className={`congrats-modal ${page === 'congrats-modal' ? 'visible' : ''}`}>
        <div className="close-button" onClick={() => setPage('app')}>x</div>
        {selectedCongrats && (
          <>
            <div className="hide-content-from-scroll"></div>
            <div className="writer-header border-with-shadow" style={{backgroundImage: `url(${process.env.PUBLIC_URL + selectedCongrats.imageUrl})`, backgroundPosition: selectedCongrats.backgroundPosition}}>
              {`בהמון אהבה, מ${selectedCongrats.writer}`}
            </div>
            <div className="content-container">
              {selectedCongrats.title && (
                <div className="title">
                  {selectedCongrats.title}
                </div>
              )}
              {selectedCongrats.content && (
                <div className="content">
                  {selectedCongrats.content.split('\n').map(part => <div className="line">{part}</div>)}
                </div>
              )}
            </div>
            {/* <div className="hide-content-from-scroll bottom"></div> */}
          </>)
        }
      </div>
    </div>
  );
}

export default App;
