import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Awsfundata() {
    const [ myawsdata, myawsdataUpdate ] = useState('여기까지 나오면 일단 셋팅은 완료 추후 DB 연결')

    useEffect( async ()=>{
        await axios.post('/post',{})
        .then( res => {
            myawsdataUpdate(res.data.fun)
            }
        )
    }, [] )

    return(
        <div>
            <h2>함수형 컴포넌트</h2>
            {myawsdata}
        </div>
    )
}

export default Awsfundata;