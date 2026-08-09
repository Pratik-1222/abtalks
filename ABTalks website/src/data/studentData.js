const studentData = {
  name: "Pakhi",
  currentDay: 12,
  totalDays: 60,
  streak: 11,
  completedDays: 12,

  todayTask: {
    day: 12,
    title: "Build a responsive landing page",
    description:
      "Create a mobile-first landing page that communicates a product clearly.",
    duration: "45 min",
  },

  proof: {
    githubCommits: 11,
    linkedinPosts: 10,
    todaySubmitted: false,
  },

  achievements: [
    {
      icon: "🔥",
      title: "7 Day Streak",
      description: "Built for 7 days in a row",
    },
    {
      icon: "💻",
      title: "First Build",
      description: "Completed your first challenge",
    },
    {
      icon: "📢",
      title: "10 Posts",
      description: "Shared 10 builds on LinkedIn",
    },
  ],
};

export default studentData;
