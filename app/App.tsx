import { View, Text } from "react-native";
import Header from "./components/Header/header";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./pages/main";
import Footer from "./components/Footer/footer";
import AppRoutes from "./routes/AppRoutes";

/**
 * App: Componente principal do aplicativo.
 * @returns Componente de aplicativo.
 */


export default function App() { 
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <AppRoutes />
                <Footer />
            </SafeAreaView>
       </SafeAreaProvider>

    )

}