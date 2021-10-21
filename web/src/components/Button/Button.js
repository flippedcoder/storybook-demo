import styled from 'styled-components'

export const Button = ({type, label}) => <StyledButton type={type}>{label}</StyledButton>

const StyledButton = styled.button`
  background-color: ${props => props.type === "dark" ? "#25252a" : props.type === 'secondary' ? "#549495" : "939393" };
  color: ${props => props.type === "dark" ? "#fff" : "#000"};
  padding: 12px 24px;
`
