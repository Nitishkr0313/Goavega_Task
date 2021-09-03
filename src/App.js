import React from 'react';
import './App.css';

// https://api.github.com/search/repositories?q-html
function App() {
   const [inputValue,setInputValue]=React.useState("");
   const[isLoading,setIsLoading]=React.useState(false);
   const[error,setError]=React.useState(false);
   const [repos,setRepos]=React.useState([]);
   //console.log(state[0]);
   React.useEffect(() =>{
     if(!inputValue){
       return;
     }
       setIsLoading(true);
       fetch('https://api.github.com/search/repositories?q=' +inputValue)
       .then(response =>{
         return response.json();
       })
       .then(data =>{
         console.log(data );
         setIsLoading(false);
         setError(true);
         setRepos(data.items);
       })
         .catch(err => {
          setIsLoading(false);
           console.log(err);

         });
 //console.log(inputValue);
   },[inputValue]);
   console.log(repos);
   

  return (
    <div>
  <form onSubmit={evt => {
    evt.preventDefault();
    //debugger:
    //console.log("evt.target.element.query.value");
    setInputValue("evt.target.element.query.value");
  }}>
     <input 
     type="text" 
     name="query" 
     className="github_search_input"
     placeholder="Search Github Repositories"
     />
    </form>
    {isLoading &&<div>Loading...</div>}
    {error &&<div>Unexpected error occured fetching data. please try again later!</div>}

    <ul className="repo_list">{repos.map(repo =>{
        return (<li key={repo.id}className="repo_item"><a href={repo.html_url} target="_blank">{repo.name}</a>
        <p>{repo.description}</p>
        </li>);
    })}
    </ul>
    </div>
  );
}

export default App;
  