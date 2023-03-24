import React from "react";
import { Avatar, Banner, Container, Email, UserName } from "./Profile.style";

export default function Profile() {
  return (
    <>
      <Banner></Banner>
      <Container className="container">
        <div className="row mt-3">
          <div className="col-2">
            <Avatar
              className="img-thumbnail"
              src="/public/assets/img/image-sign-up.jpg"
            />
          </div>
          <div className="col-5">
            <UserName className="title h4">Noah Mclaren</UserName>
            <Email>noah_mclaren@mail.com</Email>
          </div>

          <div className="col-3 text-end">Image</div>
        </div>
      </Container>
    </>
  );
}
