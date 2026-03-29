import { setupWorker } from 'msw/browser';
import { storeConsumerWebMswHandlers } from './handlers';

export const worker = setupWorker(...storeConsumerWebMswHandlers);
