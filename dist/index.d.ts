/// <reference types="react" />
import { EditorState, LexicalEditor } from 'lexical';

type Props$1 = {
    onChange?: (editorState: EditorState, editor: LexicalEditor) => void;
    debounceOnChange?: number;
    initialState?: EditorState;
};
declare function Editor(props: Props$1): JSX.Element;

type Props = {
    contentJSON?: string;
};
declare function MarkdownDisplay(props: Props): JSX.Element;

export { MarkdownDisplay, Editor as MarkdownEditor };
