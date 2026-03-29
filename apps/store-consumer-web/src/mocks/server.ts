import { setupServer } from 'msw/node';
import { storeConsumerWebMswHandlers } from './handlers';

export const server = setupServer(...storeConsumerWebMswHandlers);
