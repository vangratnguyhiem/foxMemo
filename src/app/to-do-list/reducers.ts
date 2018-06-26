import { Thing } from './list-thing'; 

export function thingsReducer(state = [], action): Thing[] { 
    
    if(action.type === 'GET_THINGS') return action.things; 

    if(action.type === 'ADD_THING'){ 
        return state.concat(action.thing).sort((a, b) => { return b - a })
    }

    if(action.type === 'REMOVE_THING') { 
        return state.filter(thing => thing._id !== action._id)
    }

    if(action.type === 'CHECK_VALUE'){ 
        return state.map(thing => { 
            if(thing._id  !== action._id) return thing; 
            return { ...thing, checkOption: !thing.checkOption }
        })
    }

    return state; 
}

