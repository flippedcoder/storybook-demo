import styled from 'styled-components'

export const Primary = () => <Button type="primary">Primary Button</Button>

export const Secondary = () => <Button type="secondary">Secondary</Button>

export const Dark = () => <Button type="dark">Dark</Button>

const Button = styled.button`
  background-color: ${props => props.type === "dark" ? "#25252a" : props.type === 'secondary' ? "#549495" : "939393" };
  color: ${props => props.type === "dark" ? "#fff" : "#000"};
  padding: 12px 24px;
`
