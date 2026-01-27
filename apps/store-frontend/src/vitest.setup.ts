import { PropertySymbol } from 'happy-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const browserWindow = (global.document as any)[PropertySymbol.window];

global.setTimeout = browserWindow.setTimeout;
global.clearTimeout = browserWindow.clearTimeout;
global.setInterval = browserWindow.setInterval;
global.clearInterval = browserWindow.clearInterval;
global.requestAnimationFrame = browserWindow.requestAnimationFrame;
global.cancelAnimationFrame = browserWindow.cancelAnimationFrame;
global.queueMicrotask = browserWindow.queueMicrotask;
