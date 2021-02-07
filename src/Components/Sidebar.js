import {
  DeleteOutline,
  ImportantDevices,
  InsertDriveFile,
  PeopleAlt,
  QueryBuilder,
  StarBorder,
  Storage,
} from "@material-ui/icons";
import React from "react";
import "../css/Sidebar.css";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NewFile />
      <div className="sidebar__itemsContainer">
        <SidebarItem arrow icon={<InsertDriveFile />} label={"My Drive"} />
        <SidebarItem arrow icon={<ImportantDevices />} label={"Computers"} />
        <SidebarItem icon={<PeopleAlt />} label={"Shared with me"} />
        <SidebarItem icon={<QueryBuilder />} label={"Recent"} />
        <SidebarItem icon={<StarBorder />} label={"Starred"} />
        <SidebarItem icon={<DeleteOutline />} label={"Bin"} />
        <hr />
        <SidebarItem icon={<Storage />} label={"Storage"} />
      </div>
    </div>
  );
};

export default Sidebar;
