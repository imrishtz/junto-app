import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {JColors} from '../constants';

interface Props {
    style?: TextStyle | TextStyle[];
}
const JText: React.FC<Props> = ({children, style}) => {
    return (
        <Text
            style={{
                ...styles.text,
                ...style,
            }}>
            {children}
        </Text>
    );
};
const styles = StyleSheet.create({
    text: {
        color: JColors.WHITE,
        textAlign: 'left',
    },
});

export default JText;
