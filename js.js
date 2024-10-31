document.getElementById('inputNum').addEventListener('submit', function(event) {
  event.preventDefault();

  const xMin = parseInt(document.getElementById('xMin').value);
  const xMax = parseInt(document.getElementById('xMax').value);
  const yMin = parseInt(document.getElementById('yMin').value);
  const yMax = parseInt(document.getElementById('yMax').value);

  if (!isValidNumber(xMin) || !isValidNumber(xMax) || !isValidNumber(yMin) || !isValidNumber(yMax)) {
      displayError("Please enter numbers between -50 and 50.");
      return;
  }

  if (xMin > xMax || yMin > yMax) {
      displayError("Row start must be less than or equal to row end, and column start must be less than or equal to column end.");
      return;
  }

  document.getElementById('output').innerHTML = '';

  generateMultiplicationTable(xMin, xMax, yMin, yMax);
});

function isValidNumber(num) {
  return Number.isInteger(num) && num >= -50 && num <= 50;
}

function displayError(message) {
  document.getElementById('output').innerHTML = `<p style="color: red;">${message}</p>`;
}

function generateMultiplicationTable(xMin, xMax, yMin, yMax) {
  let tableHTML = '<table>';
  tableHTML += '<tr><th></th>';

  for (let x = xMin; x <= xMax; x++) {
      tableHTML += `<th>${x}</th>`;
  }
  tableHTML += '</tr>';

  for (let y = yMin; y <= yMax; y++) {
      tableHTML += `<tr><th>${y}</th>`;
      for (let x = xMin; x <= xMax; x++) {
        const isEvenRow = (y - yMin) % 2 === 0;
        const isEvenCol = (x - xMin) % 2 === 0;
        const bgColor = (isEvenRow === isEvenCol) ? '#fff0ff' : '#000000';
        tableHTML += `<td style="background-color: ${bgColor}; border: 1px solid #ddd;">${x * y}</td>`;
      }
      tableHTML += '</tr>';
  }

  tableHTML += '</table>';
  document.getElementById('output').innerHTML += tableHTML;
}
