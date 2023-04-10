import icon from './images_jsx/icon-star.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="card">
        <div className="content">
        <div className="star">
        <img src={icon} alt="" />
        </div>
        <h2 className="title">How did we do?</h2>
        <p className="notice">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="rates">
          <div className="rate">1</div>
          <div className="rate">2</div>
          <div className="rate">3</div>
          <div className="rate">4</div>
          <div className="rate">5</div>
        </div>
          <button><input type="submit" value="SUBMIT" /></button>
        </div>
      </div>
    </>
  );
}

export default App;
