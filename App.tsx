import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './src/navigation/AppNavigation';

import {Colors} from './src/constants';

const App: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';
    useEffect(() => {
        SplashScreen.hide();
    });
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={true}
                barStyle="dark-content"
                backgroundColor={Colors.WHITE}
            />
            <AppNavigation />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
});

export default App;
