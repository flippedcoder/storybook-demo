import { Button } from './Button'

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: 'secondary',
  label: 'Secondary Button',
};

export const Dark = Template.bind({});

Dark.args = {
  type: 'dark',
  label: 'Dark Button',
};

export default { component: Button, title: 'Components/Button' }
