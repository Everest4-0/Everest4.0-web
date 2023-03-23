import styled from "styled-components";


export const Banner = styled.div`

    height: 150px;
    background: url("/public/assets/img/header-orange-purple.jpg") no-repeat;
    background-size: cover;
    background-position: bottom;
       
`

export const Container = styled.div`

position: relative;
box-sizing: border-box;

`

export const Avatar = styled.img<any>`
    top: -60px;
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 100%;
`

export const UserName = styled.div`
    font-size: 1.9rem;
    margin: 0;
`

export const Email = styled.div`
    font-size: 1.2rem;
    
`