function exctractFile(path) {
    let pathAsArr = path.split('\\');
    let lastDirectory = pathAsArr.pop();

    let indexOfLastComa = lastDirectory.lastIndexOf('.');

    let filename = lastDirectory.substring(0, indexOfLastComa);
    let extension = lastDirectory.substring(indexOfLastComa + 1);

    console.log(`File name: ${filename}`);
    console.log(`File extension: ${extension}`);

}
exctractFile('C:\\Internal\\training-internal\\Template.pptx')