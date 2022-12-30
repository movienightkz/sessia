const content = document.querySelector("#card")
const getRes = async(url) => {
  const res = await fetch(url);
  if (!res.ok) {
      throw new Error(`status: ${res.status}`);
  }
  return await res.json()
}


  getRes('user.json')
      .then(data => {
          console.log(data);
          for(let key in data) {
              const block = document.createElement("div")
              const img = data[key].img
              const description = data[key].description
              const link = data[key].link



              block.innerHTML = 
                  `<div class="card">
                      <img class="lol" src="${img}" alt="" width="500">
                      <div class="pra">
                          <p>${description}</p>
                          
                            <p style="text-align: center;">
						        <a class="button" href="${link}">Перейти</a>
					        </p>
                      </div>
                  </div>
                  `
              
           content.append(block)   
          }
      })