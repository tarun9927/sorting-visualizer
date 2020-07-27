export function getInsertionSortAnimations(array){
    const animations=[];
    if (array.length<=1) return array;
    const auxiliaryArray = array.slice();
    insertionSortHelper(auxiliaryArray, auxiliaryArray.length, animations);
    return [animations,auxiliaryArray];
}

function insertionSortHelper(
    auxiliaryArray,
    n,
    animations)
    {
        for (let i=1;i<n;i++){
            const tobesorted=auxiliaryArray[i];
            let j=i-1;
            while (j>=0 && auxiliaryArray[j]>tobesorted){
                animations.push([i,j,true,false]);
                animations.push([i,j,true,true]);
                auxiliaryArray[j+1]=auxiliaryArray[j];
                animations.push([j+1,auxiliaryArray[j+1],false])
                j=j-1;
            }
            auxiliaryArray[j+1]=tobesorted;
            animations.push([j+1,tobesorted,false])
        }
}