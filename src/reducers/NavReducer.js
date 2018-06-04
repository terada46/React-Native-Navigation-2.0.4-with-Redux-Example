import { AppNavigator } from '../components/AppNavigator';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state) || state;
}

export default NavReducer;