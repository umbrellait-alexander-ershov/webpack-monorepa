import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Page: Story = {
  render: (args: any) => <Input {...args} />,
  args: {
    type: "text",
    onChange: () => console.log("Tap!"),
    placeholder: "primary",
    disabled: false,
    defaultValue: "input",
  },
  argTypes: {
    type: { control: "select", options: ["text", "password", "email"] },
    onChange: () => console.log("Tap!"),
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    defaultValue: { control: "text" },
  },
};
