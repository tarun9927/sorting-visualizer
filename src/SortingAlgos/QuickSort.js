export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    QuickSortHelper(0, array.length - 1, auxiliaryArray, animations);
    return [animations,auxiliaryArray];
  }

function QuickSortHelper(
    startIdx,
    endIdx,
    auxiliaryArray,
    animations){
        if (startIdx<endIdx){
            let pivot=partition(startIdx,endIdx,auxiliaryArray,animations);
            //console.log(pivot)
            QuickSortHelper(startIdx,pivot-1,auxiliaryArray,animations);
            QuickSortHelper(pivot+1,endIdx,auxiliaryArray,animations);
        }
  }

function partition(
    startIdx,
    endIdx,
    auxiliaryArray,
    animations){
        let pivot=auxiliaryArray[endIdx];
        let low=startIdx-1;
        for (let i=startIdx; i<endIdx; i++){
            animations.push([endIdx,i,true,false]);
            animations.push([endIdx,i,true,true]);
            if (auxiliaryArray[i]<=pivot){
                low=low+1;
                let temp=auxiliaryArray[low];
                auxiliaryArray[low]=auxiliaryArray[i];
                auxiliaryArray[i]=temp;
                animations.push([low,auxiliaryArray[low],false])
                animations.push([i,auxiliaryArray[i],false])
            }
        }
        let temp=auxiliaryArray[low+1];
        auxiliaryArray[low+1]=auxiliaryArray[endIdx];
        auxiliaryArray[endIdx]=temp;
        animations.push([low+1,auxiliaryArray[low+1],false])
        animations.push([endIdx,auxiliaryArray[endIdx],false])
        return low+1;
    }

