const path = require('path');
const fs = require('fs');

// Values.
const directoryPath = path.join(__dirname, '../../../components/');
const destinationFile = 'component-audit.csv';

// Defaults.
let csvContent = '';
const scriptNames = [];
const totalData = [];
const fileToCheck = 'test-config.js';

// Read components directory.
fs.readdir(directoryPath, (err, directories) => {
  // Catch error.
  if (err) {
    csvContent = `Unable to scan directory: ${err}`;
  }

  const getTestConfig = (directory) => {
    let fileExists = '';
    if (fs.existsSync(`components/${directory}/${fileToCheck}`)) {
      fileExists = 'x';
    }
    return fileExists;
  };

  // Collect the data we need from package.json into arrays.
  directories.forEach((directory) => {
    try {
      // eslint-disable-next-line
      const scriptData = require(`../../../components/${directory}/package.json`);

      const testConfig = getTestConfig(directory);

      // Create an array of the relevant data.
      const thisData = {
        component: directory,
        scripts: scriptData.scripts,
        testConfig,
      };
      totalData.push(thisData);

      // Gather all possible script names.
      scriptNames.push(...Object.keys(scriptData.scripts));
    } catch (e) {
      // There is no package.json and/or scripts.
      // Do nothing.
    }
  });

  // Get all possible column names.
  const dataColumns = Array.from(new Set(scriptNames));

  csvContent += `component name, ${dataColumns.join(',')} ', ${fileToCheck}\n`;
  // Create CSV content.
  totalData.forEach((dataSet) => {
    csvContent += `${dataSet.component}, `;
    dataColumns.forEach((name) => {
      csvContent += dataSet.scripts[name] ? `${dataSet.scripts[name]}, ` : `, `;
    });

    csvContent += `${dataSet.testConfig}\n`;

    return csvContent;
  });

  // WriteFile function.
  const writeFile = (code) => {
    fs.writeFile(destinationFile, code, (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log(`Creating file ${destinationFile}.`);
    });
  };

  // Write the CSV file.
  writeFile(csvContent);
});
