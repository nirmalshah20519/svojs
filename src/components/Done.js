import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Done = (props) => {

    useEffect(()=>{
        // console.log("Hello")
        postToApi()
    },[])

    const url="http://testsvojsapi.navrssolutions.co.in/api/account/NewMemberRegistration"
    const url2='https://mockend.com/nirmalshah20519/Mockend/posts'
        
    const [message, setMessage]=useState('')
    const postToApi= async (e)=>{
      const data=props.finalData
      console.log(data)
      await  Axios.post(url, data)
        .then(res=>{
          console.log(res.data)
          setMessage(res.data.msg)})
        .catch((e)=>{console.log(e)
          setMessage(e.message)})

    }

  return (
    <>
    <h1> {message} </h1>
    </>
  )
}

export default Done