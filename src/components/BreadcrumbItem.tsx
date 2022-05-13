import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {StepEnum} from '../dto/step.enum';

type Props = {
    step: StepEnum;
};

const Breadcrumb = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{props.step}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "red",
        padding: 20,
        width: 80,
        height: 80
    },
    container: {
        
    }
});

export default Breadcrumb;