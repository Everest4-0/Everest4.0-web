import React from "react";
import InternalChat from "../Components/Cards/InternalChat";
import LatestArticles from "../Components/Cards/LatestArticles";
import NotificationSettings from "../Components/Cards/NotificationSettings";
import ProfileInformation from "../Components/Cards/ProfileInformation";
import { Avatar, Banner, Container, Email, UserName } from "./Profile.style";

export default function Profile() {
  return (
    <>
      <Banner></Banner>
      <Container className="container">
        <div className="row mt-3">
          <div className="col-2">
            <Avatar
              className="img-thumbnail border-0"
              src="/public/assets/img/image-sign-up.jpg"
            />
          </div>
          <div className="col-5">
            <UserName className="title h4">Noah Mclaren</UserName>
            <Email>noah_mclaren@mail.com</Email>
          </div>

          <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3 text-sm-end">
            <a href="javascript:;" className="btn btn-sm btn-white me-2">
              Cancel
            </a>
            <a href="javascript:;" className="btn btn-sm btn-dark">
              Save
            </a>
          </div>
        </div>
      </Container>
      <Container className="mt-5">
        <div className="container my-3 py-3">
          <div className="row">
            <NotificationSettings />
            <ProfileInformation />
            <InternalChat />
            <LatestArticles />
          </div>
        </div>
      </Container>
    </>
  );
}
