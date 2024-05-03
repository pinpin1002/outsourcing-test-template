import "./assets/style/App.scss";
import "./assets/style/reset.scss";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Gift Guide</h1>

        <div className="button-area">
          <button>驚喜寶庫</button>
          <button>閃亮佳節</button>
          <button>旅遊之樂</button>
          <button>活力旅程</button>
        </div>

        <footer>
          <div className="link">
            <a href="#">首頁</a>
            <a href="#">個人化服務</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
