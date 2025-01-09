"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const MdxRenderer = ({ rawContent }: { rawContent: string }) => {
  const [content, setContent] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      const serializedContent = await serialize(rawContent, {
        parseFrontmatter: false,
      });
      setContent(serializedContent);
    };

    loadContent();
  }, [rawContent]);

  if (!content) return <p>Loading...</p>;

  return <MDXRemote {...content} />;
};

export default MdxRenderer;
