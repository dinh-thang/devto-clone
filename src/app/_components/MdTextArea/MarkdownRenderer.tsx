import React from 'react';
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({children, className=""} : {children: string, className?: string}) => {
  const processMarkdown = (text: string) => {
    return text
      // Headings (#, ##, ###, etc.)
      .replace(/(#+)(\S)/g, '$1 $2')

      // Blockquotes (>)
      .replace(/(>)(\S)/g, '$1 $2')

      // Unordered lists (-, *, +)
      .replace(/([-*+])(\S)/g, '$1 $2')

      // Emphasis and Bold (** or *)
      // Ensures a space before the start of an emphasis or bold syntax
      .replace(/(\*\*)(\S)/g, '$1 $2') // Bold
      .replace(/(\*)(\S)/g, '$1 $2')   // Italics

      // Inline code block (`)
      .replace(/(`)(\S)/g, '$1 $2');

  }

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <h1 className={`${className} text-[30px] font-bold`} {...props} />,
        h2: ({ node, ...props }) => <h2 className={`${className} text-[25px] font-bold`} {...props} />,
        p: ({ node, ...props }) => <p className={`${className} text-base`} {...props} />,
      }}
    >
      {processMarkdown(children)}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer; 