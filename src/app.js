console.log('app is running')

// JSX - Javacsript XML
const app = {
	title: "Indecision App",
	subtitle: "The road back to silicon valley",
	options: []
}

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
	e.preventDefault();
	let option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
	}
	e.target.elements.option.value = '';
	renderApp();
};

const wipeArray = () => {
	app.options = [];
	renderApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
}

const renderApp = () => {
	const template = ( 
		<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{app.options.length > 0 ? 'here are your options' : "no options"}
		<button disabled={app.options.length === 0} onClick={onMakeDecision}>What I should I do?</button>
		<button onClick={wipeArray}>Remove All</button>
		<ul>
			{
				app.options.map((option) => {
					return <li key={option}>Option: {option}</li>
				})
			}
		</ul>
		<form onSubmit = {onFormSubmit}>
			<input type="text" name="option"/>
			<button>Add option</button>
		</form>
	</div>);

	ReactDOM.render(template, appRoot);
}

renderApp();
