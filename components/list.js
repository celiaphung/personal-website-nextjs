import Link from "next/link";
import styled from "styled-components";
import Button from "./button";
import {
  Company,
  LinkButton,
  LinkText,
  ListDetail,
  ListItem,
  Role,
} from "./styled";

export default function List(props) {
  const items = props.list.map((item) => (
    <div>
      {item.url ? (
        <ListItem>
          <Role>
            <LinkText href={item.url}>{item.role}</LinkText>
          </Role>

          <Company>
            {item.company} {item.date}
          </Company>
          <ListDetail>{item.detail}</ListDetail>
        </ListItem>
      ) : (
        <ListItem>
          <Role>{item.role}</Role>
          <Company>
            {item.company} {item.date}
          </Company>
          <ListDetail>{item.detail}</ListDetail>
        </ListItem>
      )}
    </div>
  ));

  return <ul>{items}</ul>;
}
