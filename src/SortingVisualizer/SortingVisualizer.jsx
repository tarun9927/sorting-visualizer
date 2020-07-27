import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgos/MergeSort.js';
import { getBubbleSortAnimations } from '../SortingAlgos/BubbleSort.js';
import {getInsertionSortAnimations} from '../SortingAlgos/InsertionSort.js';
import {getQuickSortAnimations} from '../SortingAlgos/QuickSort.js';
import {getHeapSortAnimations} from '../SortingAlgos/HeapSort.js';
import './SortingVisualizer.css';

let ANIMATION_SPEED_MS = 130;
let NUMBER_OF_ARRAY_BARS = 10;
let width = '83.5px';
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
let isactive=false;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      isRunning:false,
    };
  }

  componentDidMount() {
    document.title = "Sorting Visualizer"
    this.resetArray();
  }

  resetArray() {
    if (isactive===false){
      const array = [];
      for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
        array.push(randomIntFromInterval(5, 550 ));
      }
      this.setState({array});
  }
}

  change_val(){
    if (isactive===false){
      var input = document.getElementById("typeinp");
      NUMBER_OF_ARRAY_BARS = input.value;
      ANIMATION_SPEED_MS = 1300/NUMBER_OF_ARRAY_BARS;
      width=835/NUMBER_OF_ARRAY_BARS;
      this.resetArray();
    }
  }

  mergeSort() {
    if (isactive===false){
    isactive=true;
    const temp= getMergeSortAnimations(this.state.array);
    const animations=temp[0];
    const array=temp[1];
    const n=animations.length-1;
    //console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      //console.log(i);
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (i===n){
            isactive=false;
            //console.log(isactive);
          }
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i===n){
            isactive=false;
            //console.log(isactive);
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
    this.state.array=array;
    //this.setState({array});
  }
  }

  quickSort() {
    if (!isactive){
    isactive=true;
    const temp = getQuickSortAnimations(this.state.array);
    const animations=temp[0];
    const arr=temp[1];
    const n=animations.length-1;
    //this.setState({newarray:arr});
    //console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      //const isColorChange = i % 3 !== 2;
      const isColorChange=animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        let color=SECONDARY_COLOR;
        if (animations[i][3]){
          color=PRIMARY_COLOR;
        }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (i===n){
            isactive=false;
          }
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i===n){
            isactive=false;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
    this.state.array=arr;
  }
}

  heapSort() {
    const temp = getHeapSortAnimations(this.state.array);
    const animations=temp[0];
    const arr=temp[1];
    //console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      //const isColorChange = i % 3 !== 2;
      const isColorChange=animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        let color=SECONDARY_COLOR;
        if (animations[i][3]){
          color=PRIMARY_COLOR;
        }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [newHeight,barOneIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    this.state.array=arr;
  }

  insertionSort(){
    if (!isactive){
    isactive=true;
    const temp= getInsertionSortAnimations(this.state.array);
    const animations = temp[0];
    const arr=temp[1];
    const n=animations.length-1;
    //console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      //console.log(i)
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2];
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        //const color = i % 4 === 0 || i % 4 === 3? SECONDARY_COLOR : PRIMARY_COLOR;
        let color=SECONDARY_COLOR;
        if (animations[i][3]){
          color=PRIMARY_COLOR;
        }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (i===n){
            isactive=false;
          }
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i===n){
            isactive=false;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
    this.state.array=arr;
  }
}

  bubbleSort() {
    if (!isactive){
      isactive=true;
    const temp = getBubbleSortAnimations(this.state.array);
    const animations=temp[0];
    const arr=temp[1];
    const n=animations.length-1;
    //console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      //console.log(i)
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][2]===0;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          if (i===n){
            isactive=false;
          }
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i===n){
            isactive=false;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
    this.state.array=arr;
  }
}

  
  render() {
    const {array} = this.state;
    return (
      <body>
      <img src={require('./logo.png')} />
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: width,
            }}></div>
        ))}
      </div>
      <div class="footer">
        <text class="label" >Change Array Size:</text>
        <input class="slider" id="typeinp" type="range" min="10" max="210" defaultValue="10" step="2" 
          onInput={this.change_val.bind(this)}/>
        <button onClick={() => this.resetArray()}>New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        </div>
      </body>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}