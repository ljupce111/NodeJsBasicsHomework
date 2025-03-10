const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'homework.txt');

fs.writeFile(filePath, 'Homework 02 in Basic Node', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File created successfully.');
    }
});

const additionalText = '\nFINISHED';
fs.appendFile(filePath, additionalText, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Text appended successfully.');
    }
});


