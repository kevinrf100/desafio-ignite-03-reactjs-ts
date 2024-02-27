import Markdown from "react-markdown";
import { PostContentContainer } from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Components } from "hast-util-to-jsx-runtime";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  const MarkdownComponents: Partial<Components> = {
    code(props) {
      const { children, className, ...rest } = props;
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          language={match[1]}
          style={dracula}
          ref={null}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <PostContentContainer>
      <Markdown components={MarkdownComponents}>{content}</Markdown>
    </PostContentContainer>
  );
}
