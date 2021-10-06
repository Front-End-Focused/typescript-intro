/**
 * Тип
 */
type UserType = { 
    id: number, 
    name: string,
    role: string[],
    online: boolean 
}

const user: UserType = {
    id: 1,
    name: 'Mahmoud',
    role: ['Teacher'],
    online: true,
}

type CarType = {
    year: number,
    model: string,
    color: string,
    electric: boolean,
    engine: number | string,
    doors?: number,
}

const car: CarType = {
    year: 2021,
    model: 'Tesla X',
    color: 'White',
    electric: true,
    engine: 10,
    // doors: 4,
}

type YesType = boolean

const yes: YesType = true;