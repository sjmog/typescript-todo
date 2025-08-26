// Global test setup can go here
// For example, you might want to configure mock implementations,
// set up global test utilities, or configure test environment variables

import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { useTodoStore } from '@/store';

afterEach(() => {
  cleanup();
  useTodoStore.setState({ todos: [] });
})