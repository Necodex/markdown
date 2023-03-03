import React, { useCallback, useMemo } from "react";
// Lexical
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";

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
import ParseMarkdownPlugin from "../plugins/ParseMarkdownPlugin";
import ParseJSONPlugin from "../plugins/ParseJSONPlugin";
// Styles
import editorTheme from "../themes/BaseTheme";
import "../themes/base_theme.scss";

// Types
import type { EditorState, LexicalEditor } from "lexical";
import type { InitialConfigType } from "@lexical/react/LexicalComposer";

type Props = {
  onChange?: (content: string) => void;
  debounceOnChange?: number;
  outputFormat?: "markdown" | "json";
  initialMarkdown?: string;
  initialJSON?: string;
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
    };
  }, []);

  var timeout: NodeJS.Timeout;
  const handleOnChange = useCallback(
    (editorState: EditorState, editor: LexicalEditor) => {
      if (props.onChange) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          const outputFormat = props.outputFormat || "markdown";
          if (outputFormat === "markdown") {
            editor.update(() => {
              const markdown = $convertToMarkdownString(TRANSFORMERS);
              props.onChange?.(markdown);
            });
          }
          if (outputFormat === "json") {
            const json = JSON.stringify(editorState.toJSON());
            props.onChange?.(json);
          }
        }, props.debounceOnChange || 500);
      }
    },
    [props.debounceOnChange, props.onChange, props.outputFormat]
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
            <ParseMarkdownPlugin contentMarkdown={props.initialMarkdown} />
            <ParseJSONPlugin contentJSON={props.initialJSON} />
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
