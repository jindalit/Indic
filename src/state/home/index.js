import { switchMap, catchError, map } from 'rxjs/operators'
import { of, from } from 'rxjs'
import { ofType } from 'redux-observable'

// Action-type 
export const INIT_LOAD = 'INIT_LOAD'
export const APP_LOADED = 'LOADED'
export const SET_VIDEO = 'SET_VIDEO'

//Actions

export const initLoadData = () => ({ type: INIT_LOAD })
export const appLoaded = payload => ({ type: APP_LOADED, payload })
export const setVideo = payload => ({ type: SET_VIDEO, payload })

export const epics = {
    initLoadData: (action$, state$) => action$.pipe(
        ofType(INIT_LOAD),
        switchMap(({ type, payload }) => {
            return of(appLoaded('test'))
        })
    )
}
export const initialState = {
    getVideo: {}
}

// REDUCERS
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case APP_LOADED:
            return {
                ...state,
                loadData: action.payload
            }
        case SET_VIDEO:
            return {
                ...state,
                getVideo: action.payload
            }
        default:
            return state
    }
}

export const getInitData = state => state.home.loadData

export const getVideo = state => state.home.getVideo