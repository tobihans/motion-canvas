declare module '*.png' {
  const value: import('./components/Sprite').SpriteData;
  export = value;
}

declare module '*.glsl' {
  const value: string;
  export = value;
}

declare module '*.label' {
  const value: Record<string, number>;
  export = value;
}

declare module '*.anim' {
  const value: import('./components/Sprite').SpriteData[];
  export = value;
}

declare module '*.wav' {
  const value: string;
  export = value;
}

declare module '*.wav?meta' {
  const value: import('./types/Waveform').Waveform;
  export = value;
}

declare namespace JSX {
  type ElementClass = import('konva/lib/Node').Node;
  interface ElementChildrenAttribute {
    children: {};
  }
}
