function hospital(arr) {
    let period = Number(arr[0]);
    let doctorsCount = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let daysInARow = 0;

    let index = 1;

    for(let i = 1; i <= period; i++) {
        daysInARow++;

        if(daysInARow % 3 === 0 && treatedPatients < untreatedPatients) {
            doctorsCount++; 
        }
        
        let patiens = Number(arr[index]);
        if(doctorsCount >= patiens ) {
            treatedPatients += patiens;
        } else {
            treatedPatients += doctorsCount;
            untreatedPatients += Math.abs(doctorsCount - patiens);
        }

        index++;
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);

}
hospital(["4","7","27","9","1"])
