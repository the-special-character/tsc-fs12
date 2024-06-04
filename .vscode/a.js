const posturl = 'https://jsonplaceholder.typicode.com/todos/1';
const postdata ={ username:"darshan",email : "chotaliyadarshan710@gmail.com"}
postapi =fetch(posturl),{   
    method:'POST',
    headers:{ "Content-Type" : "appliction/json"},
      body:JSON.stringify(postdata)
}
postapi.then(response => response.json())
        .then (data=> {console.log(data);})
        .catch(error => {console.log(error);})