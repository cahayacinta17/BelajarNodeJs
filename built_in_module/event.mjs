import EventEmitter from 'events';

const emitter = new EventEmitter();

// event dasar
// membuat event
emitter.on('salam', () => {
  console.log("Halo Ripal");
});
// memanggil event
emitter.emit('salam');

// event dengan data
const MyEmitter = new EventEmitter()
MyEmitter.on('sapa',(nama) => {
    console.log(`hai ${nama}`)
})

MyEmitter.emit('sapa','ripal rusdiansyah');

// event dengan banyal listener



emitter.on('belajar', () => {
  console.log("Belajar Node.js");
});

emitter.on('belajar', () => {
  console.log("Belajar backend");
});

emitter.emit('belajar');