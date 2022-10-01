import React, { useEffect } from 'react'
import Axios from 'axios'

const Done = (props) => {

    useEffect(()=>{
        // console.log("Hello")
        postToApi()
    },[])

    const url="http://testsvojsapi.navrssolutions.co.in/api/account/NewMemberRegistration"
    const url2='https://mockend.com/nirmalshah20519/Mockend/posts'
        
    
    const postToApi= async (e)=>{
      const data=props.finalData
      console.log(data)
      await  Axios.post(url2, data)
        .then(res=>{console.log(res.data)})

    }

  return (
    <>
    <h1> ``` Response Message ``` </h1>
    </>
  )
}

export default Done