import { ConnectionsContextProvider } from "@/components/connections/ConnectionsContext"
import React from "react"
import List from "./components/List"

const Index = () => {
    return <ConnectionsContextProvider>
        <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div style={{ width: "300px", height: "100%", borderRight: "1px solid #F7F7F7", paddingRight:"24px"}}><List /></div>
            <div style={{ width: "calc(100% - 301px)", height: "100%", }}></div>
        </div>
    </ConnectionsContextProvider>
}
export default React.memo(Index)