import { ControlFilled, SettingFilled } from "@ant-design/icons";
import { Outlet, history } from "@umijs/max";
import { Layout, Menu } from "antd";
import React from "react";
const MenuPaths: Record<string, string> = {
    add: "/connections"
}
const Index = () => {
    const items = [{ label: "连接", key: "add", icon: <ControlFilled /> }, { label: "设置", key: "setting", icon: <SettingFilled /> }]
    const onMenuClick = ({ key }: { key: string }) => {
        const path = MenuPaths[key]
        history.push(path)
    }
    return (
        <div style={{ height: "100vh", backgroundColor: "#FFFFFF", width: "100vw", display: "flex" }}>
            <div style={{ width: "120px", height: "100%", backgroundColor: "#FFFFFF", borderRight: "1px solid #F7F7F7" }}>
                <Menu onClick={onMenuClick} mode="vertical" items={items} style={{ border: "0" }} />
            </div>
            <div style={{width:"calc(100% - 121px)",padding:"24px"}}>
                <Outlet />
            </div>
        </div>)
}
export default React.memo(Index);