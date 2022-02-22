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
        <div className="main-picture border-with-shadow" style={{backgroundImage: `url(${mainPicture})`}}></div>
      </div>
      <div className="list-container">
        {congratulations.map((item, index) => {
          return (
            <div key={index} onClick={createHandleItemClick(item)} className={`item-container border-with-shadow ${item.size ? `size-${item.size}` : ''}`} style={{backgroundImage: `url(${item.imageUrl})`}}>
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
            <div className="writer-header border-with-shadow" style={{backgroundImage: `url(${selectedCongrats.imageUrl})`}}>
              {`בהמון אהבה, מ${selectedCongrats.writer}`}
            </div>
            {selectedCongrats.title && (
              <div className="title">
                {selectedCongrats.title}
              </div>
            )}
            {selectedCongrats.content && (
              <div className="content">
                {selectedCongrats.content}
              </div>
            )}
            {/* <div className="hide-content-from-scroll bottom"></div> */}
          </>)
        }
      </div>
    </div>
  );
}

export default App;
