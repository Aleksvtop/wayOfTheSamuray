type MessageType = {
    id: number
    message: string

}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likeCounts: number

}

type ProfilePageType = {
    posts: Array<PostType>
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCounts: 5},
            {id: 2, message: 'My first post', likeCounts: 8},
            {id: 3, message: 'Yes', likeCounts: 16},
            {id: 4, message: 'Perfect', likeCounts: 20},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Aleksey'},
            {id: 2, name: 'Evgeniy'},
            {id: 3, name: 'Olga'},
            {id: 4, name: 'Dmitriy'},
            {id: 5, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Welcome'},
            {id: 4, message: 'My friend'},
            {id: 5, message: 'Perfect'},
        ]
    },
    sidebar: {}
}
export const addPost = (postText: string) => {
    debugger
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost)
}