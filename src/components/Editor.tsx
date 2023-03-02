import React, { useState } from "react";
import { Editor as DraftEditor, EditorState, RichUtils } from "draft-js";
import "./editor.scss";

type Props = {
  placeholder?: string;
  textAlignment?: "left" | "center" | "right";
  autoCapitalize?: "off" | "on" | "none" | "sentences" | "words" | "characters";
  spellCheck?: boolean;
  stripPastedStyles?: boolean;
};

export default function Editor(props: Props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (
    command: string,
    editorState: EditorState,
    eventTimestamp: number
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  }

  return (
    <div>
      <button onClick={onBoldClick}>Bold</button>
      <DraftEditor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
        // hardcoded
        autoComplete="off"
        autoCorrect="off"
        // from props
        placeholder={props.placeholder}
        textAlignment={props.textAlignment}
        autoCapitalize={props.autoCapitalize}
        spellCheck={props.spellCheck}
        stripPastedStyles={props.stripPastedStyles}
      />
    </div>
  );
}
