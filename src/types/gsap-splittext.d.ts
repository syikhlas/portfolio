declare module 'gsap/SplitText' {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: any, vars?: any);
    revert(): void;
  }
}