import { all } from 'redux-saga/effects'


// Combine all your sagas into a single root saga
export function* rootSaga() {
    try {
        yield all([

            // ...
        ])
    } catch (error) {
        // Handle errors at the root level
        console.error('Root Saga Error:', error)
    }
}
