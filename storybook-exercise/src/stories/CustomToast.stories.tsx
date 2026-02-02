import type { Meta, StoryObj } from "@storybook/react-vite";
import CustomToast from "./CustomToast";

const meta: Meta<typeof CustomToast> = {
  title: "Components/CustomToast",
  component: CustomToast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CustomToast>;

export const Success: Story = {
  args: {
    status: "success",
    text: "Worked succesfully",
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    text: "It's giving you a warning.",
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    status: "error",
    text: "There's an error.",
    hasIcon: true,
  },
};
