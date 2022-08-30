import AuthorizationPage from "./pages/auth";
import BlogDetailPage from "./pages/blogDetail";
import BlogsPage from "./pages/blogs";
import NewBlog from "./pages/newBlog";
import { BLOGS_ROUTE, LOGIN_ROUTE, NEW_BLOG_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

// export const authRoutes = [
    
// ];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthorizationPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthorizationPage
    },
    {
        path: BLOGS_ROUTE,
        Component: BlogsPage
    },
    {
        path: BLOGS_ROUTE + '/:id',
        Component: BlogDetailPage
    },
    {
        path: NEW_BLOG_ROUTE,
        Component: NewBlog
    }
]