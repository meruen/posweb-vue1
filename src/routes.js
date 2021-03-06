import Login from "./components/Login";
import Home from "./components/Home";
import ListTaskGroup from "./components/ListTaskGroup";
import ShowTaskGroup from "@/components/ShowTaskGroup";
import NewTaskGroup from "@/components/NewTaskGroup";
import EditTaskItem from "@/components/EditTaskItem";
import FormTaskItem from "@/components/FormTaskItem";

export const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'taskgroups',
        path: '/taskgroups',
        component: ListTaskGroup,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'showtaskgroup',
        path: '/taskgroup/:id',
        component: ShowTaskGroup,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'newtaskgroup',
        path: '/taskgroups/new',
        component: NewTaskGroup,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'edittaskitem',
        path: '/taskitems',
        component: EditTaskItem,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'formtaskitem',
        path: '/taskitem/:id',
        component: FormTaskItem,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '*', component: Home
    }
]