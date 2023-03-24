import React from 'react'

import { Route, Routes } from "react-router-dom";
import {MainCourse} from "./MainCourse"
import {ShowCourse} from "./ShowCourse"
export const Courses = () => {
    return (
        <Routes>
            <Route path={""} Component={MainCourse} />
            <Route path={"create"} Component={() => <>Create</>} />
            <Route path={"update/:id"} Component={() => <>Update</>} />
            <Route path={"show/:id"} Component={ShowCourse} />
        </Routes>
    )
}
