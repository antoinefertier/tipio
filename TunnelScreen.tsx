import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { setAnimalName } from "./src/app/form";
import Breadcrumb from "./src/components/Breadcrumb";

const TunnelScreen = () => {

    // const [firstName, setFirstName] = useState<string>('');

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const onValid = () => {
        navigation.navigate("");
    }
    return (
        <>
        <SafeAreaView>
            <Breadcrumb />
            <View>
                <TouchableOpacity onPress={onValid}>
                    <Text>Suivant</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    )
}

export default TunnelScreen;

