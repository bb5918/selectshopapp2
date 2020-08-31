import React, { useState } from 'react';
import { Switch, Select } from 'antd';
const { Option } = Select;

export default function Drawers() {
  return (
    <div>
      <p>StyleFilter</p>
      <div style={{ display: 'flex' }}>
        <p>Hippie </p>
        <div style={{ position: 'absolute', right: '20px' }}>
          <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Mori </p>
        <div style={{ position: 'absolute', right: '20px' }}>
          <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <p>Highteen </p>
        <div style={{ position: 'absolute', right: '20px' }}>
          <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
        </div>
      </div>
      <br />
      <div>
        <p>Where</p>
        <p>지역별 검색</p>
        <Select defaultValue="seoul" style={{ width: 120 }}>
          <Option value="seoul">서울</Option>
          <Option value="gyeonggi">경기</Option>
          <Option value="busan">부산</Option>
        </Select>
      </div>
    </div>
  );
}
