import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items : center;
    background-color : #fff;
    border-radius : 15px;
    box-shadow : 0 0 10px rgba(0, 0, 0, 0.15);
    margin : 40px 0;
    padding : 60px;
    // reversing the image layout position order
    flex-direction : ${({layout}) =>layout || 'row' };

    // adjust image size to 80%
    img {
        width : 80%;
    }
    // set the imediate div to flex 1
    & > div {
        flex : 1;
    }
    // set media query for mobile responsive

    @media(max-width : ${({theme}) => theme.mobile}) {
        flex-direction : column;
    }


`