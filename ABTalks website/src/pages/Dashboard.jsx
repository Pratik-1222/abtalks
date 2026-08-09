import "../styles/dashboard.css";
import studentData from "../data/studentData";

function Dashboard() {
  const progress =
    (studentData.completedDays / studentData.totalDays) * 100;

  const isFirstDay = studentData.currentDay === 1;
  const hasMissedDay = studentData.streak === 0 && studentData.completedDays > 0;
  const hasProfile = Boolean(studentData.name);

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="logo">AB<span>TALKS</span></div>

        <div
          className="profile-dot"
          aria-label={hasProfile ? `${studentData.name} profile` : "Profile"}
        >
          {hasProfile ? studentData.name.charAt(0) : "?"}
        </div>
      </header>

      <section className="greeting">
        <p className="dashboard-label">
          {isFirstDay ? "DAY 1 START" : "YOUR JOURNEY"}
        </p>

        <h1>
          {hasProfile ? "Good evening," : "Welcome to ABTalks,"}
          <br />
          <span>{hasProfile ? `${studentData.name} 👋` : "builder 👋"}</span>
        </h1>

        <p>
          {isFirstDay
            ? "Your first build starts today."
            : hasMissedDay
              ? "One missed day doesn't erase your progress."
              : "Ready to build something today?"}
        </p>
      </section>

      {hasMissedDay ? (
        <section className="recovery-card">
          <div className="recovery-icon">↻</div>
          <div>
            <p className="small-label">MOMENTUM RECOVERY</p>
            <h2>Your progress is still here.</h2>
            <p>
              Your streak reset, but your completed builds never disappear.
              Start today's challenge and begin a new streak.
            </p>
            <a href="/day/12">Restart momentum →</a>
          </div>
        </section>
      ) : (
        <section className="streak-card">
          <div className="streak-top">
            <div>
              <span className="fire">{isFirstDay ? "🌱" : "🔥"}</span>
              <div>
                <p className="small-label">
                  {isFirstDay ? "STARTING STREAK" : "CURRENT STREAK"}
                </p>
                <strong className="streak-number">
                  {studentData.streak}
                </strong>
                <span className="streak-text">DAYS</span>
              </div>
            </div>

            <span className="day-count">
              DAY {studentData.currentDay}
            </span>
          </div>

          <div className="progress-info">
            <span>
              {studentData.completedDays} / {studentData.totalDays} days
            </span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.max(progress, isFirstDay ? 2 : 0)}%` }}
            />
          </div>
        </section>
      )}

      <section className="dashboard-section">
        <div className="section-heading">
          <span>TODAY'S BUILD</span>
          <span className="day-badge">
            DAY {studentData.todayTask.day}
          </span>
        </div>

        <div className="task-card">
          <p className="task-label">
            {isFirstDay ? "YOUR FIRST CHALLENGE" : "TODAY'S CHALLENGE"}
          </p>

          <h2>{studentData.todayTask.title}</h2>

          <p className="task-description">
            {studentData.todayTask.description}
          </p>

          <div className="task-meta">
            <span>⏱ {studentData.todayTask.duration}</span>
            <span>💻 BUILD</span>
          </div>

          <a href="/day/12" className="task-button">
            {isFirstDay ? "Start building" : "Continue building"}
            <span>→</span>
          </a>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <span>YOUR PROOF</span>
          <span className="section-count">
            {studentData.proof.githubCommits +
              studentData.proof.linkedinPosts}
          </span>
        </div>

        <div className="proof-list">
          <div className="proof-row">
            <span className="proof-icon">
              {studentData.proof.githubCommits > 0 ? "✓" : "○"}
            </span>
            <div>
              <strong>GitHub commits</strong>
              <p>
                {studentData.proof.githubCommits > 0
                  ? `${studentData.proof.githubCommits} completed`
                  : "No commits yet"}
              </p>
            </div>
          </div>

          <div className="proof-row">
            <span className="proof-icon">
              {studentData.proof.linkedinPosts > 0 ? "✓" : "○"}
            </span>
            <div>
              <strong>LinkedIn posts</strong>
              <p>
                {studentData.proof.linkedinPosts > 0
                  ? `${studentData.proof.linkedinPosts} published`
                  : "No posts yet"}
              </p>
            </div>
          </div>

          <div className="proof-row pending">
            <span className="proof-icon">
              {studentData.proof.todaySubmitted ? "✓" : "○"}
            </span>
            <div>
              <strong>Today's proof</strong>
              <p>
                {studentData.proof.todaySubmitted
                  ? "Submitted"
                  : "Pending submission"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-section achievements-section">
        <div className="section-heading">
          <span>ACHIEVEMENTS</span>
          <span className="section-count">
            {studentData.achievements.length}
          </span>
        </div>

        {studentData.achievements.length > 0 ? (
          <div className="achievements">
            {studentData.achievements.map((achievement) => (
              <div className="achievement-card" key={achievement.title}>
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <strong>{achievement.title}</strong>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-achievements">
            <span>✦</span>
            <div>
              <strong>Your first badge is waiting.</strong>
              <p>Complete your first challenge to unlock it.</p>
            </div>
          </div>
        )}
      </section>

      <nav className="bottom-nav" aria-label="Primary navigation">
        <a href="/dashboard" className="bottom-nav-item active">
          <span>⌂</span>
          Home
        </a>

        <a href="/day/12" className="bottom-nav-item">
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

export default Dashboard;
