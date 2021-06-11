import React from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';

const App: React.FC = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color: 'black'}}>
                YO YO YO YOYOYO YOYO YO YO YO YOYOYO YOYOYO YO YO YOYOYO YOYOYO
                YO YO YOYOYO YOYOYO YO YO YOYOYO YOYOYO YO YO YOYOYO YOYOYO YO
                YO YOYOYO YOYOYO YO YO YOYOYO YOYO
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
