const Showtip = (state = {'curItem': ''}, action) => {
    switch (action.type) {
        case 'SHOW_TIP':
            return Object.assign({}, {
                curItem: action.curItem
            });
        default:
            return state;
    }
}
function counter(state = {count: 0}, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return {count: count + 1}
        default:
            return state
    }
}

export {Showtip, counter};