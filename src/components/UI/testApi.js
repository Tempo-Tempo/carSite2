
export async function testApi () {
 let test = await fetch("https://api.hh.ru/areas")
   .then((response) => {
     return response.json();
    })
   .then((data) => {
      return data
   });
   return test
}
