import React, { useCallback, useMemo } from "react";
// Lexical
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { TRANSFORMERS } from "@lexical/markdown";
// Plugins
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
// Nodes
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
// Custom plugins
import ToolbarPlugin from "../plugins/ToolbarPlugin";
import CodeHighlightPlugin from "../plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "../plugins/AutoLinkPlugin";
// Styles
import editorTheme from "../themes/BaseTheme";
import "../themes/base_theme.scss";

// Types
import type { EditorState, LexicalEditor } from "lexical";
import type { InitialConfigType } from "@lexical/react/LexicalComposer";

type Props = {
  onChange?: (editorState: EditorState, editor: LexicalEditor) => void;
  debounceOnChange?: number;
  initialState?: EditorState;
};

function Placeholder() {
  return <div className="editor-placeholder"></div>;
}

export default function Editor(props: Props) {
  const editorConfig = useMemo((): InitialConfigType => {
    return {
      namespace: "lexical",
      theme: editorTheme,
      // Error handling during update
      onError(error: any) {
        throw error;
      },
      nodes: [
        HeadingNode,
        QuoteNode,
        ListItemNode,
        ListNode,
        CodeHighlightNode,
        CodeNode,
        AutoLinkNode,
        LinkNode,
      ],
      ...(props.initialState && { editorState: props.initialState }),
    };
  }, [props.initialState]);

  var timeout: NodeJS.Timeout;
  const handleOnChange = useCallback(
    (editorState: EditorState, editor: LexicalEditor) => {
      if (props.onChange) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          props.onChange?.(editorState, editor);
        }, props.debounceOnChange || 500);
      }
    },
    [props.debounceOnChange, props.onChange]
  );

  return (
    <div className="markdown">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <OnChangePlugin onChange={handleOnChange} />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <AutoLinkPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          </div>
        </div>
      </LexicalComposer>
    </div>
  );
}
