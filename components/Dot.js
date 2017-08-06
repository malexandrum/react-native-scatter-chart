import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
}
    from 'react-native';

const propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    opacity: PropTypes.number,
    left: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
};

const defaultProps = {
    opacity: .3,
    color: 'red',
    size: 5
};

class Dot extends React.Component {
    render() {
        const { opacity, size, color, left, bottom } = this.props
        return (
            <View
                style={
                    {
                        opacity: opacity,
                        width: size,
                        height: size,
                        backgroundColor: color,
                        bottom: bottom - Math.round(size / 2),
                        left: left - Math.round(size / 2),
                        position: 'absolute',
                        borderRadius: size
                    }
                }
            />

        );
    }
}

Dot.propTypes = propTypes; Dot.defaultProps = defaultProps;
export default Dot;