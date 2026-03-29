import { setupServer } from 'msw/node';
import { adminWebMswHandlers } from './handlers';

export const server = setupServer(...adminWebMswHandlers);
