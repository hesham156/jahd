import React from 'react'
import axios from 'axios';
import filters from './filters';
const sendData = (data) => {
  const filterDta = data.profileObj?data.profileObj:data;
  filters(filterDta.email)
  console.log(filterDta)
  save(filterDta)
  return data?true:false;
}
const save = (data)=>{
return axios.post('http://localhost:3004/users',
{"name": data.name,
"email":data.email,
"img":data.picture?data.picture.data.url:data.imageUrl,
"s_id":data.id?data.id:data.googleId,
"a_tocken":data.accessToken
})
}
export default sendData