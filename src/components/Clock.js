import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() });
        });
    }

    render() {
        this.t = new Date();
        const { locale } = this.props;
        const { date } = this.state;

        return (
            <h1 className="heading">
                <span className="text">{date.toLocaleTimeString(locale)}</span>
            </h1>
        );
    }
}
export default Clock;
