type methodTypes = 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'DELETE'
export const services: any = {
    news: {}
    , auth: {
        singIn: {
            endpoint: 'users/authenticate',
            method: 'POST',
        },
        singOn: {
            endpoint: 'users/authenticate',
            method: 'POST',
        }
    }
    , users: {
        list: {
            endpoint: 'users/',
            method: 'GET',
        }

    }
    , roles: {}
    , acls: {}
    , chats: {}
}