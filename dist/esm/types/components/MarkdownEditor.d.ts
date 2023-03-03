/// <reference types="react" />
import "../themes/base_theme.scss";
import type { EditorState, LexicalEditor } from "lexical";
type Props = {
    onChange?: (editorState: EditorState, editor: LexicalEditor) => void;
    debounceOnChange?: number;
    initialJSON?: string;
};
export default function Editor(props: Props): JSX.Element;
export {};
