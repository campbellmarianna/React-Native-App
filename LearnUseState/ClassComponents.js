class Message extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
					message: ''
			};
	}


	componentDidMount() {
			/*...*/
	}

	render() {
		// What does div tell the interpretor?
		// The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.
			return <div>{this.state.message}</div>
	}

}