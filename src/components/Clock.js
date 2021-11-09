import React from 'react';

class Clock extends React.Component {
    // use props and constructor if we need to use props
    /* constructor(props) {
        super(props);
        this.state = { date: new Date() };
    } */
    state = { date: new Date(), locale: 'bn-BD' }; // if use props the we need to use previous code

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    // eslint-disable-next-line class-methods-use-this
    handleClick = () => {
        // console.log('button was clicked');
        this.setState({ locale: 'en-US' });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        this.t = new Date();

        const { date, locale } = this.state;

        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type="submit" onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        );
    }
}
export default Clock;
