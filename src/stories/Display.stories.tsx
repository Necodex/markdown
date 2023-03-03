import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Display from "../components/MarkdownDisplay";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "@Necodex/Markdown/Display",
  component: Display,
} as ComponentMeta<typeof Display>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Display> = (args: any) => (
  <Display {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};

export const fromJSON = Template.bind({});
fromJSON.args = {
  contentJSON: `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"listitem","version":1,"value":2}],"direction":"ltr","format":"","indent":0,"type":"list","version":1,"listType":"bullet","start":1,"tag":"ul"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"dsadsa","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`,
};
