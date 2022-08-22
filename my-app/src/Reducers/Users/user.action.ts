import { Action } from "redux";

export enum userActionType{
    GetList="GetList",
    ReadyUserList="ReadyUserList",
    EditList="EditList",
    DeleteList="DeleteList",
    AddList="AddList",
    ReadyNewList="ReadyNewList"
}

function createActionFunction<TOptions, TActionType extends userActionType>(
    type: TActionType,
  ): (options: TOptions) => TOptions & Action<TActionType> {
    return (options: TOptions) => ({ type, ...options });
  }

  export interface IReadyUserList{
     data:any[]
  }

  export interface IDeleteList{
    id: Number;
 
  }

  export interface IEditList{
    id: Number;
    title: string;     
  }

  export interface IAddList{   
    title: string;     
  }

  export interface IReadyNewList{   
    status: number;
    title:string     
  }

  export const FetchUser = createActionFunction<
  {},
  userActionType.GetList
>(userActionType.GetList);

export const ReadyUserDetails = createActionFunction<
IReadyUserList,
userActionType.ReadyUserList
>(userActionType.ReadyUserList);


export const DeleteUser = createActionFunction<
IDeleteList,
userActionType.DeleteList
>(userActionType.DeleteList);

export const EditUser = createActionFunction<
IEditList,
userActionType.EditList
>(userActionType.EditList);

export const AddList = createActionFunction<
IAddList,
userActionType.AddList
>(userActionType.AddList);

export const ReadyNewList = createActionFunction<
IReadyNewList,
userActionType.ReadyNewList
>(userActionType.ReadyNewList);

export type UserAction = 
 ReturnType<typeof FetchUser>
 |ReturnType<typeof ReadyUserDetails>
|ReturnType<typeof DeleteUser>
|ReturnType<typeof EditUser>
|ReturnType<typeof  AddList>
|ReturnType<typeof  ReadyNewList>