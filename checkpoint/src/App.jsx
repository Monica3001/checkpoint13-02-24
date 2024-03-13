import { useState } from "react";
import BookTable from "../Checkpoint13-03-24/server/bookTable";


export default function App() {
 const [ data , setData ] = useState('')

const url = "http://localhost:3000/books"

async function fetchApi(){
   const response = await fetch(url)
   const data = await response.json()

    setData(data)
}
fetchApi()

console.log(data)

  return (
    <div >
    <BookTable 
    data={data}/>
    </div>
  );
}
