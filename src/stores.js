import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: '1',
        name: 'John Doe',
        rating: 1,
        text: 'This is a comment',
    },
    {
        id: '2',
        name: 'Jane Doe',
        rating: 1,
        text: 'This is a comment also',
    },
    {
        id: '3',
        name: 'John Doer',
        rating: 3,
        text: 'This is a comment too',
    }
])