import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

import Signin from "../pages/Signin";
import SignUP from "../pages/SignUP";

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
            <AuthStack.Screen name="SignUp" component={SignUP} options={{
                headerStyle:{
                    backgroundColor: '#3b3dbf',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerTitle: 'Voltar',
                headerBackTitleVisible: false
            }}/>
        </AuthStack.Navigator>
    )
}