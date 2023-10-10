import React, {FC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import ResetStyles from "@/styles/ResetStyles";
import {CreateFolder} from "@/pages/CreateFolder";
import {SpinnerStyles} from "@/styles/Spinner";
import {BeatLoader, ClipLoader, SyncLoader} from "react-spinners";

const App: FC = () => {

    return (
        <Suspense fallback={<SyncLoader color={"#36d7b7"} size={15} cssOverride={SpinnerStyles}/>}>
            <ResetStyles></ResetStyles>
            <Routes>
                <Route path={'/'} element={<CreateFolder/>}></Route>
            </Routes>
        </Suspense>
    );
};

export default App