import React from "react";
import { Text, View } from "react-native";
import { IUser } from "../../@types/model";

interface Props{
    user: IUser;
}

export function Login({user}: Props) {
    return (
        <View>
            <Text>{user.name}</Text>
        </View>
    )
}

