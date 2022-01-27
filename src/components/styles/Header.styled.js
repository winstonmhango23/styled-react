
import styled  from "styled-components";

// styled Header component
export const StyledHeader = styled.header`
    
    background-color :${( { theme  }) => theme.colors.header};
    padding : 40px 0;
   
`
// styled Nav component
export const Nav = styled.nav`
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-bottom : 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        flex-direction : column;
    }

`
// styled Logo component
export const Logo = styled.img`
    width : 60px;
    height : 60px;
    @media(max-width: ${({theme}) => theme.mobile}){
    margin-bottom : 40px;
}
`

export const Image = styled.img`
    width : 375px;
    margin-left : 40px;

    @media(max-width: ${({theme}) => theme.mobile}){
        margin : 40px 0 30px;
    }
`