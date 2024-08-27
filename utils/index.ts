import { Metadata } from "next";

export function constructMetadata({
  title = "LearnGo - Craft Engaging and Effective Quizzes",
  description = "LearnGo empowers you to create dynamic quizzes that captivate your audience, reinforce learning, and measure understanding with ease.",
  icons = "./../public/assets/logo.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    icons,
    metadataBase: new URL(
      "https://thankful-tree-0c8d80b03.5.azurestaticapps.net"
    ),
  };
}
