
const url = "http://localhost:3000/books"

 async function fetchApi(){
    const response = fetch(url)
    const data =response.json()

   console.log(data)
}