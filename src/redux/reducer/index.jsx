const Showtip = (state = {text: '', show: false}, action) => {

    switch (action.type) {
        case 'SHOW_TIP':
            // console.log(action);
            return Object.assign({}, {
                text: action.item.text,
                show: action.item.show
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