import { useState } from "react";
import "../styles/challengeDay.css";
import studentData from "../data/studentData";

function ChallengeDay() {
  const [githubRepo, setGithubRepo] = useState("");
  const [githubCommit, setGithubCommit] = useState("");
  const [linkedinPost, setLinkedinPost] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [saved, setSaved] = useState(false);

  const canSubmit =
    githubRepo.trim() &&
    githubCommit.trim() &&
    linkedinPost.trim();

  function handleSubmit(event) {
    event.preventDefault();
    if (canSubmit) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="challenge-page">
        <header className="challenge-header">
          <a href="/dashboard" className="back-button" aria-label="Back to dashboard">
            ←
          </a>
          <div className="challenge-day-label">
            DAY {studentData.currentDay} / {studentData.totalDays}
          </div>
          <div />
        </header>

        <main className="success-screen">
          <div className="success-icon">✓</div>
          <p className="challenge-label">PROOF SUBMITTED</p>

          <h1>
            DAY {studentData.currentDay}
            <br />
            <span>COMPLETE.</span>
          </h1>

          <p className="success-message">
            You showed up, built something, and proved your work.
            Keep the momentum going.
          </p>

          <div className="success-stats">
            <div>
              <strong>🔥 {studentData.streak + 1}</strong>
              <span>DAY STREAK</span>
            </div>
            <div>
              <strong>{studentData.currentDay} / {studentData.totalDays}</strong>
              <span>CHALLENGE PROGRESS</span>
            </div>
          </div>

          <a href="/dashboard" className="success-button">
            Back to dashboard
            <span>→</span>
          </a>
        </main>
      </div>
    );
  }

  return (
    <div className="challenge-page">
      <header className="challenge-header">
        <a href="/dashboard" className="back-button" aria-label="Back to dashboard">
          ←
        </a>

        <div className="challenge-day-label">
          DAY {studentData.currentDay} / {studentData.totalDays}
        </div>

        <div className="challenge-progress">
          {studentData.currentDay}
        </div>
      </header>

      <main>
        <section className="challenge-hero">
          <p className="challenge-label">TODAY'S BUILD</p>

          <h1>
            BUILD A
            <br />
            <span>RESPONSIVE</span>
            <br />
            LANDING PAGE.
          </h1>

          <p className="challenge-intro">
            Create a mobile-first landing page that clearly
            communicates a product and gives users a reason to act.
          </p>

          <div className="challenge-meta">
            <span>⏱ 45 MIN</span>
            <span>◈ FRONTEND</span>
            <span>● MEDIUM</span>
          </div>
        </section>

        <section className="challenge-section">
          <p className="challenge-section-label">WHAT TO BUILD</p>

          <div className="build-card">
            <div className="build-number">01</div>
            <div>
              <h2>Hero section</h2>
              <p>
                Create a clear headline, short description,
                and primary call-to-action.
              </p>
            </div>
          </div>

          <div className="build-card">
            <div className="build-number">02</div>
            <div>
              <h2>Feature section</h2>
              <p>
                Show three useful features using simple,
                scannable content.
              </p>
            </div>
          </div>

          <div className="build-card">
            <div className="build-number">03</div>
            <div>
              <h2>Responsive layout</h2>
              <p>
                Make the page work comfortably on a mobile
                screen and larger displays.
              </p>
            </div>
          </div>
        </section>

        <section className="challenge-section">
          <div className="hint-card">
            <span>💡</span>
            <div>
              <strong>BUILD TIP</strong>
              <p>
                Don't try to make everything perfect.
                Finish the core experience first, then polish.
              </p>
            </div>
          </div>
        </section>

        <section className="challenge-section">
          <div className="proof-heading">
            <p className="challenge-section-label">PROVE YOUR WORK</p>
            <span>3 LINKS REQUIRED</span>
          </div>

          <form className="submission-form" onSubmit={handleSubmit}>
            <label>
              <span>01 · GITHUB REPOSITORY</span>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={githubRepo}
                onChange={(event) => setGithubRepo(event.target.value)}
                required
                aria-label="GitHub repository URL"
              />
            </label>

            <label>
              <span>02 · GITHUB COMMIT</span>
              <input
                type="url"
                placeholder="https://github.com/.../commit/..."
                value={githubCommit}
                onChange={(event) => setGithubCommit(event.target.value)}
                required
                aria-label="GitHub commit URL"
              />
            </label>

            <label>
              <span>03 · LINKEDIN POST</span>
              <input
                type="url"
                placeholder="https://linkedin.com/posts/..."
                value={linkedinPost}
                onChange={(event) => setLinkedinPost(event.target.value)}
                required
                aria-label="LinkedIn post URL"
              />
            </label>

            <button
              type="submit"
              className="submit-button"
              disabled={!canSubmit}
            >
              Submit Day {studentData.currentDay}
              <span>→</span>
            </button>
          </form>

          <button
            type="button"
            className={`save-button ${saved ? "saved" : ""}`}
            onClick={() => setSaved((value) => !value)}
          >
            {saved ? "✓ Saved for later" : "Save this challenge for later"}
          </button>

          <p className="submission-note">
            Your links are mocked for this prototype.
            No real account connection is required.
          </p>
        </section>
      </main>

      <nav className="bottom-nav challenge-bottom-nav" aria-label="Primary navigation">
        <a href="/dashboard" className="bottom-nav-item">
          <span>⌂</span>
          Home
        </a>
        <a href="/day/12" className="bottom-nav-item active">
          <span>◆</span>
          Challenge
        </a>
        <a href="#" className="bottom-nav-item">
          <span>●</span>
          You
        </a>
      </nav>
    </div>
  );
}

export default ChallengeDay;
