import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<div className="counter">
					<Counter />
				</div>
			</div>
		</>
	);
}

export default App;
