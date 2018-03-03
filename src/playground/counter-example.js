let count = 0;

const addOne = () => {
	count++;
	showAppSoFar();
};

const minuOne = () => {
	count--;
	showAppSoFar();
};

const reset = () => {
	count = 0;
	showAppSoFar();
}


let appRoot = document.getElementById('app');

const showAppSoFar = () => {
	const temp_2 = (
		<div>
		<h1>count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minuOne}>-1</button>
		<button onClick={reset}>Reset</button>
		</div>
	);
	
	ReactDOM.render(temp_2, appRoot);
	
}

showAppSoFar();

