import {createRouter, createWebHistory} from "vue-router";
import Home from "@/view/Home";
import Language from "@/view/Language";
import Record from "@/view/Record";
import RecordItem from "@/view/RecordItem";
import History from "@/view/History";
import About from "@/view/About";
import NewComment from "@/view/NewComment";
import Profile from "@/view/Profile";
import SelectWorker from "@/view/SelectWorker";
import AboutWorker from "@/view/AboutWorker";
import SelectDate from "@/view/SelectDate";
import SelectService from "@/view/SelectService";
import Ordering from "@/view/Ordering";
import Purse from "@/view/Purse";
import Certificate from "@/view/Certificate";
import Comments from "@/view/Comments";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/language',
        name: 'Язык',
        component: Language
    },
    {
        path: '/record',
        name: 'Мои записи',
        component: Record,
    },
    {
        path: '/record/:id',
        name: 'Запись',
        component: RecordItem,
        props: true
    },
    {
        path: '/history',
        name: 'История',
        component: History
    },
    {
        path: '/about',
        name: 'О компании',
        component: About
    },
    {
        path: '/new-comment',
        name: 'Обратная связь',
        component: NewComment
    },
    {
        path: '/profile',
        name: 'Профиль клиента',
        component: Profile
    },
    {
        path: '/select-worker',
        name: 'Выбор сотрудника',
        component: SelectWorker
    },
    {
        path: '/worker/:id',
        name: 'О сотруднике',
        component: AboutWorker,
        props: true
    },
    {
        path: '/select-date',
        name: '',
        component: SelectDate
    },
    {
        path: '/select-service',
        name: 'Выбор услуги',
        component: SelectService
    },
    {
        path: '/ordering',
        name: 'Оформление записи',
        component: Ordering
    },
    {
        path: '/purse',
        name: 'Кошелёк',
        component: Purse
    },
    {
        path: '/store',
        name: 'Магазин',
        component: Certificate
    },
    {
        path: '/comments',
        name: 'Отзывы',
        component: Comments
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router