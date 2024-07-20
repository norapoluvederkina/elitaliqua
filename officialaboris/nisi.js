function ifX(orient, xValue, yValue) {
    return orient === 'horizontal' ? xValue : yValue;
}

function fallback(key, axisConfig, axis, style) {
    // Hypothetical logic for determining fallback value
    return axisConfig[key] || style[key] || axis.defaultConfig[key];
}

// Example usage
const config = {
    axisX: { label: 'X Axis Label' },
    axisY: { label: 'Y Axis Label' }
};

const axis = {
    defaultConfig: { label: 'Default Axis Label' }
};

const style = {
    label: 'Styled Axis Label'
};

const orient = 'horizontal'; // or 'vertical'
const key = 'label';
const xy = {};

xy[key] = ifX(orient, fallback(key, config.axisX, axis, style), fallback(key, config.axisY, axis, style));

console.log(xy); // Output will depend on the orient value and fallback function logic
