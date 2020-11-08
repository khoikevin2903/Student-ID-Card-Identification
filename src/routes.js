import HomePage from './page/HomePage/HomePage';
import BaixePage from './page/BaiXePage/BaixePage';
import TimkiemPage from './page/TimkiemPage/TimkiemPage';

const ROUTES = [
    {
        path: '/',
        exact: true,
        main: HomePage
    },
    {
        path: '/baixe',
        exact: false,
        main: BaixePage
    },
    {
        path: '/timkiem',
        exact: false,
        main: TimkiemPage
    }
]

export default ROUTES;