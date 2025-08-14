import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUserInfo, fetchUserInfo } from "@/store/modules/user";
import { getToken } from "@/utils";
import { Layout, Menu, message, Popconfirm } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Layout.css";

const { Header, Sider } = Layout;
const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "/publish",
    icon: <EditOutlined />,
  },
];
export default function GeekLayout() {
  const name = useSelector((state) => state.user.userInfo?.name);
  const navigate = useNavigate();

  function onMenuClick(route) {
    console.log(route);
    navigate(route.key);
  }

  function onConfirm() {
    try {
      dispatch(clearUserInfo());
      navigate("/login", { replace: true });
    } catch (error) {
      message.error(error);
    }
  }

  const location = useLocation();
  const selectedKey = location.pathname;

  const dispatch = useDispatch();
  useEffect(() => {
    const token = getToken();
    if (token && !name) {
      dispatch(fetchUserInfo());
    }
  }, []);

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
              onConfirm={onConfirm}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}
            onClick={onMenuClick}
            items={items}
            style={{ height: "100%", borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由的出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
}
