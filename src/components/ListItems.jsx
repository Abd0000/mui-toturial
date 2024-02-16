import * as React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {
  CreateOutlined,
  HomeOutlined,
  LogoutOutlined,
  PersonOutlined,
  PowerSettingsNewOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ListItems = () => {
  const navigate = useNavigate();
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/");
          }}
        >
          <ListItemIcon>
            <HomeOutlined color="inherit" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/create");
          }}
        >
          <ListItemIcon>
            <CreateOutlined />
          </ListItemIcon>
          <ListItemText primary="Create" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/profile");
          }}
        >
          <ListItemIcon>
            <PersonOutlined />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/settings");
          }}
        >
          <ListItemIcon>
            <PowerSettingsNewOutlined />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            navigate("/logout");
          }}
        >
          <ListItemIcon>
            <LogoutOutlined />
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ListItems;
