window.addEventListener('load', function(){
    fetch("kép.json")
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.galéria);
    })
    .catch((err) => console.log("hiba"));
  });
  
  function $(elem) {
    return document.querySelectorAll(elem)
  }
  
  function megjelenit(){
    let text=""
    galéria.forEach((galéria) =>{
      txt+="<ul>";
      for (const key in galéria){
        console.log(key,galéria[key]);
        txt += `<li>${key}:$galéria[key]},</li>`;
      }
      txt += "</ul>";
    })
    console.log(txt)
    $(`article`)[0].innerHTML = txt
  }