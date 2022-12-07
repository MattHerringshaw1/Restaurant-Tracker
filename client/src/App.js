


function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ebdab672b1msh66bd7e4f6c4f32ep141c60jsn3f413a051d07',
      'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
    }
  };
  
  fetch('https://the-fork-the-spoon.p.rapidapi.com/reviews/list-best?id_restaurant=522995&locale=en_US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


  return (
  <>
    <h1>see random restaurant API slideshow here</h1>
  
    
  </>
  );
}

export default App;
