import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";

// Css
import styled from 'styled-components'

// Redux
import { cardCheck,loadFB,deleteFB } from './redux/modules/card'

function Main() {

  useEffect(() => {
    dispatch(loadFB());
  },[] )

  const dispatch = useDispatch()
  const cardList = useSelector((state)=>state.card.cardList)
  const dateCardList = cardList.sort((a,b)=> {
     return a.date-b.date
  })

  
  return (
    <MainWrap>
        {dateCardList.map((list,index) => {
            return (
              <Card key={index} className={dateCardList[index].val === true? 'on':null}>
                <p className="name">{list.name}</p>
                <p className="review">항해99는? {list.review}</p>
                <p className={dateCardList[index].val === true? 'on':'goal'}>목표: "{list.goal}"</p>
                <div className="btn-box">
                  <button onClick={()=> {dispatch(cardCheck(index))}}>체크</button>
                  <Link to={`/${index}/edit`}>
                      <button>수정</button>
                  </Link>
                  <button onClick={()=>{dispatch(deleteFB(dateCardList[index].id))}}>삭제</button>
                </div>
            </Card>
            )
        })}
    </MainWrap>
  );
}

const MainWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 82px  20px 20px 20px;
  
  //flex
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .on {
      background-color: #7f9ceb!important;
      color: #fff!important;
      display: inline-block;
      font-weight: bold;
    }
`
const Card = styled.div`
    box-sizing:border-box;
    padding: 20px;
    height: 150px;
    background-color: #fff;
    border: 2px solid #7f9ceb;
    position: relative;
    width: calc((100% - 40px) / 3);

    p {
        margin: 0
    }
    .name {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .review {
        font-size: 14px;
        margin-bottom: 10px;
    }
    .goal {
        color:#7f9ceb;
        font-weight: bold;
    }
    .btn-box {
        position: absolute;
        top: 22px;
        right: 20px;
    }
    .btn-box button {
        background-color: #fff;
        margin-left: 10px;
        border:1px solid #4767bd;
        border-radius: 5px;
        cursor: pointer;
        color: #4767bd;
        font-weight: bold;
        transition: all 0.1s;
    }
    .btn-box button:hover {
        transition: all 0.1s;
        color: #fff;
        background-color: #4767bd;;
    }

    // 반응형
    @media only screen and (max-width: 992px) {
    width: calc((100% - 40px) / 2)
  }
    @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
export default Main;
