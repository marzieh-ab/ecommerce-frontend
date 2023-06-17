import Link from "next/link"
import { ButtonStyle } from "./Button"
import styled ,{css} from "styled-components"

const StyledLink=styled(Link)`
${ButtonStyle}
`
function ButtonLink(props) {
  return (
   <StyledLink {...props} />
  )
}

export default ButtonLink