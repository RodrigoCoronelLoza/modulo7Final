import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BasicDialog } from "../components/basicDialog";
import { AlertDialog } from "../components/alertDialog";
import { FormDialog } from "../components/formDialog";
import { DraggableDialog } from "../components/draggableDialog";
import { ScrollDialog } from "../components/scrollDialog";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Dialogs",
  component: BasicDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BasicDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicDialog> = (args) => (
  <BasicDialog {...args} />
);

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  label: "SIMPLE DIALOG",
};

const Template2: ComponentStory<typeof AlertDialog> = () => <AlertDialog />;
export const Alert = Template2.bind({});
// Alert.args = {
//   label: "ALERT",
// };

const Template3: ComponentStory<typeof FormDialog> = () => <FormDialog />;
export const Formulario = Template3.bind({});

const Template4: ComponentStory<typeof DraggableDialog> = () => (
  <DraggableDialog />
);
export const Arrastrable = Template4.bind({});

const Template5: ComponentStory<typeof ScrollDialog> = () => <ScrollDialog />;
export const Scroll = Template5.bind({});
