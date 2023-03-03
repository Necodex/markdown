import React from "react";
import { useMemo } from "react";
// Lexical
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
// Nodes
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
// Plugins
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
// Custom plugins
import ParseMarkdownPlugin from "../plugins/ParseMarkdownPlugin";
import ParseJSONPlugin from "../plugins/ParseJSONPlugin";
// Styles
import editorTheme from "../themes/BaseTheme";
import "../themes/base_theme.scss";
// Types
import type { InitialConfigType } from "@lexical/react/LexicalComposer";

type Props = {
  contentJSON?: string;
  contentMarkdown?: string;
};

export default function MarkdownDisplay(props: Props) {
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
      editable: false,
    };
  }, []);

  return (
    <div className="markdown">
      <LexicalComposer initialConfig={editorConfig}>
        <div className="display-container">
          <div className="display-inner">
            <RichTextPlugin
              contentEditable={
                <ContentEditable className="content-display" />
              }
              placeholder={<></>}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <ParseMarkdownPlugin contentMarkdown={props.contentMarkdown} />
            <ParseJSONPlugin contentJSON={props.contentJSON} />
          </div>
        </div>
      </LexicalComposer>
    </div>
  );
}
