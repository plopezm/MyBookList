/**
 * Created by pablolm on 29/10/16.
 */

/**
 * State argument is not applicatons state, only the state
 * this reducer is responsible for
 * @param state
 * @param action
 */
export default function (state = null, action) {
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}