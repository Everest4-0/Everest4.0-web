import React from 'react'

import { Route, Routes } from "react-router-dom";
import {MainCourse} from "./MainCourse"
export const Courses = () => {
    return (
        <Routes>
            <Route path={""} Component={MainCourse} />
            <Route path={"create"} Component={() => <>Create</>} />
            <Route path={"update/:id"} Component={() => <>Update</>} />
            <Route path={"show/:id"} element={<><hr/>Show</>} />
        </Routes>
    )
}
