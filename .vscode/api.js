
fetch ('https://shopapi.auco.app/store/faq')
    .then(res => res.json())
    .then (data => {console.log(data);})
    .catch(error => {console.log(error);})