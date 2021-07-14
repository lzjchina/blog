import logo from './logo.svg';
import './App.css';
import Test1 from "./Test1";

function App() {
    const testClick = (name: string) => {
        console.log(name)
    }
    return (
        <div className="App">
            <Test1 testClick={testClick}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
