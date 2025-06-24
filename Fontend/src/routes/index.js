import PrivateRoutes from "../components/PrivateRoute";
import LayoutDefault from "../layout/LayoutDefault";
import Cart from "../pages/cart";
import Liked from "../pages/liked";
import Login from "../pages/login";
import Orders from "../pages/orders";
import Register from "../pages/register";
import TourDetail from "../pages/tour_detail";
import Home from "../pages/home";
import Tour from "../pages/tour";
import About from "../pages/about";
import Contact from "../pages/contact";
import Fags from "../pages/fags";
import Logout from "../pages/Logout";
import Admin from "../layout/admin";
import TourManage from "../pages/admin/tourmanagement";
import CateMana from "../pages/admin/category_manage";
import Usermana from "../pages/admin/usermanage";
import Ordermanage from "../pages/admin/ordermanage";

export const routers = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "detail/:slugOne",
        element: <TourDetail />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "alltour",
        element: <Tour />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },

      {
        path: "fags",
        element: <Fags />
      },
      {
        path: "liked",
        element: <Liked />
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "cart/:userID",
            element: <Cart />
          },
          {
            path: "success/:uID",
            element: <Orders />
          }
        ]
      }
    ]
  },
  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "tourmana",
        element: <TourManage />
      },
      {
        path: "catemana",
        element: <CateMana />
      },
      {
        path: "usermana",
        element:  <Usermana />
      },
      {
        path: "ordermana",
        element:  <Ordermanage />
      }
    ]
  },
];
