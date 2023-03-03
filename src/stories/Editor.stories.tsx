import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Editor from "../components/MarkdownEditor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "@Necodex/Markdown/Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Editor> = (args: any) => (
  <Editor {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};

export const ToJSON = Template.bind({});
ToJSON.args = {
  onChange: (editorState: any, editor: any) => {
    const state = editorState.toJSON();
    console.log(JSON.stringify(state));
  }
};
