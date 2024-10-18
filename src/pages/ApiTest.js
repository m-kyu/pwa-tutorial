
import React, { useEffect } from 'react'

const ApiTest = ({data}) => {

  let test ={
    post:async ()=>{
      await fetch('/api/hello',{
        method:'post',
        body:JSON.stringify({name:'홍길동'})
      })
    },
    update:async ()=>{},
    delete:async ()=>{
      await fetch('/api/hello?name=홍길동',{method:'delete'})
    }
  }

  return (
    <div>
      <h2>ApiTest</h2>
      <div>
        <button onClick={test.post}>추가</button>
        <button>수정</button>
        <button onClick={test.delete}>삭제</button>
      </div>
      <ul>
        {
          data.map((obj,key)=>
            <li key={key}> {obj.name} </li>
          )
        }
      </ul>

    </div>
  )
}

export async function getServerSideProps(){
    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();
    return {props:{data}}
}

export default ApiTest;