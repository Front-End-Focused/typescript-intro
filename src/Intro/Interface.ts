/**
 * Интерфейсы
 */
interface KeyboardInterface {
    // a: number,
    // b: number,
    // c: number
    [key: string]: number,
}

const keyboard: KeyboardInterface = {
    a: 1,
    b: 2,
    c: 3,
    e: 1,
    h: 2,
    l: 3,
}

interface UserInterface {
    readonly id: number,
    name: string,
    role: Array<string>,
    online: boolean,
}

const user: UserInterface = {
    id: 1,
    name: 'Mahmoud',
    role: ['Teacher'],
    online: true,
}

// user.id = 350


export {}