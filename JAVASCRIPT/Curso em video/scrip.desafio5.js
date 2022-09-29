let res = window.document.querySelector('p#res')
    function clicar() {
      let x = Number(window.prompt('Digite uma distância em metros(m)'))
      document
      
      res.innerHTML=`<p>A distância de ${x} metros, corresponde a...</p>`
      res.innerHTML +=`<p>${x*0.001} km</p>`
      res.innerHTML +=`<p>${x*0.01} hm</p>`
      res.innerHTML +=`<p>${x*0.1} dam</p>`
      res.innerHTML +=`<p>${x*1000} dm</p>`
      res.innerHTML +=`<p>${x*1000000}mm</p>` 
    }