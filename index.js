var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`); 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var personBeingServed = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${personBeingServed}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) return 'The line is currently empty.';
  var announcement = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length; i++) {
    announcement += (katzDeliLine[i] + ', ');
  }
  return announcement;
}
