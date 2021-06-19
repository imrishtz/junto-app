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
import {Colors} from './src/constants';

const App: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={true}
                barStyle="dark-content"
                backgroundColor={Colors.WHITE}
            />
            <Provider store={store}>
                <AppNavigation />
            </Provider>
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
