import {useReducer,createContext} from 'react';

export const StudentsContext = createContext();

const studentsReducer = (state,action)=>{
    switch (action.type) {
        case 'fetch':
            state=[...action.payload]
        break
        case 'search':
            state=[...action.payload]
        break
        case 'remove':
            const newState = state.filter(student=>student.student_id!==action.id);
            state=[...newState];
        break
        default:
            return state;
    }
}

const StudentsContextProvider=(props)=>{
    const[studentsState,dispatch] = useReducer(studentsReducer,[]);
    
    return(
        <StudentsContext.Provider value={{studentsState,dispatch}}>
            {props.children}
        </StudentsContext.Provider>
    )
}

export default StudentsContextProvider;