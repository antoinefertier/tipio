import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {StepEnum} from '../dto/step.enum';
import BreadcrumbItem from './BreadcrumbItem';

const Breadcrumb = () => {
    return (
        <View style={styles.container}>
            <BreadcrumbItem step={StepEnum.STEP_ONE} />
            <BreadcrumbItem step={StepEnum.STEP_TWO} />
            <BreadcrumbItem step={StepEnum.STEP_THREE} />
            <BreadcrumbItem step={StepEnum.STEP_FOUR} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    }
});

export default Breadcrumb;