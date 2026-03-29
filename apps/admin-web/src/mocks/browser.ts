import { setupWorker } from 'msw/browser';
import { adminWebMswHandlers } from './handlers';

export const worker = setupWorker(...adminWebMswHandlers);
