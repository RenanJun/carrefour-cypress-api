const path = require('path');
const {mergeFiles} = require('junit-report-merger');
const inputPattern = ['results/report-*.xml'];
const outputFile = path.join(__dirname, 'results', 'combined-report.xml');

await mergeFiles(outputFile, inputPattern)
console.log('successfully merged');