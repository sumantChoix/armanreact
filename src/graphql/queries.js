import {gql} from '@apollo/client';


export const GET_USERS_QUERY = gql `
query users ($pagination: Pagination) {
    users (pagination: $pagination) {
        id
        contact
        name
        email
        bio
        profile_image_url
        date_of_birth
        username
        private
        timestamp
    }
}
`
export const GET_INVITED_USERS = gql `
query invitations ($pagination: Pagination) {
    invitations (pagination: $pagination) {
        id
        email
        invition_source
        invition_from_user_id
        invition_from_user {
            id
            contact
            name
            email
            bio
            profile_image_url
            date_of_birth
            username
            private
            timestamp
        }
        timestamp
    }
}
`


export const GET_REPORTS_QUERY = gql `

    query reports ($pagination: Pagination) {
        reports (pagination: $pagination) {
            id
            type
            data {
                ... on UserReportData {
                    user {
                        id
                        contact
                        name
                        email
                        bio
                        profile_image_url
                        date_of_birth
                        username
                        private
                        timestamp
                    }
                    user_id
                }
                ... on PostReportData {
                    post {
                        ... on VoicePost {
                            id
                            title
                            tagged_peoples
                            timestamp
                            created_by
                            type
                            thumbnail_image_url
                            podcast_url
                            can_comment
                        }
                        ... on StoryPost {
                            story_id
                            id
                            title
                            tagged_peoples
                            timestamp
                            created_by
                            type
                            thumbnail_image_url
                            podcast_url
                            can_comment
                        }
                    }
                    post_id
                }
            }
            created_by
            created_by_user {
                id
                contact
                name
                email
                bio
                profile_image_url
                date_of_birth
                username
                private
                timestamp
            }
            timestamp
        }
    }

`






export const INVIE_USERS =gql `
mutation inviteUser ($invited_user_email: String!) {
    inviteUser (invited_user_email: $invited_user_email)
}
`

export const RESET_USER_PASSWORD =gql `
mutation resetUserPassword ($user_id: String!) {
    resetUserPassword (user_id: $user_id)
}
`