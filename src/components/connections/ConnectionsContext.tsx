import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
export interface Connection {

}
export interface ConnectionsContextState {
    currentConnection?: Connection,
    setCurrentConnection?: (connection: Connection) => void
    connections: Array<Connection>
}
const StorageKey = "_connections"
const ConnectionsContext = createContext<ConnectionsContextState>({ connections: [] });
export const useConnectionsContext = () => {
    return useContext(ConnectionsContext);
}
export const ConnectionsContextProvider = (props: PropsWithChildren) => {
    const [connections, _setConnections] = useState<Array<Connection>>([]);
    const [currentConnection, setCurrentConnection] = useState<Connection>();
    useEffect(() => {
        setConnections(JSON.parse(localStorage.getItem(StorageKey) || "[]"));
    }, [])
    const setConnections = (connections: Array<Connection>) => {
        console.log(connections)
        _setConnections(connections)
        localStorage.setItem(StorageKey, JSON.stringify(connections));
    }
    return <ConnectionsContext.Provider value={{ connections, currentConnection, setCurrentConnection }}>{props.children}</ConnectionsContext.Provider>
}