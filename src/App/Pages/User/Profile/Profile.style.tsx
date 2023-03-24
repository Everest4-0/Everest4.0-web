import styled from "styled-components";

export const Banner = styled.div`
  height: 150px;
  background: url("/public/assets/img/header-orange-purple.jpg") no-repeat;
  background-size: cover;
  background-position: bottom;
`;

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const Avatar = styled.img<any>`
  margin-top: -60px;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  @media screen and (max-width: 766px) and (min-width: 576px) {
    
  width: 110px;
  height: 110px;
    
  }
`;

export const UserName = styled.div`
  font-size: 1.9rem;
  margin: 0;
`;

export const Email = styled.div`
  font-size: 1.2rem;
`;
