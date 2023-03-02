import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Editor from "../components/Editor";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "@Necodex/Markdown/Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Editor> = (args: any) => <Editor {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  placeholder: "Hello world!",
};