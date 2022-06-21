/** 
* Config file describes the dashboard routes and its components for each user role.
* Syntax:
    role_id: {
        `route-location`:{
            display_text: 'Dashboard', // the text to display in the sidebar
            component: Dashboard, // the component to render for the route
            icon: {
                component: HomeFilled, // the icon to display in the sidebar after the display_text (optional)
                fontSize: '150px'   // the font size of the icon (optional - defaults to 150px)
            },
        }
    }
*  
*/

import {
    HomeFilled,
    CalendarFilled,
    ToolFilled,
    ExportOutlined,
    HeartFilled,
    ShoppingCartOutlined,
    ReadOutlined,
    BookFilled,
    MessageFilled,
    CarryOutOutlined,
    FundProjectionScreenOutlined,
  } from '@ant-design/icons';

const ROLE_CONFIG = {
    1:{ // super_admin
        /** 
        *  @todo - add routes for super_admin
        *  
        */
    },
    2:{ // admin
        /** 
        * @todo - add routes for admin 
        */
    },
    3:{ // instructor
        /** 
        * @todo - add routes for instructor 
        */
    },
    4:{ // parent
        /** 
        * @todo - add routes for parent 
        */
       "/": {
            display_text: 'Dashboard',
            icon: {
                component: HomeFilled,
                fontSize: '150px'
            }
       },
       "/messages": {
            display_text: 'Messages',
            icon: {
                component: MessageFilled,
                fontSize: '150px'
            }
       },
       "/achievements": {
            display_text: 'Achievements',
       },
       "/calendar": {
            display_text: 'Calendar',
            icon: {
                component: CalendarFilled,
                fontSize: '150px'
            }
       },
       "/newsfeed": {
            display_text: 'News Feed',
            icon: {
                component: ReadOutlined,
                fontSize: '150px'
            }
       },
       "/cart": {
            display_text: 'Cart',
            icon: {
                component: ShoppingCartOutlined,
                fontSize: '150px'
            }
       }
    },
    5:{ // child
        /** 
        * @todo - add routes for child 
        */
    },
};

export default ROLE_CONFIG;