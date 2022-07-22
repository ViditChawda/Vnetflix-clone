import './App.css';
import requests from './request';
import Row from './Row';
import Banner from './Banner';
function App() {
  return (
    <div className="App">
      {/* <h2>Welcome To The Netflix By Vidit</h2> */}
      <Banner/>
      <Row title="NETFLIX ORIGNAL" fetchUrl={requests.fetchNetflixOriginals} isLargerRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
