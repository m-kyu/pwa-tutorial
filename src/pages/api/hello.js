let data = [
  { name: "John Doe 1 " },{ name: "John Doe 2"},{ name: "John Doe 3" }
]

export default function handler(req, res) {
  
  const {method, body, query} = req;  

  switch(method){
    case 'POST':data.push(JSON.parse(body)); break;
    case 'PUT':; break;
    case 'DELETE':
          data = data.filter(obj=>obj.name !== query.name);
      ; break;
  }  
 
  res.status(200).json(data);
}