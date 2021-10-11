/**
 * Утилиты
 */

interface UserInterface {
    id: number | string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
}

// -------------

// Profile
const userProfile: UserInterface = {
    id: 1,
    email: 'email@email.com',
    firstName: 'Mahmoud',
    lastName: 'Elmahdi',
    displayName: 'elmahdim',
}

// -------------

// Pick (Выбирать)
type UserNavbarType = Pick<UserInterface, "displayName">

const userNavbar: UserNavbarType = {
    displayName: "user_name_123"
}

// -------

type UserSidebarType = Pick<UserInterface, "firstName" | "lastName">

const userSidebar: UserSidebarType = {
    firstName: 'Mahmoud',
    lastName: 'Elmahdi'
}

// -------------

// Omit (Пропускать)

type UserContactFormType = Omit<UserInterface, "displayName">

const userContactForm: UserContactFormType = {
    id: 1,
    email: 'email@email.com',
    firstName: 'Mahmoud',
    lastName: 'Elmahdi',
}

