import styled from "styled-components";

export const Container = styled.div`
  background: #0f172a;
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 10px;
  color: #fff;

  .logo {
    font-size: 1.2rem;
    margin-right: 35px;
  }

  .link {
    text-align: center;
    width: 80px;
  }
  .link.link-active {
    padding: 10px;
    background-color: #1e293b;
    border-radius: 0.25rem;
  }
`;

export const Items = styled.li`
  margin: 10px;
`;


export const SearchBox = styled.input`
  :focus {
    color: #fff;
  }
`;
