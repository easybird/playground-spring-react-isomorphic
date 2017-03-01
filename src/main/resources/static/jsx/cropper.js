const React = require('react');

class Cropper extends React.Component {

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

Cropper.propTypes = {
    test: React.PropTypes.string.isRequired
};

module.exports = Cropper;