type methodTypes = 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'DELETE'
export const services: any = {
    news: {}
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