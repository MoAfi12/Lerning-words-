let input = document.querySelector('#input-search')
let icon = document.querySelector('#icon')
let container = document.querySelector('.container-info')
let selects = document.querySelector('#selects')
let check = document.querySelector('#checkBox')

icon.addEventListener('click' , async(event)=>{
    const request = await fetch(`./words.json`)
    const response = await request.json() 
    const data = response
const loopData = data.find(element => element.word === input.value) 
    // console.log(loopData.word);
    // icon.addEventListener('click' , (event)=>{
        
            if(!loopData){
                container.innerHTML = `<p> word not found`
                input.value = ''
                 return;
            } 
            let html = `<h1>${loopData.word}</h1>`

            if (selects.value === 'definition' || selects.value === 'all') {
                html += `<p><strong>Definition:</strong> ${loopData.definition}</p>`;
            }
        
            if (selects.value === 'examples' || selects.value === 'all') {
                html += `<p><strong>Examples:<br></strong> ${loopData.examples.join('<br>')} </p>`;
            }
        
            if (selects.value === 'synonyms' || selects.value === 'all') {
                html += `<p><strong>Synonyms:<br></strong> ${loopData.synonyms.join('<br>')} </p>`;
            }
        
            if (selects.value === 'antonyms' || selects.value === 'all') {
                html += `<p><strong>antonyms:<br></strong> ${loopData.antonyms.join('<br>')} </p>`;
            }
            

            html += `<input type="checkbox"  id="memorize-${loopData.word}"> Memorize This word`;

            container.innerHTML = html;
        
            let memorizedWord = JSON.parse(localStorage.getItem('memorizedWords')) || [];
            const memorizedIndex = memorizedWord.map(e => e.word).indexOf(loopData.word);
        
        
            document.querySelector(`#memorize-${loopData.word}`).checked = memorizedIndex > -1;
        
            document.querySelector(`#memorize-${loopData.word}`).addEventListener('change', (e) => {
        
                let memorizedWords = JSON.parse(localStorage.getItem('memorizedWords')) || [];
        
                if (e.target.checked) {
                    const index = memorizedWords.map(e => e.word).indexOf(loopData.word);
                    if (index === -1) {
                        memorizedWords.push(loopData);
                    }
                } else {
                
                    const index = memorizedWords.map(e => e.word).indexOf(loopData.word);
        
                    if (index > -1) {
                        memorizedWords.splice(index, 1);
                    }
                }
                localStorage.setItem('memorizedWords', JSON.stringify(memorizedWords));
            });
      

    
})

//     if(input.value === element.word && options === 'Definition'){
//      container.innerHTML = `<div class="containet-words">
    
//         <div class="definition">
//             <h1>${element.word}</h1>
//             <p> <span>Definition is </span> ${element.definition}</p>
//         </div>
//         <div class="check">
//         <label for="">Learn</label>
//         <input type="checkbox" id="checkBox">
//     </div>
//         </div>`
//     }
//         else if(input.value === element.word && options === 'Examples'){
//             container.innerHTML = `<div class="containet-words">
//              <div class="examples some-All">
//                  <h1>Examples</h1>
//                  <p>1 = ${element.examples[0]}</p>
//                  <p>2 = ${element.examples[1]}</p>
//              </div>
//              <div class="check">
//              <label for="">Learn</label>
//              <input type="checkbox" id="checkBox">
//          </div>
//              </div>`
//         }
//         else if(input.value === element.word && options === 'Synonyms'){
        
//         container.innerHTML = `<div class="containet-words">
        
//         <div class="Synonyms some-All">
//             <h1>Synonyms</h1>
//             <p>1 = ${element.synonyms[0]}</p>
//             <p>2 = ${element.synonyms[1]}.</p>
//             <p>3 = ${element.synonyms[2]}.</p>
//         </div>
        
//         <div class="check">
//         <label for="">Learn</label>
//         <input type="checkbox" id="checkBox">
//     </div>
//     </div>
//         `
//         }
//         else if(input.value === element.word && options === 'Antonyms'){
//             container.innerHTML = `<div class="containet-words">
//         <div class="Antonyms some-All">
//             <h1>Antonyms</h1>
//             <p>1 = ${element.antonyms[0]}</p>
//             <p>2 = ${element.antonyms[1]}.</p>
//             <p>3 = ${element.antonyms[2]}</p>
//         </div>
        
//         <div class="check">
//         <label for="">Learn</label>
//         <input type="checkbox" id="checkBox">
//     </div>
//         </div>
//         `
//         }
//         else if(input.value === element.word && options === 'All'){
//         container.innerHTML = `<div class="containet-words">
//         <div class="definition">
//             <h1>${element.word}</h1>
//             <p> <span>Definition is </span> ${element.definition}</p>
//         </div>
       
//         <div class="examples some-All">
//         <h1>Examples</h1>
//         <p>1 = ${element.examples[0]}</p>
//         <p>2 = ${element.examples[1]}</p>

//     </div>

//     <div class="Synonyms some-All">
//     <h1>Synonyms</h1>
//     <p>1 = ${element.synonyms[0]}</p>
//     <p>2 = ${element.synonyms[1]}.</p>
//     <p>3 = ${element.synonyms[2]}.</p>
// </div>

// <div class="Antonyms some-All">
// <h1>Antonyms</h1>
// <p>1 = ${element.antonyms[0]}</p>
// <p>2 = ${element.antonyms[1]}.</p>
// <p>3 = ${element.antonyms[2]}</p>
// </div>

//         <div class="check">
//             <label for="">Learn</label>
//             <input type="checkbox" id="checkBox" onclick="getCheck()">
//         </div>
//          </div>`
   

//         }
        


// })
  

    
// })

// }
 

//        function getCheck(){
// console.log(input.value);
// if(input.value === ' '){
// return ;
// }else{
//   localStorage.setItem('data' , JSON.stringify(container) )
//   localStorage.removeItem
// }

//     }
// getData()



