import styled from "styled-components";

export const Input = styled.input<{marginTop?: any;}>`
  border: 1px solid #54a0ff;
  padding: 0.5rem;
  font-size: 20px;
  background-color: #eee;
  margin-right: 1rem;
  width: 100%;
  margin-top: ${(props) => props.marginTop ? props.marginTop+'em' : null};
  
`;
