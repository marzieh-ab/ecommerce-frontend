import styled,{css} from "styled-components"

export const ButtonStyle = css`

border:0;
padding:5px 15px;
border-radius:5px;
cursor: pointer;
display:inline-flex;
align-items:center;
text-decoration:none;
font-family: 'Poppins', sans-serif;
font-weight:500;
svg{
  height:16px
}

/* ${props => props.primary && css`
background-color:#5542F6;
color:#fff;
border: 1px solid #5542F6;
   
  `} */
${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #000;
  `}

  ${props => props.white && props.outline && css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}

  ${props => props.block && css`
    display: block;
    width: 100%;
  `}

  ${props => props.primary && !props.outline && css`
    background-color: #0D3D29;
    border: 1px solid: #0D3D29;
    color:#fff;
  `}
  ${props => props.primary && props.outline && css`
    background-color: transparent;
    border: 1px solid #0D3D29;
    color:#0D3D29;
  `}

  ${props => props.block && css`
    display: block;
    width: 100%;
  `}




  ${props => props.size === 'l' && css`
    font-size:1.2rem;
    padding: 10px 20px;
    svg{
  height:26px
}
   
  `}



`

const StyledButton=styled.button`
${ButtonStyle}


`;
function Button({children,...rest}) {
  return (
    <StyledButton  {...rest}>{children}</StyledButton>
  )
}

export default Button