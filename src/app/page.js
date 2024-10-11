import {Button, DatePicker, Space} from "antd";

export default function Home() {
    return <div style={{padding: '0 24px'}}>
        <h1>antd version: 3333</h1>
        <Space>
            <DatePicker/>
            <Button type="primary">Primary Button</Button>
        </Space>
    </div>;
}
