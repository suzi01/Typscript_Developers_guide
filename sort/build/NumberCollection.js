"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const sorter_1 = require("./sorter");
class NumbersCollection extends sorter_1.Sorter {
    // data:number[];
    // constructor(data: number[]){
    //     this.data = data
    // }
    constructor(data) {
        super();
        this.data = data;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
