import DownloadIcon from "./DownloadIcon"
import SVGIcon from "./SVGIcon"
import TelescopeIcon from "./TelescopeIcon"
import TelevisionIcon from "./TelevisionIcon"

function Card() {
  return (
    <>
        <h2>More reasons to join</h2>
        <div className="cards-container">
            <div className="card">
                <h2 className="card-heading">Enjoy on your TV</h2>
                <p className="card-text">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                <TelevisionIcon className="card-icons"/>
            </div>
            <div className="card">
                <h2 className="card-heading">Download your shows to watch offline</h2>
                <p className="card-text">Save your favourites easily and always have something to watch.</p>
                <DownloadIcon className="card-icons"/>
                
            </div>
            <div className="card">
                <h2 className="card-heading">Watch everywhere</h2>
                <p className="card-text">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                <TelescopeIcon className="card-icons"/>
            </div>
            <div className="card">
                <h2 className="card-heading">Create profiles for kids</h2>
                <p className="card-text">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                <SVGIcon className="card-icons"/>
            </div>
        </div>
    </>
  )
}

export default Card