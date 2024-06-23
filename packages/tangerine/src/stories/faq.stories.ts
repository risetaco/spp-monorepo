import type { Meta, StoryObj } from "@storybook/react";
import FAQ from "../component/faq";

const meta = {
  title: "FAQ",
  component: FAQ,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof FAQ>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      { question: "What is Tangerine?", answer: "Tangerine is a design system for ShopeePay." },
      { question: "How do I use Tangerine?", answer: "You can use Tangerine by importing the components you need." },
    ],
  },
};
