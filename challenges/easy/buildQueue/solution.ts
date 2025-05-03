
class MyQueue1 {
  private introStack: number[]
  private internalQueue: number[]

  constructor() {
      this.introStack = [];
      this.internalQueue = [];
  }

  push(x: number): void {
      this.introStack.push(x);
      this.fillQueue();
  }

  pop(): number {
      this.fillQueue();
      return this.internalQueue.pop() as number;
  }

  peek(): number {
      this.fillQueue();
      return this.internalQueue[this.internalQueue.length - 1];
  }

  empty(): boolean {
      this.fillQueue();
      return this.internalQueue.length ? false : true
  }

  fillQueue(): void {
      if (!this.internalQueue.length) {
          while (this.introStack.length) {
              this.internalQueue.push(this.introStack.pop() as number);
          }
      }
  }
}