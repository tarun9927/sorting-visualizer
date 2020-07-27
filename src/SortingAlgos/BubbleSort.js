export function getBubbleSortAnimations(array){
    const animations=[];
    if (array.length<=1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(auxiliaryArray, auxiliaryArray.length, animations);
    return [animations,auxiliaryArray];
}

function bubbleSortHelper(auxiliaryArray,
    n,
    animations)
    {
    for (let i=0; i<n-1; i++){
        for (let j=0; j<n-i-1; j++){
            animations.push([j,j+1,0]);
            animations.push([j,j+1,0]);
            if (auxiliaryArray[j]>auxiliaryArray[j+1]){
                animations.push([j+1,auxiliaryArray[j],-1]);
                animations.push([j,auxiliaryArray[j+1],-1]);
                [auxiliaryArray[j], auxiliaryArray[j+1]] = [auxiliaryArray[j+1], auxiliaryArray[j]];
            }
        }
    }
}