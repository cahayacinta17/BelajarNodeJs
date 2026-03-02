/**
 * fs module digunakan untuk
 * -membaca file
 * -menulis file
 * -menghapus file
 * - membuat foder
 */
const fs = require('fs');

const data = fs.readFileSync('data.txt','utf-8');

console.log(data);