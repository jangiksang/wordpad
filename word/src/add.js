import React,{ useRef,useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";

// Css
import styled from 'styled-components'

// Redux
import { loadFB,addFB } from './redux/modules/card'


function Add() {
    const dispatch = useDispatch()
    const history = useHistory()

    // Ref
    const nameRef = useRef()
    const textRef = useRef()
    const goalRef = useRef()


    // 카드 추가 함수
    const addText = () => {
        if(nameRef.current.value === '' || textRef.current.value === '' || goalRef.current.value === '') {
            alert('텍스트를 입력해주세요')
            return  false
        }
        dispatch(addFB({
            date:Date.now(),
            name:nameRef.current.value,
            review:textRef.current.value,
            goal:goalRef.current.value,
            val:false
        }))

        history.push("/")
    }

    return (
        <AddWrap>
            <PostBox>
                <h2>항해는 어때요?</h2>
                <p>이름을 적어주세요.</p>
                <input ref={nameRef}></input>
                <p>항해는 어떤가요?</p>
                <input ref={textRef}></input>
                <p>앞으로의 목표를 적어주세요.</p>
                <input style={{wordWrap:'break-word'}} ref={goalRef}></input>
                <button onClick={()=>{addText()}}>추가하기</button>
            </PostBox>
        </AddWrap>
    );
}

const AddWrap = styled.div`
   width: 100%;
   box-sizing: border-box;
   padding: 82px  20px 0 20px;
`

const PostBox = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 50px auto 0 auto;

    h2 {
        text-align: center;
        margin-bottom: 50px;
        color: #6188f3;
    }
    p {
        width: 100%;
        margin:0;
        font-size: 14px;
        color: #6188f3;
        font-weight: bold;
        margin-bottom: 10px;
    }
    input {
        width: 100%;
        margin-bottom: 30px;
        border:none;
        box-sizing: border-box;
        border-bottom: 1.5px solid #618000;
    }
    input:focus {
        outline: none;
        border-bottom: 2px solid #6188f3;
    }
    button {
        width: 50%;
        margin: 0 25%;
        border: none;
        background-color: #6188f3;
        box-sizing: border-box;
        padding: 10px 0;
        color: #fff;
        border-radius: 10px;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s;
    }
    button:hover {
        background-color: #234ab5;
        transition: all 0.3s;
    }
`
export default Add;
