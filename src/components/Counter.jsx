import { useState } from "react";
import less from "../assets/less.svg";
import more from "../assets/more.svg";

const Counter = () => {
	const [count, setCount] = useState(0);
	const increment = () => {
		if (count < 10) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	const resetCount = () => {
		setCount(0); // Réinitialise count à 0
	};

	const isIncrementDisabled = count === 10;
	const isDecrementDisabled = count === 0;

	return (
		<>
			<div>
				<img
					src={less}
					alt="Decrement"
					onClick={decrement}
					className={isDecrementDisabled ? "disabled" : ""}
				/>

				<p>{count}</p>

				<img
					src={more}
					alt="Increment"
					onClick={increment}
					className={isIncrementDisabled ? "disabled" : ""}
				/>
			</div>
			<div className="reset-count">
				<button onClick={resetCount}>Reset</button>
			</div>
		</>
	);
};

export default Counter;
