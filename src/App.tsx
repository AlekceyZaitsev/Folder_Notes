import React, {FC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {CreateFolder} from "./pages/CreateFolder";

const App: FC = () => {
    return (
        <Suspense fallback={<h1>Загрузка...</h1>}>
            <Routes>
                <Route path={'/'} element={<CreateFolder/>}></Route>
            </Routes>
        </Suspense>
    );
};

export default App