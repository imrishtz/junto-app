import React, {useEffect} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import store from './src/state/store';
import {Provider} from 'react-redux';
import {JColors} from './src/constants';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={true}
                barStyle="dark-content"
                backgroundColor={JColors.WHITE}
            />
            <Provider store={store}>
                <SafeAreaProvider>
                    <AppNavigation />
                </SafeAreaProvider>
            </Provider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: JColors.WHITE,
    },
});

export default App;
