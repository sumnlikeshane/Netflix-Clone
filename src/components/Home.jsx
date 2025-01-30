import ArrowRight from './ArrowRight';
function Home() {
  return (
        <div className="main">
        <div className="main-content">
          <h1 className="main-title">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="main-subtitle">
          Starts at ₹149. Cancel at any time.
          </h2>
          <p className="main-text">
          Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="email-signup">
            <input 
              type="email" 
              className="email-input" 
              placeholder="Email address"
            />
            <button type="submit" className="get-started-btn">
              Get Started
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>
  )
}

export default Home