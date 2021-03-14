import styled from "styled-components";

export const Button = styled.button`
height: 2.5rem;
width: 9rem;
border-radius: 5px;
background-color: ${(props) => props.theme.colors.buttonColor};
border: none;
margin-top: 2rem;
color:${(props) => props.theme.colors.textColor};
font-size: 14px;
&:active{
    background-color:#5a2290;
    border: none;
}
&:hover{
    background-color:#5a2290;
    border: none;
}
`;

