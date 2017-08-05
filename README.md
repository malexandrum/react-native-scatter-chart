# react-native-scatter-chart
Very simple scatter chart without native dependencies

<img src='react-native-scatter-chart-1.png' width=300 />

## Usage
Data format:
```javascript
const data = [
    {
        color: 'red',
        unit: '%',
        values: [
            [{ "x": 0, "y": 0 }, { "x": 1, "y": 0.5877852522924731 }, { "x": 2, "y": 0.9510565162951535 }, { "x": 3, "y": 0.9510565162951536 }, { "x": 4, "y": 0.5877852522924732 }, { "x": 5, "y": 1.2246467991473532e-16 }, { "x": 6, "y": -0.587785252292473 }, { "x": 7, "y": -0.9510565162951535 }, { "x": 8, "y": -0.9510565162951536 }, { "x": 9, "y": -0.5877852522924734 }, { "x": 10, "y": -2.4492935982947064e-16 }, { "x": 11, "y": 0.5877852522924729 }, { "x": 12, "y": 0.9510565162951535 }, { "x": 13, "y": 0.9510565162951536 }, { "x": 14, "y": 0.5877852522924734 }, { "x": 15, "y": 3.6739403974420594e-16 }, { "x": 16, "y": -0.5877852522924728 }, { "x": 17, "y": -0.9510565162951534 }, { "x": 18, "y": -0.9510565162951538 }, { "x": 19, "y": -0.5877852522924735 }]
        ]

    },
    {
        color: 'green',
        unit: '%',
        values: [
            [{ "x": 0, "y": 1 }, { "x": 1, "y": 0.8090169943749475 }, { "x": 2, "y": 0.30901699437494745 }, { "x": 3, "y": -0.30901699437494734 }, { "x": 4, "y": -0.8090169943749473 }, { "x": 5, "y": -1 }, { "x": 6, "y": -0.8090169943749475 }, { "x": 7, "y": -0.30901699437494756 }, { "x": 8, "y": 0.30901699437494723 }, { "x": 9, "y": 0.8090169943749473 }, { "x": 10, "y": 1 }, { "x": 11, "y": 0.8090169943749476 }, { "x": 12, "y": 0.30901699437494773 }, { "x": 13, "y": -0.3090169943749471 }, { "x": 14, "y": -0.8090169943749472 }, { "x": 15, "y": -1 }, { "x": 16, "y": -0.8090169943749477 }, { "x": 17, "y": -0.30901699437494784 }, { "x": 18, "y": 0.309016994374947 }, { "x": 19, "y": 0.8090169943749471 }]
        ]

    }
];
```

Inside render:
```javascript
<ScatterChart
    backgroundColor='#ffffff'
    data={chartData}
    minY={90}
    maxY={110}
    unitY='%'
    horizontalLinesAt={[80, 90, 100, 110, 120]}
    height={200}
/>
```

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
