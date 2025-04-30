export interface LinkedinRecommendation {
  name: string;
  position: string;
  label: string;
  image: string;
  isGold?: boolean;
  recommendation: string;
}

export const linkedinRecommendations: LinkedinRecommendation[] = [
  {
    name: "Wojciech Świderski",
    position: "QA Engineer in Handsontable",
    label: "January 31, 2025, Wojciech worked with Saba on the same team",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQF8Auft8Q4Y9A/profile-displayphoto-shrink_100_100/B4EZS8PF7dHMAY-/0/1738324861267?e=1748476800&v=beta&t=aZdQUNG3Vsumu-bZmqIHSGHzmgqc830Vfu5PmrXSdII",
    recommendation:
      "Saba is a very friendly and approachable person, making communication effortless. He is highly detail-oriented, ensuring that every aspect of his work is precise and well thought out. Working with him was a pleasure, and I truly appreciated his dedication to quality.",
  },
  {
    name: "Wiktoria Szott",
    position: "Recruitment | People & Culture | HR | | EB | IT",
    label: "March 25, 2025, Wiktoria worked with Saba on the same team",
    isGold: true,
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQGVD5dzEfxPXg/profile-displayphoto-shrink_100_100/B4DZVEAgMpGcAY-/0/1740602738073?e=1748476800&v=beta&t=IdqU66WIY35bQowCtf5yFgReOBorZUfsTHRcfio4Wi8",
    recommendation:
      "Saba and I had the chance to work together as part of a team at Bejamas. He consistently showed a strong commitment to both personal growth and the success of the team, always ready to jump in whenever a challenge arose. Saba’s contributions were deeply appreciated and played a huge role in building a positive team spirit. :)",
  },
  {
    name: "Aleksandra Gontarz",
    position: "Software Tester | QA Engineer | Accessibility Enthusiast",
    label: "April 29, 2025, Aleksandra worked with Saba on the same team",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQEbU_1cOb31LQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1563102445369?e=1751500800&v=beta&t=gKQ3oZSyXT2l2PBUN-h_TyZeBIn0E9FJS3hzMPwyg5k",
    recommendation:
      "Working with Saba as a QA Engineer was a real pleasure. He’s a developer who truly cares about the quality of his work and pays attention to details that matter. Whenever an issue came up, he was always open to feedback and quick to collaborate on finding the best solution. His helpfulness, patience, and focus on getting things right made my job easier and our teamwork smooth. I’d be happy to work with him again on any project.",
  },
];
