"use client";

import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ post }: { post: any }) => {
  const disqusShortname = "otakunime-4";
  const disqusConfig = {
    url:
      "https://otakunime.vercel.app/anime/" +
      post.slug +
      "/episodes/" +
      post.episodes,
    identifier: post.slug,
    title: post.title,
    language: "id_ID",
    sso: {
      name: "Otakunime",
      icon: "https://otakunime.vercel.app/favicon.ico",
      url: "https://otakunime.vercel.app",
      width: "500",
      height: "400",
    },
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-2 bg-white text-muted/20 dark:bg-muted/20 dark:text-muted/80">
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </div>
  );
};
export default DisqusComments;
