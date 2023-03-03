import { useEffect } from "react";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

type Props = {
  contentMarkdown?: string;
};

export default function MarkdownPlugin(props: Props) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (props.contentMarkdown) {
      editor.update(() => {
        $convertFromMarkdownString(props.contentMarkdown || "", TRANSFORMERS);
      });
    }
  }, [editor, props.contentMarkdown]);

  return null;
}
