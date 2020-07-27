function insertion_sort(array){
    for (let i=1; i<array.length; i++){
        let tobesorted=array[i];
        let j=i+1;
        while (j>=0 && array[j]>tobesorted){
            array[j+1]=array[j];
            j=j-1;
        }
        array[j+1]=tobesorted
    }
    return array;
}

function quick_sort(startIdx,endIdx,nums){
    if (startIdx<endIdx){
        let pivot=partition(startIdx,endIdx,nums);
        quick_sort(startIdx,pivot-1,nums);
        quick_sort(pivot+1,endIdx,nums);
    }
}

function partition(l,r,nums){
    let pivot=nums[r];
    let low=l-1;
    for (let i=l; i<r; i++){
        if (nums[i]<pivot){
            low=low+1;
            let temp=nums[low];
            nums[low]=nums[i];
            nums[i]=temp;
        }
    }
    let temp=nums[low+1];
    nums[low+1]=nums[r];
    nums[r]=temp;
    return low+1;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export function test_algos(){
    let counts=0;
    for (let j=0; j<1;j++){
        const array=[];
        for (let i=0 ; i<10;i++){
            array.push((randomIntFromInterval(5, 730)));
        }   
        //const array2=array.slice().sort();
        quick_sort(0,9,array);
        console.log(array);
        //console.log(array2);
        //if (array!==array2){
        //    counts=counts+1;
        //}
    }
    console.log(counts);
return counts;
}