import '../App.css';
import { NavLink } from 'react-router-dom';
import { Menu } from 'react-daisyui';

function NavMenu() {
    const isActive = ({ isActive }) =>
        isActive ? 'menu__item menu__item-active' : 'menu__item';

    return (
        <Menu className='menu bg-base-200 rounded-box mb-6' horizontal='true'>
            <Menu.Item>
                <NavLink className={isActive} to='/'>Главная</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink className={isActive} to={process.env.REACT_APP_FAVORITE}>Избранное</NavLink>
            </Menu.Item>
        </Menu>
    );
}

export default NavMenu;