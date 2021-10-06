/**
 * Функции
 */
function log() {
    console.log('log function!');
}
log();
function addOne(a) {
    return a + 1;
}
addOne(2); // 3
function getUserFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}
getUserFullName({
    firstName: 'Mahmoud',
    lastName: 'Elmahdi'
});
function getPost(id) {
    // fetch
    return {
        id: 1,
        title: 'Post #1',
        body: 'post body goes here...',
        images: ['1', '2', '3']
    };
}
