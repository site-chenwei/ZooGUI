import { ConnectionsContextProvider, useConnectionsContext } from "@/components/connections/ConnectionsContext"
import { Button } from "antd";
import React from "react"

const Index = () => {
    const { connections, currentConnection } = useConnectionsContext();
    return <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <Button>ADD</Button>
        {connections.map(connection => <div></div>)}
    </div>
}
export default React.memo(Index)