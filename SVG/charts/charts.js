/**
 * @typedef {Object} ChartData
 * @property {string} xLabel
 * @property {string} yLabel
 * @property {number[]} xData
 * @property {number[]} yData
 */

/**
 * @typedef {Object} ChartOptions
 * @property {number} width
 * @property {number} height
 * @property {number} fontSize
 * @property {string} color
 * @property {string} hoverColor
 */

/**
 * Create an SVG chart element
 * 
 * @param {string} elementType 
 * @param {{[key: string]: any}} attributes 
 * @param {HTMLOrSVGElement} parentElement 
 * 
 * @returns {SVGElement}
 */
function createChartElement(elementType, attributes, parentElement = null) {
    let element = document.createElementNS('http://www.w3.org/2000/svg', elementType);

    for (const attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }

    if (parentElement) {
        parentElement.appendChild(element);
    }
    return element;
}

/**
 * Get chart Y lines
 * 
 * @param {number} maxValue 
 */
function getYLines(maxValue) {
    const basis = Math.pow(10, Math.floor(Math.log10(maxValue)));

    const lines = [basis];

    console.log(maxValue);
    for (let y = basis; y <= maxValue; y += basis) {
        lines.push(y);
    }

    console.log(lines);
    return lines;
}

/**
 * Create a line chart.
 * 
 * @param {HTMLElement} element - Wrapper element for chart
 * @param {ChartData} data - The chart data and labels
 * @param {ChartOptions} options - The chart options
 */
export function createLineChart(wrapper, data, options) {
    const { height, width, fontSize, color } = options;
    
    const svg = createChartElement("svg", {
        class: "chart",
        xmlns: "http://www.w3.org/2000/svg",
        width: width,
        height: height,
    }, wrapper)

    const dataCount = data.xData.length;
    const dataMinValue = data.xData.reduce((acc, cur) => Math.min(acc, cur), -Infinity);
    const dataMaxValue = data.yData.reduce((acc, cur) => Math.max(acc, cur), -Infinity);
    
    const contentHeight = height - fontSize * 2;
    const contentWidth = width - fontSize * 2;
    const contentPaddingX = fontSize * 2 + 1;
    const contentPaddingY = fontSize * 2 + 1;

    const barPadding = 20;
    const topPadding = fontSize * 2;
    const dataWidth = contentWidth - barPadding * 2;
    const dataHeight = contentHeight - topPadding;
    const dataPaddingX = contentPaddingX + barPadding;

    const xBorderLine = createChartElement("line", {
        x1: contentPaddingX,
        y1: contentHeight,
        x2: width,
        y2: contentHeight,
        stroke: "#000000",
        "stroke-Width": 10
    }, svg);

    const yBorderLine = createChartElement("line", {
        x1: contentPaddingX,
        y1: contentHeight,
        x2: contentPaddingX,
        y2: 0,
        stroke: "#000000",
        "stroke-Width": 10
    }, svg);

    const yLines = getYLines(dataMaxValue);

    for (const yLine in yLines) {
        const currentYCoord = contentHeight - (yLines[yLine] / dataMaxValue) * dataHeight;
        const nextYCoord = yLines[yLine + 1] ? contentHeight - (yLines[yLine] / dataMaxValue) * dataHeight : 0;

        const text = createChartElement("text", {
            class: "chart__value chart__value--x",
            x: 0,
            y: currentYCoord,
        }, svg);
        text.innerHTML = yLines[yLine];

        const line = createChartElement("line", {
            class: "chart__y-line",
            x1: contentPaddingX,
            y1: currentYCoord,
            x2: width,
            y2: currentYCoord,
            stroke: "#c0c0c0",
            "stroke-width": 1
        }, svg);
    }

    for (const index in data.xData) {
        const text = createChartElement("text", {
            class: "chart__value chart__value--x",
            x: dataPaddingX + (dataWidth / dataCount) * (index) + (dataWidth / dataCount) * 0.5,
            y: height,
            "text-anchor": "middle"
        }, svg);

        text.innerHTML = data.xData[index];

        const rect = createChartElement("rect", {
            class: "chart__bar",
            x: dataPaddingX + (dataWidth / dataCount) * index + barPadding,
            y: contentHeight - (data.yData[index] / dataMaxValue) * contentHeight,
            width: dataWidth / dataCount - barPadding * 2,
            height: (data.yData[index] / dataMaxValue) * (height - fontSize * 2) - 0.5,
            fill: color,
        }, svg);
    }
}