import Link from "next/link";
import styled from "styled-components";
import Button from "./button";
import { LinkButton, LinkText } from "./styled";

export default function List(props) {
  const Item = styled.li`
    margin-top: 30px;
    list-style: none;
  `;
  const DescriptionHead = styled.div`
    margin: 5px 0;
  `;

  const Role = styled.h3`
    margin-bottom: 5px;
  `;
  const Company = styled.p`
    color: #b0aeae;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 17px;
  `;
  const Detail = styled.p`
    margin-top: 5px;
    font-size: 15px;
  `;

  const items = props.list.map((exp) => (
    <div>
      {exp.url ? (
        <Item>
          <Role>
            <LinkText href={exp.url}>{exp.role}</LinkText>
          </Role>

          <Company>
            {exp.company} {exp.date}
          </Company>
          <Detail>{exp.detail}</Detail>
        </Item>
      ) : (
        <Item>
          <Role>{exp.role}</Role>
          <Company>
            {exp.company} {exp.date}
          </Company>
          <Detail>{exp.detail}</Detail>
        </Item>
      )}
    </div>
  ));

  return <ul>{items}</ul>;
}
