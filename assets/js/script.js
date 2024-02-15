//erklærer variablen formResult, og tildeler den værdi i form af et array med 5 strings, der senere skal bruges som resultat i den tomme ul .results.
let formResult = ['Rye bread', 'Tomato', 'Cottage cheese', 'Pepper', 'Eggs, sunny side up']

//Vælger den relevante UL fra html med class ."results"
let ULelement = document.querySelector('.results');

//Event listener, der vælger og lytter efter klik på "button" HTML element. function() sørger for at udføre eventet. Uden function() ville knappen ikke virke. 
document.querySelector('button').addEventListener('click', function() {
    //Lytter efter værdien der bliver skrevet i inputfeltet
    let avocado = document.querySelector('input').value;
  
    //Tjekker om værdien i inputfeltet er === "avocado". Tjekker både værdi og datatype. toLowerCase laver resultatet om til små bogstaver, så selvom man skriver AVODACAO, AvoKAdO eller andet, vil den stadig return true. 
    if (avocado.toLowerCase() === "avocado") {
      //looper igennem formResult array, og indsætter resultatet fra formResult som <li> i .resultsUL i HTML dokumentet.
      for (let i = 0; i < formResult.length; i++) {
        ULelement.innerHTML += `<li>${formResult[i]}</li>`;
      }
      //hvis den indtastede værdi er forkert, altså returnere false, bliver der vist en alert og opfordrer til et nyt forsøg. 
    } else {
        alert('Wrong! Try Again!');
      }
  });