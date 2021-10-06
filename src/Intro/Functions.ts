/**
 * Функции
 */

function log(): void {
    console.log('log function!')
}

log()

function addOne(a: number): number {
    return a + 1;
}

addOne(2) // 3

interface UserInterface {
    firstName: string,
    lastName: string
}

type FullUserName = string

function getUserFullName(user: UserInterface): string {
    return `${user.firstName} ${user.lastName}`
}

getUserFullName({
    firstName: 'Mahmoud',
    lastName: 'Elmahdi'
})


type PostId = string | number

type PostResponse = {
    id: number,
    title: string,
    body: string,
    images: string[]
}

function getPost(id: PostId): PostResponse {
    // fetch
    return {
        id: 1,
        title: 'Post #1',
        body: 'post body goes here...',
        images: ['1', '2', '3']
    }
}
