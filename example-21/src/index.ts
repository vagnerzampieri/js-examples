import moment from 'moment'

export function sum(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b
}

export function greet(person: string, date: Date): string {
  return `Hello, ${person}, today is ${date.toDateString()}!`
}

// This funcitions depends the moment library because when I try to test it
// I get the following error:
// - Hello, John, today is Wed Jan 01 2020!
// + Hello, John, today is Tue Dec 31 2019!
// they convert the date to different timezones
export function convertDate(date: string): string {
  const dateInMillis = moment(date).toDate().getTime()
  const dateObject = new Date(dateInMillis)

  return dateObject.toDateString()
}

export function printName(obj: { first: string; last?: string }): string {
  const { first, last } = obj

  return `Hello, ${first} ${last}`
}

export function printId(id: number | string): string {
  if (typeof id === 'string') {
    return id
  } else {
    return id.toString()
  }
}

export function welcomePeople(people: string[] | string): string {
  if (Array.isArray(people)) {
    return `Welcome ${people.join(', ')}`
  } else {
    return `Welcome ${people}`
  }
}
