import { StyledButton } from "./styled";

export default function Button(props) {
  return <StyledButton href={props.url}>{props.name}</StyledButton>;
}
