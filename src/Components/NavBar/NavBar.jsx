import './NavBar.css'

const NavBar = (props) => {
    return ( 
        <div className="navbar">
            <div className="social"><img className='image' src={require("../../Assets/images/icons8-facebook-96.png")} alt="facebook" /></div>
            <div className="social"><img className='image' src={require("../../Assets/images/icons8-instagram-96.png")} alt="instagram" /></div>
            <div className="social"><img className='image' src={require("../../Assets/images/icons8-twitter-96.png")} alt="twitter" /></div>
            <div className="social"><img className='image' src={require("../../Assets/images/icons8-youtube-96.png")} alt="youtube" /></div>
            <div className="social"><img className='image' src={require("../../Assets/images/icons8-tiktok-96.png")} alt="tiktok" /></div>
            <div className='social'><img className="button-image"src={require("../../Assets/images/search.png")} /></div>
        </div>
     );
}
 
export default NavBar;