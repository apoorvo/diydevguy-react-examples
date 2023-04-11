import React from 'react'

const About = ({data}:{data:{name:string}}) => {
    console.log(data)
  return (
    <div>About</div>
  )
}

export default About

export async function getServerSideProps(context:{}) {
    let resp = await fetch("https://jsonplaceholder.typicode.com/todos/")
    console.log(resp)
    resp  =await resp.json()
    return {
        props:{
            data:resp
        }
    }
}