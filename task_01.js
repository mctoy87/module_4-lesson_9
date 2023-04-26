'use strict';

//задача: написать функцию, которая будет возвращать число равное количеству уникальных ip-адресов

import arrIP from './ipv4.js';
console.log(arrIP);

const uniqIP = (arr) => [...new Set(arr)].length; 

console.log(uniqIP (arrIP));