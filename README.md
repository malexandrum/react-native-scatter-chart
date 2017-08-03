# react-native-scatter-chart
Simple scatter chart without native dependencies

## Why this module?
Wanted to display a simple scatter chart in my React Native app and existing modules depended on multiple modules and always needed native components.

## How does it work?
This component draws the chart using only `<View />` and `<Text />` react native components.

## Accepted props
```javascript
const propTypes = {
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
    }))), // takes array of series of data (array of arrays of {x, y})
    chartWidth: PropTypes.number, // by default uses entire width of the device
    chartHeight: PropTypes.number, // by default 200 scaled px
    backgroundColor: PropTypes.string, // 'white' by default
    colors: PropTypes.arrayOf(PropTypes.string), // specify the colors for each series of data
    minY: PropTypes.number,
    maxY: PropTypes.number,
    minX: PropTypes.number,
    maxX: PropTypes.number,
    unitX: PropTypes.string,
    unitY: PropTypes.string,
    horizontalLinesAt: PropTypes.arrayOf(PropTypes.number),
    verticalLinesAt: PropTypes.arrayOf(PropTypes.number),
}
const defaultProps = {
    chartHeight: 200,
    chartWidth: Dimensions.get('window').width,
    backgroundColor: 'white'
}
```
