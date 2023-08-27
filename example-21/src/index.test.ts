import moment from 'moment';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { sum, subtract, greet, convertDate,
         printName, printId, welcomePeople,
         printCoordinates, printBear } from './index';

describe('all tests', () => {
  // always set the system time to a fixed date
  // always works with momentjs
  beforeEach(() => {
    const date = '2023-08-27';
    const dateInMillis = moment(date).toDate().getTime();
    const dateObject = new Date(dateInMillis);

    vi.setSystemTime(dateObject);
  });

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

  describe('greet', () => {
    it('greets a person with a date', () => {
      expect(greet('John', new Date())).toBe('Hello, John, today is Sun Aug 27 2023!');
    });
  })

  describe('convertDate', () => {
    it('greets a person with a date', () => {
      expect(convertDate('2020-01-01')).toBe('Wed Jan 01 2020');
    });
  })

  describe('printName', () => {
    it('prints the name of a person', () => {
      expect(printName({ first: 'John', last: 'Doe' })).toBe('Hello, John Doe');
    });

    it('prints the name of a person without last name', () => {
      expect(printName({ first: 'John' })).toBe('Hello, John undefined');
    });
  })

  describe('printId', () => {
    it('prints the id of a person', () => {
      expect(printId(1)).toBe('1');
    });

    it('prints the id of a person as string', () => {
      expect(printId('1')).toBe('1');
    });
  })

  describe('welcomePeople', () => {
    it('welcomes people', () => {
      expect(welcomePeople(['John', 'Jane' ])).toBe('Welcome John, Jane');
    });

    it('welcomes person', () => {
      expect(welcomePeople('John')).toBe('Welcome John');
    });
  })

  describe('printCoordinates', () => {
    it('prints the coordinates of a point', () => {
      expect(printCoordinates({ x: 1, y: 2 })).toBe('(1, 2)');
    });
  })

  describe('printBear', () => {
    it('prints the complete phrase', () => {
      expect(printBear({ name: 'Yogi', honey: true })).toBe('The bear Yogi has honey');
    });

    it('prints with does not have', () => {
      expect(printBear({ name: 'Yogi', honey: false })).toBe('The bear Yogi does not have honey');
    });
  })
})
