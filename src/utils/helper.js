const globalVariables = {};


function setGlobalVariable(name, value) {
  globalVariables[name] = value;
}

function getGlobalVariable(name) {
  return globalVariables[name];
}

module.exports = {
getGlobalVariable, setGlobalVariable
};
