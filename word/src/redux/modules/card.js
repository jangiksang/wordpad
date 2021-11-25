import {collection,doc,getDoc,getDocs,addDoc,deleteDoc,updateDoc} from 'firebase/firestore'
import {db} from '../../firebase'

// 리덕스
const CREATE = "card/CARD-CREATE";
const DELETE = "card/CARD-DELETE";
const CHECK = "card/CARD-CHECK";
const UPDATE = "card/CARD-UPDATE";

// 파이어베이스
const FBLOAD = "card/CARD-FBLOAD";

// 액션생성함수
export const cardCreate = (list) => {
    return {type: CREATE, list:list};
}

export const cardDelete = (index) => {
    return {type: DELETE, index:index};
}

export const cardCheck = (check) => {
    return {type: CHECK, check:check};
}

export const cardUpdate = (list) => {
    return {type: UPDATE, list:list};
}

// 파이어 베이스 로드
export const cardLoadFB = (cardList) => {
    return {type:FBLOAD, cardList:cardList}
}


const initialState = {
    cardList: [],
}

// 파이어 베이스 액션함수
export const loadFB = () => {
    return async function (dispatch) {
        const cardDate = await getDocs(collection(db,"cardList"));

        let cdList = []
        cardDate.forEach((r) => {
            cdList.push({id:r.id, ...r.data()})
        })
        dispatch(cardLoadFB(cdList))    
    }
}

export const addFB = (list) => {
    return async function (dispatch) {
        const listRef = await addDoc(collection(db,"cardList"),list)
        // const _listRef = await getDoc(listRef)
        // dispatch(cardCreate(listRef))
    }
}

export const updateFB = (list) => {
    return async function (dispatch, getState) {
        let listRef = doc(db,"cardList",list.id)
        await updateDoc(listRef,{id:list.id,name:list.name,review:list.review,val:false,goal:list.goal,date:list.date})

        dispatch(cardUpdate(list))
    }
}

export const deleteFB = (cardId) => {
    return async function (dispatch,getState) {
        const listRef = doc(db,"cardList",cardId)
        await deleteDoc(listRef)
        
        dispatch(cardDelete(cardId))  
    }
}

// 리듀서
export default function reducer(state = initialState, action ={}) {
    switch (action.type) {
        case FBLOAD: {
            return {...state, cardList:action.cardList}
        }
        case CREATE: {
            let newCard = {...state}
            newCard.cardList.push(action.list)
            return {...state, newCard};
        }
        case DELETE: {
            let array = [...state.cardList]
            let deleteList = []
            array.filter((list,ind)=>{
               if(list.id !== action.index) deleteList.push(list)
            })
            return {...state,cardList:deleteList};
        }
        case CHECK: {
            let checkList = state.cardList.map((list,ind) =>
                ind === action.check ? { ...list, val: !list.val } : list
            );
            return {...state,cardList: checkList};
        }
        case UPDATE: {
            console.log(action.list)
            let updateList = state.cardList.map((list,ind) =>
                list.id === action.list.id ? { ...list, ...action.list } : list
            );
            return {...state, cardList: updateList};
        }
        default:
            return state;
    }
}