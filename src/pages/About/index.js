import React, { useState, useEffect } from "react";
// import Container from "../../components/Container";
// import SearchForm from "../../components/SearchForm";
// import SearchResults from "../../components/SearchResults";
// import Alert from "../../components/Alert";
// import API from "../../utils/API";
// import DeveloperContext from "../../utils/DeveloperContext";

// function Search() {
//   const [developerState, setDeveloperState] = useState({
//   search: "Wikipedia",
//   title: "",
//   url: "",
//   error: "",
// })
//   // When the component mounts, update the title to be Wikipedia Searcher
//   useEffect(() => {
//     document.title = "Wikipedia Searcher";

//     if (!search) {
//       return;
//     }

//     API.searchTerms(search)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         setTitle(res.data[1][0]);
//         setUrl(res.data[3][0]);
//       })
//       .catch(err => setError(err));
//   }, [search]);

//   const handleInputChange = event => {
//     setSearch(event.target.value);
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <Container style={{ minHeight: "100vh" }}>
//         <h1 className="text-center">Search For Anything on Wikipedia</h1>
//         <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
//           {error}
//         </Alert>
//         <SearchForm
//           handleFormSubmit={handleFormSubmit}
//           handleInputChange={handleInputChange}
//           results={search}
//         />
//         <SearchResults title={title} url={url} />
//       </Container>
//     </div>
//   );
// }

// export default Search;

function About() {

  return (
  <>
    <div className="mt-4">
      <h2>Welcome to THE ABOUT PAGE!</h2>
    </div>
  </>  
  )
}

export default About;