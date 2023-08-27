import { describe, it, expect } from 'vitest';
import { sum, subtract } from './index';

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
})

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(2, 1)).toBe(1);
  });
})
