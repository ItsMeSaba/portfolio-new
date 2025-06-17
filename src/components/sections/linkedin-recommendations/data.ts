import MaciekPhoto from "@/assets/img/coworkers/maciek.jpg";
import WojciechPhoto from "@/assets/img/coworkers/wojciech.webp";
import WiktoriaPhoto from "@/assets/img/coworkers/wiktoria.webp";
import OlaPhoto from "@/assets/img/coworkers/ola.webp";

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
    name: "Maciej Kozlowski",
    position: "Engineering Manager at Backbase",
    label: "May 26, 2025 Maciej managed Saba directly",
    recommendation:
      "I've had the pleasure of working with Saba, and I can confidently say he's one of those rare developers you can truly count on. He brings not only solid JS skills and modern web development expertise but also a fantastic attitude and an easygoing personality that makes collaboration smooth and enjoyable. <br /><br /> Saba is always ready to jump in and help — you can rely on him 100%. His willingness to learn, adapt quickly to new situations, and take on challenges is truly impressive. He also establishes strong relationships with customers, always keeping communication clear and professional. <br /><br /> What stands out the most is his extreme ownership — he treats every task as if it’s his own product, driving it to completion with care and accountability. <br /><br /> Any team would be lucky to have him onboard!",
    image: MaciekPhoto.src,
  },
  {
    name: "Wojciech Świderski",
    position: "QA Engineer in Handsontable",
    label: "January 31, 2025, Wojciech worked with Saba on the same team",
    image: WojciechPhoto.src,
    recommendation:
      "Saba is a very friendly and approachable person, making communication effortless. He is highly detail-oriented, ensuring that every aspect of his work is precise and well thought out. Working with him was a pleasure, and I truly appreciated his dedication to quality.",
  },
  {
    name: "Wiktoria Szott",
    position: "Recruitment | People & Culture | HR | | EB | IT",
    label: "March 25, 2025, Wiktoria worked with Saba on the same team",
    isGold: true,
    image: WiktoriaPhoto.src,
    recommendation:
      "Saba and I had the chance to work together as part of a team at Bejamas. He consistently showed a strong commitment to both personal growth and the success of the team, always ready to jump in whenever a challenge arose. Saba’s contributions were deeply appreciated and played a huge role in building a positive team spirit. :)",
  },
  {
    name: "Aleksandra Gontarz",
    position: "Software Tester | QA Engineer | Accessibility Enthusiast",
    label: "April 29, 2025, Aleksandra worked with Saba on the same team",
    image: OlaPhoto.src,
    recommendation:
      "Working with Saba as a QA Engineer was a real pleasure. He’s a developer who truly cares about the quality of his work and pays attention to details that matter. Whenever an issue came up, he was always open to feedback and quick to collaborate on finding the best solution. His helpfulness, patience, and focus on getting things right made my job easier and our teamwork smooth. I’d be happy to work with him again on any project.",
  },
];
