import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: '',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/users',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: '',
    }},
    {
      _tag: 'CSidebarNavItem',
      name: 'InviteUsers',
      to: '/inviteUsers',
      icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
      badge: {
        color: 'info',
        text: '',
      }},
      {
        _tag: 'CSidebarNavItem',
        name: 'Invitations',
        to: '/invitations',
        icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
        badge: {
          color: 'info',
          text: '',
        }
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Reports',
      to: '/reports',
      icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon"/>,
      badge: {
        color: 'info',
        text: '',
      }
  }
]

export default _nav
