const React = require('react');

class CropperApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { test } = this.props;
        return (
            <div>{test}</div>
        )
    }
}

CropperApp.propTypes = {
    test: React.PropTypes.string.isRequired
};

module.exports = CropperApp;