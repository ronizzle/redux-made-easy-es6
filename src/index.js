import { createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'

/**
 * this is the reducer function
 */
function counter(state={count:0}, action) {

    if(typeof state === 'undefined') {
        return { count: 0 }
    }

    var nextState = {
        count: state.count
    }
    switch(action.type) {
        case 'ADD':
            nextState.count = state.count + 1
            return nextState
            break
        case 'MINUS':
            nextState.count = state.count - 1
            return nextState
            break
        case 'RESET':
            nextState.count = 0
            return nextState
            break
        default:
            return nextState
            break
    }
}

function render() {
    var state = store.getState()
    counterEl.innerHTML = state.count.toString()
}

// STORE
const state = {count: 0}
const store = createStore(counter, applyMiddleware(logger))
const counterEl = document.getElementById('counter')

store.subscribe(render)

document.getElementById('add').addEventListener('click',() => {
  store.dispatch({type: 'ADD'})
})


document.getElementById('minus').addEventListener('click',() => {
  store.dispatch({type: 'MINUS'})
})


document.getElementById('reset').addEventListener('click', () => {

          store.dispatch({type: 'RESET'})
})

render()
