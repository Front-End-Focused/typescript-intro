interface Input{
    id: number,
    title: string,
    active: boolean,
    options?: [string, number, boolean],
    author: string,
}

type DataResponse = {
    id: number, 
    title: string, 
    active: boolean,
    options?: [string, number, boolean]
}

function data({id, author, title, active, options}: Input): DataResponse {
    return {
        id,
        title: `${title} - ${author}`,
        active,
        options
    }
}

data({
    id: 2,
    title: 'Title 2',
    active: false,
    // options: ['1', 100, false]
    author: 'Me'
})

// Title 2
// Title 2 - Author