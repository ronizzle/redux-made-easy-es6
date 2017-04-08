import { createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'

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
const store = createStore(counter, applyMiddleware(logger, thunk))
const counterEl = document.getElementById('counter')

store.subscribe(render)

document.getElementById('add').addEventListener('click',() => {
  store.dispatch(dispatch => {
    dispatch({type: 'ADD'})
    dispatch({type: 'ADD'})
      axios.get('https://randomuser.me/api/')
        .then(response => {
          console.log(response)
          dispatch({type: 'ADD'})
        })
  })
})


document.getElementById('minus').addEventListener('click',() => {
  store.dispatch({type: 'MINUS'})
})


document.getElementById('reset').addEventListener('click', () => {
  store.dispatch({type: 'RESET'})
})

render()
