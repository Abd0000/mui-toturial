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
import { useLocation, useNavigate } from "react-router-dom";
import { Brightness4Outlined, Brightness7Outlined } from "@mui/icons-material";
import { Divider, IconButton, useTheme } from "@mui/material";

const list = [
  {
    path: "/",
    text: "Home",
    icon: <HomeOutlined color="inherit" />,
  },
  {
    path: "/create",
    text: "Create",
    icon: <CreateOutlined />,
  },
  {
    path: "/profile",
    text: "Profile",
    icon: <PersonOutlined />,
  },
  {
    path: "/settings",
    text: "Settings",
    icon: <PowerSettingsNewOutlined />,
  },
  {
    path: "/logout",
    text: "LogOut",
    icon: <LogoutOutlined />,
  },
];

const ListItems = ({ setMyMode }) => {
  //to get the theme status
  const myMode = useTheme();

  //to navigate to the different pages without reloading the page
  const navigate = useNavigate();

  //to get the current location of the page
  const currentLocation = useLocation();

  return (
    <List>
      <ListItem
        disablePadding
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <IconButton
          sx={{ height: "55px", width: "55px" }}
          onClick={() => {
            //to change the theme status and store it in the local storage
            localStorage.setItem(
              "mode",
              myMode.palette.mode === "dark" ? "light" : "dark"
            );

            //to change the theme status
            setMyMode(myMode.palette.mode === "dark" ? "light" : "dark");
          }}
          color="inherit"
        >
          {myMode.palette.mode === "dark" ? (
            <Brightness7Outlined sx={{ color: "orange" }} />
          ) : (
            <Brightness4Outlined /> ////to change the icon according to the theme status
          )}
        </IconButton>
      </ListItem>
      <Divider />

      {/* //a function to map the list of items and display them in the sidebar */}
      {list.map((item) => {
        return (
          <ListItem
            key={item.path}
            disablePadding
            sx={{
              backgroundColor:
                currentLocation.pathname === item.path ? "grey.main" : null, //to change the background color of the current page
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListItems;
