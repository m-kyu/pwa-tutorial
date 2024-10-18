import React, { useRef, useState } from 'react'
import DaumPostcodeEmbed from "react-daum-postcode";

const Join = () => {

  const [isOpen,setIsopen] = useState(false);
  const elAddress = useRef('');
    
  return (
    <div>
        <button onClick={()=>setIsopen(true)}>주소찾기</button>
        <input type="text" defaultValue={elAddress.current}/>
        {isOpen && <Modal setIsopen={setIsopen} elAddress={elAddress}/> }
    </div>
  )
}

export default Join


const Modal = ({setIsopen, elAddress})=>{
    const handleComplete = (data) => {
        console.log(data)
        let fullAddress = data.address;
        let extraAddress = '';
    
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
    
        setIsopen(false)
        elAddress.current = fullAddress;
        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'fixed',left:'0px',top:'0px',width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.6)'}}>
            <div style={{backgroundColor:'white',width:'500px'}}>
                <DaumPostcodeEmbed  onComplete={handleComplete } autoClose={false} />
                <button onClick={()=>setIsopen(false)}>닫기</button>
            </div>
        </div>
    )
}