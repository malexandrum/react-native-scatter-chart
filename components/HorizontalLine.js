import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
}
    from 'react-native';

const propTypes = {
    bottom: PropTypes.number.isRequired,
    displayText: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.number,
    width: PropTypes.number.isRequired
};

const defaultProps = {
    color: 'gray',
    opacity: .7
};

class HorizontalLine extends React.Component {
    render() {
        const { color, opacity, bottom, displayText, width } = this.props;
        return (
            <View
                style={{
                    opacity: opacity,
                    backgroundColor: 'transparent',
                    width: width,
                    borderStyle: 'dashed',
                    borderColor: color,
                    borderWidth: .5,
                    height: 1,
                    bottom: bottom,
                    position: 'absolute'
                }}
            >
                <Text
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        fontSize: 8
                    }}
                >
                    {displayText}
                </Text>
            </View>

        );
    }
}

HorizontalLine.propTypes = propTypes;
HorizontalLine.defaultProps = defaultProps;
export default HorizontalLine;