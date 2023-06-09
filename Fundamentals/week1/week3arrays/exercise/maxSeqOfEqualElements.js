function maxSeqOfEqualElements(arr) {

    let maxSequenceNum = 0;
    let maxSeqLength = 1;
    let seqLength = 1;
    let arrLength = arr.length;

    for( let i = 0; i < arrLength; i++) {
        let currNum = Number(arr[i]);
        let nextNum = Number(arr[i+1]);

        if(currNum === nextNum) {
            seqLength++;
            
            if(seqLength > maxSeqLength) {
                maxSequenceNum = currNum;
                maxSeqLength = seqLength;
            }
        } else {
            seqLength = 1;
        }
    }

    console.log((maxSequenceNum + " ").repeat(maxSeqLength));

}
maxSeqOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);