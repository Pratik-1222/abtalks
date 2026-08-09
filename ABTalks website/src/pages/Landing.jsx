import "../styles/landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-nav">
        <div className="logo">
          AB<span>TALKS</span>
        </div>

        <button className="menu-button">☰</button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">60-DAY CODING CHALLENGE</p>

          <h1>
            60 DAYS
            <br />
            OF <span>BUILDING.</span>
          </h1>

          <p className="hero-description">
            Turn daily coding into proof of work.
            Build real projects, stay consistent,
            and make your progress visible.
          </p>

          <button className="primary-button">
            Start the challenge
            <span>→</span>
          </button>

          <div className="hero-stats">
            <div>
              <strong>60</strong>
              <span>DAYS</span>
            </div>
            <div>
              <strong>1</strong>
              <span>BUILD / DAY</span>
            </div>
            <div>
              <strong>2</strong>
              <span>PROOF POINTS</span>
            </div>
          </div>
        </section>

        <section className="section">
          <p className="section-label">HOW IT WORKS</p>

          <h2>
            SHOW UP.
            <br />
            <span>BUILD.</span>
            <br />
            REPEAT.
          </h2>

          <div className="steps">
            <div className="step">
              <span className="step-number">01</span>
              <div>
                <h3>Pick a track</h3>
                <p>Choose the path that matches what you want to build.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">02</span>
              <div>
                <h3>Build every day</h3>
                <p>Complete one focused challenge and keep your momentum going.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div>
                <h3>Prove your work</h3>
                <p>Push your work to GitHub and share it on LinkedIn.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">04</span>
              <div>
                <h3>Build your streak</h3>
                <p>Turn 60 days of consistency into visible proof.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="proof-card">
            <p className="section-label">YOUR WORK SHOULD SPEAK FOR YOU.</p>

            <h2>
              DON'T JUST
              <br />
              <span>LEARN.</span>
              <br />
              BUILD PROOF.
            </h2>

            <div className="proof-items">
              <div className="proof-item">
                <span>✓</span>
                <div>
                  <strong>GitHub</strong>
                  <p>Your code. Your commits. Your progress.</p>
                </div>
              </div>

              <div className="proof-item">
                <span>✓</span>
                <div>
                  <strong>LinkedIn</strong>
                  <p>Your journey becomes visible.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <p className="section-label">YOUR NEXT 60 DAYS</p>

          <h2>
            BUILD
            <br />
            SOMETHING
            <br />
            <span>REAL.</span>
          </h2>

          <p>
            One day. One build. One step closer to becoming
            the developer you want to be.
          </p>

          <button className="primary-button">
            Start Day 1
            <span>→</span>
          </button>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="logo">
          AB<span>TALKS</span>
        </div>
        <p>Build. Prove. Repeat.</p>
      </footer>
    </div>
  );
}

export default Landing;
