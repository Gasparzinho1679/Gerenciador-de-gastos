import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";

export default function AppRoutes(){
    return(
        <Drawer.Navigator
         drawerContent={(props) => <CustomDrawer {...props}/>}
         screenOptions={{
            headerShown: false,

            drawerStyle:{
                backgroundColor: "#fff",
                paddingTop: 20,
            },
            drawerActiveBackgroundColor: '#3b3dbf',
            drawerActiveTintColor: '#fff',
            drawerInactiveBackgroundColor: '#f0f2ff',
            drawerInactiveTintColor: '#121212'
        }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Registrar" component={New}/>
            <Drawer.Screen name="Perfil" component={Profile}/>
        </Drawer.Navigator>
    )
}