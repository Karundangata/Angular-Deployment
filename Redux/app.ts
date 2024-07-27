/// actions

import {combineReducers, createStore} from 'redux'
interface Action {
    type:'CREATE_CLAIM'|'DELETE_POLICY'|'CREATE_POLICY'
    payload:{
        name:string
        amount:number
    }
}
const CREATE_CLAIM=(name:string, amount:number):Action=>{
    return{
        type:'CREATE_CLAIM',
        payload:{
            name,
            amount
        }
    }
}


const CREATE_POLICY=(name:string, amount:number):Action=>{
    return{
        type:'CREATE_POLICY',
        payload:{
            name,
            amount
        }
    }
}

const DELETE_POLICY=(name:string,amount:number):Action=>{
    return{
        type:'DELETE_POLICY',
        payload:{
            name,
            amount
        }
    }
}

/// REDUCERS--- DEPARTMENTS

const claims= (listofClaim=[], action:Action)=>{
    if(action.type==='CREATE_CLAIM'){
        //return a new state-- pure fuctions 
        return [...listofClaim, action.payload.name]
    }
    return listofClaim
}

const accounting =(accountBal=1000, action:Action)=>{
    if(action.type==='CREATE_POLICY'&& action.payload.amount){
        return accountBal + action.payload.amount
    }
    if(action.type==='CREATE_CLAIM'&& action.payload.amount){
        return accountBal - action.payload.amount
    }
    if(action.type==='DELETE_POLICY' && action.payload.amount){
        return accountBal - action.payload.amount
    }
    return accountBal;
}

const policies=(listofPolies=[], action:Action)=>{

    if(action.type==='CREATE_POLICY'){
        return [...listofPolies, action.payload.name]
    }
    if(action.type==='DELETE_POLICY'){
        return listofPolies.filter(name=>name !== action.payload.name)
    }
    return listofPolies
}

//having on reducer with different slices
//one object with 3 key Value pair key= reducer value an object with the data of the department
const reducer = combineReducers({
    claims,
    policies,
    accounting
})

//store

const store = createStore(reducer)

store.dispatch({type:'CREATE_POLICY', payload:{name:'John', amount:2000}})
store.dispatch({type:'CREATE_POLICY', payload:{name:'Jane', amount:4000}})
store.dispatch({type:'CREATE_POLICY', payload:{name:'Joseph', amount:45000}})
store.dispatch({type:'CREATE_POLICY', payload:{name:'Mary', amount:1000}})
store.dispatch({type:'DELETE_POLICY', payload:{name:'Jane', amount:4000}})
store.dispatch({type:'CREATE_CLAIM', payload:{name:'Joseph', amount:40000}})

console.log(store.getState())