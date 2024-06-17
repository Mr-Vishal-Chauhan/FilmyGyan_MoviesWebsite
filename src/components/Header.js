import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
		 <div className="container-fluid">
		 <div className="row">
			<img className="col-md-3 movieName" src="/assets/images/vegav2.png"/> </div>
			<div className="row text-light possition options"> 
				<div className="col-md-1 option">HOME</div>
				<div className="col-md-1 option">Bollywood</div>
				<div className="col-md-1 option">Hollywood</div>
				<div className="col-md-1 option">Dual Audio</div>
				<div className="col-md-1 option">Telugu</div>
				<div className="col-md-1 option">Tv Shows</div>
				<div className="col-md-1 option">Punjabi</div>
				<div className="col-md-1 option">Tamil</div>
				<div className="col-md-1 option">By Year</div>
		  </div>
          <div className="container">
			
		  <div className="row possition "> 
		        <div className="col-md-2">
				<Link to='/'><button className="btn btn1 btn-danger">HOLLYWOOD MOVIES</button></Link>
				</div>
				<div className="col-md-2">
				<Link to='/Bollywood'><button className="btn btn1 btn-success">BOLLYWOOD MOVIES</button></Link>
				</div>
				<div className="col-md-2">
				<Link to='/Anime'><button className="btn btn1 btn-primary">ANIME <br/>MOVIES</button></Link>
				</div>
				<div className="col-md-2">
				<Link to='/Punjabi'><button className="btn btn1 btn-warning text-light">PUNJABI<br/> MOVIES</button></Link>
				</div>
		  </div>
		  <div className="row possition">
		  <div className="col-md-12 btn btn-primary">JOIN OUR TELEGRAM CHANNEL </div>
		  </div>
		  
		  <div className="row possition1"> 
				<div className="col-md-2 ops1">Bollywood Movies</div>
				<div className="col-md-2 ops1 ms-2">Hollywood Movie </div>
				<div className="col-md-1 ops1 ms-2">Telgu</div>
				<div className="col-md-1 ops1 ms-2">Action</div>
				<div className="col-md-1 ops1 ms-2">Advanture</div>
				<div className="col-md-1 ops1 ms-2">Animation </div>
				<div className="col-md-1 ops1 ms-2">Cartoon</div>
				<div className="col-md-1 ops1 ms-2">Anime</div>
				<div className="col-md-1 ops1 ms-2">Drama</div>
			
		  </div>
		  <div className="row possition1"> 
		        <div className="col-md-1 ops2 ms-2">Comedy</div>
				<div className="col-md-1 ops2 ms-2">Crime</div>
				<div className="col-md-1 ops2 ms-2">Mystery</div>
				<div className="col-md-1 ops2 ms-2">History</div>
				<div className="col-md-1 ops2 ms-2">Fantasy</div>
				<div className="col-md-1 ops2 ms-2">Family</div>
				<div className="col-md-1 ops2 ms-2">Thriller</div>
				<div className="col-md-1 ops2 ms-2">War</div>
				<div className="col-md-1 ops2 ms-2">Romance</div>
				<div className="col-md-1 ops2 ms-2">Tamil</div>
				
		  </div>
		  </div>
		 </div>
		</>
	);
}
