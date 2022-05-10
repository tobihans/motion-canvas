import {LayoutShape, LayoutShapeConfig} from './LayoutShape';
import {KonvaNode} from '../decorators';
import {Context} from 'konva/lib/Context';

const FILL = [
  new Path2D(
    'M16.56,8.94L7.62,0L6.21,1.41l2.38,2.38L3.44,8.94c-0.59,0.59-0.59,1.54,0,2.12l5.5,5.5C9.23,16.85,9.62,17,10,17 s0.77-0.15,1.06-0.44l5.5-5.5C17.15,10.48,17.15,9.53,16.56,8.94z M5.21,10L10,5.21L14.79,10H5.21z M19,11.5c0,0-2,2.17-2,3.5 c0,1.1,0.9,2,2,2s2-0.9,2-2C21,13.67,19,11.5,19,11.5z M2',
  ),
];

const BRUSH = [
  new Path2D(
    'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z',
  ),
];

const UNITY = [
  new Path2D(
    'M 46.523438 17.292969 L 61.820313 26.125 C 62.375 26.429688 62.386719 27.296875 61.820313 27.605469 L 43.636719 38.101563 C 43.089844 38.417969 42.4375 38.394531 41.921875 38.101563 L 23.742188 27.605469 C 23.1875 27.300781 23.171875 26.429688 23.742188 26.121094 L 39.039063 17.292969 L 39.039063 0 L 0 22.539063 L 0 67.617188 L 0 67.410156 L 0 67.617188 L 14.972656 58.972656 L 14.972656 41.308594 C 14.964844 40.675781 15.707031 40.230469 16.257813 40.570313 L 34.4375 51.070313 C 34.988281 51.386719 35.292969 51.960938 35.292969 52.554688 L 35.292969 73.546875 C 35.308594 74.175781 34.566406 74.625 34.019531 74.289063 L 18.71875 65.457031 L 3.742188 74.101563 L 42.78125 96.640625 L 81.820313 74.101563 L 66.84375 65.457031 L 51.550781 74.289063 C 51.007813 74.613281 50.25 74.191406 50.269531 73.546875 L 50.269531 52.550781 C 50.269531 51.917969 50.613281 51.363281 51.125 51.066406 L 69.304688 40.570313 C 69.847656 40.242188 70.609375 40.664063 70.589844 41.3125 L 70.589844 58.972656 L 85.5625 67.617188 L 85.5625 22.539063 L 46.523438 0 L 46.523438 17.292969 ',
  ),
];

export enum IconType {
  Fill,
  Brush,
  Unity,
}

interface IconConfig extends LayoutShapeConfig {
  type?: IconType;
}

@KonvaNode()
export class Icon extends LayoutShape {
  private readonly paths: Path2D[];

  constructor(config?: IconConfig) {
    super(config);

    switch (config?.type ?? IconType.Fill) {
      case IconType.Brush:
        this.paths = BRUSH;
        break;
      case IconType.Fill:
        this.paths = FILL;
        break;
      case IconType.Unity:
        this.paths = UNITY;
        break;
    }

    this._fillFunc = context => {
      for (const path of this.paths) {
        context.fill(path);
      }
    };
  }

  _sceneFunc(context: Context) {
    context.fillShape(this);
  }
}
