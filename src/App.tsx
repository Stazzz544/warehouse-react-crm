import {
	BrowserRouter as Router,
} from "react-router-dom";
import { start } from "repl";
import Header from './components/header/Header';
import Main from "./components/main/Main";
import './styles/App.scss';

function App() {


	
	return (
		<Router>
			<div className="app">
				<Header/>
				<Main/>
			</div>
		</Router>
	);
}

export default App;

