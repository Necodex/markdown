/// <reference types="react" />
type Props$1 = {
    onChange?: (content: string) => void;
    debounceOnChange?: number;
    outputFormat?: "markdown" | "json";
    initialMarkdown?: string;
    initialJSON?: string;
};
declare function Editor(props: Props$1): JSX.Element;

type Props = {
    contentJSON?: string;
    contentMarkdown?: string;
};
declare function MarkdownDisplay(props: Props): JSX.Element;

export { MarkdownDisplay, Editor as MarkdownEditor };
