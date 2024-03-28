export default class AudioQueue {
  queue: string[];
  currentAudio: HTMLAudioElement | null;
  
  constructor() {
     this.queue = [];
     this.currentAudio = null;
  }
 
  // Adiciona um arquivo de áudio à fila
  add(audioPath: string) {
     this.queue.push(audioPath);
  }
 
  // Inicia a reprodução da fila com um intervalo entre os arquivos
  play(delay = 0) {
     if (this.queue.length > 0) {
       this.currentAudio = new Audio(this.queue.shift());
       this.currentAudio.onended = () => {
         setTimeout(() => this.play(delay), delay);
       };
       this.currentAudio.play();
     }
  }
 }