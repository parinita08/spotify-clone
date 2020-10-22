export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing..
    token: "BQBVoGjgPUJK5HtbIxflACZh-Z486FzUeSqCjUMPR24NokeNTF4GEVXneX5Yau5viejOZbcNDtSjQ15sIHqcgg8Erm3DUw5mXFp3_mTspaioQwMoqoy82sPgbYs3bkQScEmUbcJDvsL3oOpAE3IR04nfp67ENKd13x3EaherTdFR3TA3",
};

const reducer = (state, action) => {
console.log(action);

// Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
            
        default:
            return state;
    }
}

export default reducer;