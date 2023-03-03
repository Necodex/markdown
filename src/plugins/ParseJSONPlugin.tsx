import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

type Props = {
  contentJSON?: string;
};

export default function CodeHighlightPlugin(props: Props) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (props.contentJSON) {
      const editorState = editor.parseEditorState(props.contentJSON);
      editor.setEditorState(editorState);
      editor.update(() => {});
    }
  }, [editor, props.contentJSON]);
  return null;
}
