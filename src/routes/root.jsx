import { Outlet } from "react-router-dom"

const Root = ()=>{
    return <>
        <nav>
            test
        </nav>
        <div className="text-3xl">Hello world</div>
        <Outlet />
    </>
}

export default Root