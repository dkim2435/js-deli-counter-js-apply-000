// function takeANumber (line, name) {
//   line.push(name);
//   return `Welcome, ${name}. You are number ${line.length} in line.`;
// }
function takeANumber (line) {
  
}


function nowServing(line) {
  if (!line.length) {
    return 'There is nobody waiting to be served!';
  }
  return `Now serving ${line.shift()}`;
}

function currentLine(line) {
  const arr = [];
  if (!line.length) {
    return 'The line is currently empty';
  }
  for (let i = 0;i < line.length; i++) {
    arr.push('${i + 1}.${line[i]}');
  }
  return 'The line is currently: ${arr.join(', ')}';
}