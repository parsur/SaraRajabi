const token = "parsur";

export default function api(route) {
     // here is fetch id. change it if you want
     return fetch("/" + route, {
          headers: {
               'api_key': `${token}`
          }
     })
          .then(res => res.json())
}