import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Menu from '../../config/menu';
import { Users } from "../../models/Users";
import { IMenuItem } from "../../models/MenuItems";
import { Roles } from "../../models/Roles";

const Navbar = styled.ul`
  width: 100%;
  height: auto;
  background-color: #54a0ff;
  height: 90vh;

  a {
    text-decoration: none;
  }

  .active {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: black;
  }
`;

const NavbarItem = styled.li`
  color: #fff;
  padding: 1rem;
  padding: 1rem 1rem 1rem 2em;
  list-style: none;
  width: 100%;
  font-weight: bold;
  font-size: 17px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: black;
  }
`;

type SidebarProps = {
  currentUser: Users
}

const Sidebar = ({currentUser} : SidebarProps) =>  {

  useEffect(() => {

  }, [])

  const renderLogInMenuItems = () =>{
    let menuItemsFiltered: IMenuItem[] = [];
    
    Menu.LogInMenuItems.forEach((item: IMenuItem) => {
      for (let index = 0; index < currentUser.roles.length; index++) {
        const role: Roles = currentUser.roles[index];
        if(item.access.includes(role.name)){
          menuItemsFiltered.push(item);
          break;
        }
       
      }
    });


  return menuItemsFiltered.map((item: IMenuItem, i: number) => (
    <NavLink onClick={item.onClick} key={i} to={item.pathname} activeClassName="active">
    <NavbarItem>
      <i className={item.icon}></i> {item.title}
    </NavbarItem>
  </NavLink>
  ));


  }

  const renderLogOutMenuItems = () =>{
    return Menu.LogOutMenuItems.map((item: IMenuItem, i: number) => (
      <NavLink key={i} to={item.pathname} activeClassName="active">
      <NavbarItem>
        <i className={item.icon}></i> {item.title}
      </NavbarItem>
    </NavLink>
    ));
  }
return(
  <div>
    <nav>
      <Navbar>
        {currentUser == null ? renderLogOutMenuItems() : renderLogInMenuItems()}
      </Navbar>
    </nav>
  </div>
)
}

export default Sidebar;
