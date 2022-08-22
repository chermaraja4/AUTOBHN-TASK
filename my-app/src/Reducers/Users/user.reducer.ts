
import { Reducer } from "redux";
import {IReadyUserList,UserAction,userActionType} from "./user.action"

export interface IUserState {
    userDetails: IReadyUserList

}

export const initialState :IUserState= {
    userDetails:{
        data:[]
    }
  
};
  export const UserReducer: Reducer<IUserState, UserAction> = (
    state = initialState,
    action,
  ): IUserState => {
    switch (action.type) {
        case userActionType.ReadyUserList: {
            return {
              ...state,
              userDetails: {
                ...state.userDetails,
                ...action,
              },
            };
          }

          case userActionType.EditList: {
           const  userList= Object.values(state.userDetails.data);         
          let updateValue=userList.map((list)=>{
            if(action.id===list.id)
                list.title=action.title;            
                  return list
           })     
          
            return {
              ...state,
              userDetails: {
                ...state,data: updateValue },
            };
          }
          case userActionType.DeleteList: {
            const  userList= Object.values(state.userDetails.data);         
           let updateValue=userList.filter((list)=>list.id!==action.id)
           
             return {
               ...state,
               userDetails: {
                 ...state,data: updateValue },
             };
           }

           case userActionType.ReadyNewList:{   
            const  userList= Object.values(state.userDetails.data);  
            const newObject={
              id:userList.length+1,
              title:action.title
            }
            return {
              ...state,
              userDetails: {
                ...state,data: [...userList,newObject] 
                
              },
            };
          }
          default:
            return state;      

    }
}