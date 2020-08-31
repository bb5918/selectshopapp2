import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import './styles.css';
import Drawers from './Drawers';
export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          width: '100%',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ position: 'absolute', left: 0 }}>
              <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
            </div>

            <a href="/">Select Shop Map</a>
            <div
              style={{ position: 'absolute', right: 0, marginRight: '30px' }}
            >
              <Button type="primary">
                <UserOutlined />
              </Button>
            </div>
          </div>
        </div>

        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Drawers />
        </Drawer>
      </nav>
    </>
  );
}
