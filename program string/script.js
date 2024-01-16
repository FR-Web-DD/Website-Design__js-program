function applyStringMethod() {

    const userInput = document.getElementById('userInput').value;
    const selectedMethod = document.getElementById('methodSelect').value;


    let result;
    switch (selectedMethod) {
      case 'toUpperCase':
        result = userInput.toUpperCase();
        break;
      case 'toLowerCase':
        result = userInput.toLowerCase();
        break;
      case 'repeat':
        result = userInput.repeat(3);
        break;
      case 'slice':
        result = userInput.slice(0, 5);
        break;
      case 'split':
        result = userInput.split(' ').join(' | ');
        break;
      case 'padStart':
        result = userInput.padStart(15, '*');
        break;
      case 'search':
        const searchTerm = prompt('Enter search term:');
        result = userInput.toLowerCase().search(searchTerm.toLowerCase());
        break;
      default:
        result = 'Invalid';
    }

    const resultContainer = document.getElementById('resultContainer');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `<strong>${selectedMethod}:</strong> ${result}`;
    resultContainer.innerHTML = '';
    resultContainer.appendChild(paragraph);
  }