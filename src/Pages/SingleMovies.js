import { useParams } from "react-router-dom";

export default function SingleMovies(){
    const {title} = useParams();

    return(
        <>
        <div className="container">
           
            <div class="card-container">
                <div className="down"><hr/>Download {title} the Movie (2023) Dual Audio [Hindi + English] WeB-DL 480p [300MB] | 720p [850MB] | 1080p [2GB]<hr/></div>
                <div className="pt-2 font">✅Download Shin Jigen! Crayon Shin-chan the Movie (2023) Dual Audio (Hindi-English) Full Movie. This is a English movie and available in 1080p & 720p & 480p qualities. This is one of the best movie based on Animation, Action, Adventure. This movie is now available in Hindi.</div>
                <div className="pt-4 font">VegaMovies.To is the best online platform for downloading Hollywood and Bollywood Movies. We provide direct G-Drive download link for fast and secure downloading. Click on the download button below and follow the steps to start download.</div>
                
            </div>
            <div className="row">
                    <div className="text-danger bold">Movie Info:-</div>
                    <div className="text-success bold">👉 IMDb Rating:- 6.5/10</div>
                    <div className="text-light "><span className="bold">Movie Name: </span>{title}</div>
                    <div className="text-light "><span className="bold">Release Year: </span> 2023</div>
                    <div className="text-light "><span className="bold">Language: </span> Dual Audio [Hindi + English]</div>
                    <div className="text-light"><span className="bold">Subtitles: </span> Yes (English)</div>
                    <div className="text-light"><span className="bold">Size:  </span>300MB || 850MB || 2GB</div>
                    <div className="text-light"><span className="bold">Quality: </span> 480p || 720p || 1080p – WeB-DL</div>
                    <div className="text-light"><span className="bold">Format:</span> MKV</div>

                </div>
                <div className="row">
                    <div className="text-danger syn my-3">Movie Synopsis/PLOT</div>
                    <div className="text-light">Young boy Shinnosuke gains telekinetic abilities from cosmic white light. Mitsuru Hiriya obtains psychic powers from black light, aims to destroy Earth. Amidst Japan’s fear, Shinnosuke emerges as hero against Hiriya’s threat.</div>
                    
                </div>
                <div className="row">
                    <div className="text-warning syn my-3">:SCREENSHOTS:</div>
                   <img src="/assets/images/screen.png"/>
                   <img className="my-4"  src="/assets/images/screen1.png"/>
                    
                </div>
                <div className="row text-light">
                    <hr/>
                    <div className="text-light syn1 my-3">{title} the Movie (2023) <span className="text-warning">[Hindi + English]</span> 480p [300MB]</div>
                    <div className="syn"><button className="btn btn-success ">DOWNLOAD NOW</button></div>
                    <div className="text-light syn1 my-3">{title} the Movie (2023) <span className="text-warning">[Hindi + English]</span> 720p [850MB]</div>
                    <div className="syn"><button className="btn btn-success ">DOWNLOAD NOW</button></div>
                    <div className="text-light syn1 my-3">{title} the Movie (2023) <span className="text-warning">[Hindi + English]</span> 1080p [2GB]</div>
                    <div className="syn mb-5"><button className="btn btn-success ">DOWNLOAD NOW</button></div>
                    <hr/>
                   
                    
                </div>
                <div className="row text-light">
                    
                    <div className="text-light syn1 my-3"><span className="text-warning">Winding Up ❤️</span></div>
                    <div className="syn1">Thank You For Visiting VegaMovies.To The Prefect Spot For HD Bollywood Movies & TV Series Download. So Please Keep Downloading & Keep Sharing. Enjoy!</div>
                    
                   
                </div>
            
        </div>
        </>
    );
}