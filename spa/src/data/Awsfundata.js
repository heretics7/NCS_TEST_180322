import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Awsfundata() {
    const [ myawsdata, myawsdataUpdate ] = useState('여기까지 나오면 일단 셋팅은 완료 추후 DB 연결')
    const [ getawsdata, getawsdataUpdate ] = useState('get과 post 같이 배출하기 success')

    useEffect( async ()=>{
        await axios.post('/post',{})
        .then( res => {
            myawsdataUpdate(res.data.fun)
            }
        )
    }, [] )
    useEffect( async ()=>{
        await axios.get('/get',{})
        .then( res => {
            getawsdataUpdate(res.data)
            }
        )
    }, [] )

    return(
        <div>
            <h2>함수형 컴포넌트</h2>
            <p>get으로 받아오기 :  {getawsdata}</p>
            <p>post로 받아오기 : {myawsdata}</p>
        </div>
    )
}

export default Awsfundata;