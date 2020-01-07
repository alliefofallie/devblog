import styled from 'styled-components';

const SocialLink = styled.a`
  border: 1px solid #bfc8d2;
  border-radius: 15px;
  color: #3e465b;
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 20px;
    margin-right: 0px;
    stroke: #6e849c;
    vertical-align: middle;
    width: 20px;
  }

  &:hover {
    border-color: #6d1be0;
  }
`;

export default SocialLink;
