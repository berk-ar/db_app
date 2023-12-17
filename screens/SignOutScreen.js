import { signOut } from "firebase/auth"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { auth } from "../firebase_config"

export const SignOutScreen = ({ navigation }) => {

    useEffect(() => {
        signOut(auth)
            .then(() => navigation.navigate('Login'))
            .catch(err => console.log(err))
    }, [])

    return (
        <View>
            <Text>Sign Out Page</Text>
        </View>
    )
}