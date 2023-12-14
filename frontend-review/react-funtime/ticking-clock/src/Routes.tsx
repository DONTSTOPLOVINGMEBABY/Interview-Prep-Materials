import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Clock1 from "./components/clock-1"

function Router () {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/clock-1" element={<Clock1/>} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router