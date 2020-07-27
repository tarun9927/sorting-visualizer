export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    HeapSortHelper(auxiliaryArray,animations);
    return [animations,auxiliaryArray];
  }

function heapify(auxiliaryArray,n,i,animations){
    let largest = i;
    let l = (2*i)+1;
    let r = (2*i)+2;

    if (r<n){
        if (auxiliaryArray[largest]<auxiliaryArray[r]){
            animations.push([i,r,true,false]);
            animations.push([i,r,true,true]);
            largest=r;
        }
    }

    if (l<n){
        if (auxiliaryArray[largest]<auxiliaryArray[l]){
            animations.push([i,l,true,false]);
            animations.push([i,l,true,true]);
            largest=l;
        }
    }

    if (largest!==i){
        let temp=auxiliaryArray[i];
        auxiliaryArray[i]=auxiliaryArray[largest];
        auxiliaryArray[largest]=temp;
        animations.push([auxiliaryArray[i],i,false]);
        animations.push([auxiliaryArray[largest],largest,false]);
        heapify(auxiliaryArray,n,largest,animations);
    }

}

function HeapSortHelper(auxiliaryArray,animations){
    const n=auxiliaryArray.length;
    for (let i = Math.floor(n / 2)-1; i >= 0; i --){
        heapify(auxiliaryArray,n,i,animations);
    }

    for (let i= n-1; i>0; i--){
        animations.push([0,i,true,false]);
        animations.push([0,i,true,true]);
        let temp=auxiliaryArray[0];
        auxiliaryArray[0]=auxiliaryArray[i];
        auxiliaryArray[i]=temp;
        animations.push([auxiliaryArray[i],i,false]);
        animations.push([auxiliaryArray[0],0,false]);
    }
}
