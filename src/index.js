import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
    render() {
        this.t = new Date();
        return (
            <h1 className="heading">
                <span>Hello {this.t.toLocaleTimeString()}</span>
            </h1>
        );
    }
}

ReactDom.render(<Clock />, document.getElementById('root'));
