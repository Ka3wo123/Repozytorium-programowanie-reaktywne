import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './components/counter'

const element = <h1>Mój nagłowek</h1>

ReactDOM.render(<React.StrictMode>
    <Counter/>
</React.StrictMode>,
    document.getElementById('root'));

reportWebVitals();
