import { StyledButton } from "./styled";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.url}>
      <StyledButton>{props.name}</StyledButton>
    </Link>
  );
}
