import Bulbasaur from '../001Bulbasaur.png';
import Charmander from '../004Charmander.png';
import Squirtle from '../007Squirtle.png';

const initState = {
    posts: [
        {id: '1', title: 'Squirtle', img: Charmander, body: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'},
        {id: '2', title: 'Charmander', img: Squirtle, body: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.'},
        {id: '3', title: 'Bulbasaur', img: Bulbasaur, body: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.'}
    ]
}

const rootReducer = (state=initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => action.id !== post.id)
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer