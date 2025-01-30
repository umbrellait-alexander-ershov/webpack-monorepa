import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

import { variantTypes } from "../button.constants";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Page: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    text: "Click me!",
    onClick: () => console.log("Click!"),
    variant: "primary",
  },
  argTypes: {
    text: { control: "text" },
    onClick: () => console.log("Click!"),
    variant: { control: "inline-radio", options: variantTypes },
  },
};
