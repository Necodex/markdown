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
  outputFormat: "json",
  onChange: (content) => {
    console.log(content);
  },
};

export const ToMarkdown = Template.bind({});
ToMarkdown.args = {
  outputFormat: "markdown",
  onChange: (content) => {
    console.log(content);
  },
};

export const initialJSON = Template.bind({});
initialJSON.args = {
  initialJSON: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsadsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
};

export const initialMarkdown = Template.bind({});
initialMarkdown.args = {
  initialMarkdown: `# Prueba

  Con un parrafo abajo que tiene **negritas** en medio.`,
};
