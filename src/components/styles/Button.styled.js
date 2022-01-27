import styled from "styled-components";

export const Button = styled.button`
    border-radius : 10px;
    border : none;
    box-shadow : 0 0 10px rgb(0, 0, 0, 0.15);
    cursor : pointer;
    font-weght : 700;
    padding :15px 60px;

    background-color :${({bg}) => bg || '#fff'};
    color :${({color}) => color || '#333'};

    // nesting 
    &:hover {
        opacity : 0.9;
        transform : scale(0.98);
    }
`