fetch("http://localhost:3000/data", {

  method: "POST",
  
  // credentials will work if credetials:true is set in cors
  credentials: "include"
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
