const { fetchData } = require('./http')

const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

const printTitle = () => {
  loadTitle().then(title =>
    console.log(title)
  )
}

const loadTitle = () => {
  return fetchData().then( extractedData => {
    const title = extractedData.title
    const transformedTitle = title.toUpperCase()
    return transformedTitle
  })
}

exports.checkAndGenerate = (name, age) => {
  if (
    !validateInput(name, true, false) ||
    !validateInput(age, false, true)
  ) {
    return false;
  }
  return generateText(name,age)
}

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

exports.generateText = generateText
exports.validateInput = validateInput
exports.printTitle = printTitle
exports.loadTitle = loadTitle