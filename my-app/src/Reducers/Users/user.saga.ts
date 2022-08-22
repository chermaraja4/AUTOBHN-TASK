
import {ReadyUserDetails,ReadyNewList,userActionType,FetchUser,AddList} from "./user.action"
import { put, takeEvery, call, takeLatest ,all} from "redux-saga/effects";



async function userList() { 
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',  
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, must-revalidate",  
    
        },
     
      },
    ); 
    const responseBody = await response.json();
    return {  ...responseBody };
  }


export function* GetUser(): any {
    try {
      const response:any = yield call(userList);
   
      yield put(
        ReadyUserDetails({
          data:response
        }),
      );
 
    } catch (error) {
         console.log(error)
    }
  }


export function* userDetailsSaga() {
    yield takeEvery(userActionType.GetList,GetUser);
  }


  async function postList(title:string) { 
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',  
      {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, must-revalidate",    
    
        },
        body: JSON.stringify({
          title: title
               }),
     
      },
    ); 
    const status=response.status
    const responseBody = await response.json();
    return {  status };
  }


export function* NewList(action: ReturnType<typeof AddList>): any {
    try {
      const response:any = yield call(postList,action.title);  
      yield put(
        ReadyNewList({
          status:response.status,
          title:action.title
        }),
      );
      
   
 
    } catch (error) {
         console.log(error)
    }
  }


export function* NewListSaga() {
    yield takeEvery(userActionType.AddList,NewList);
  }





  export function* UserSagas() {
    yield all([userDetailsSaga(),NewListSaga()]);
  }
  