/// <reference types="react" />
import "../themes/base_theme.scss";
type Props = {
    onChange?: (content: string) => void;
    debounceOnChange?: number;
    outputFormat?: "markdown" | "json";
    initialMarkdown?: string;
    initialJSON?: string;
};
export default function Editor(props: Props): JSX.Element;
export {};
