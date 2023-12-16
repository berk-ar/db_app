import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { auth } from "../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (text) => {
        setEmail(text)
    }

    const handlePassword = (text) => {
        setPassword(text)
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Success!!!");
            }) //başarılıysa çalışacak olan alan
            .catch(err => console.log(err))
    }

    return (
        <View>
            <Text>Hello From LoginScreen</Text>
            <TextInput placeholder="E-Mail Adress" onChangeText={handleEmail} keyboardType="email-address" />
            <TextInput placeholder="Password" onChangeText={handlePassword} secureTextEntry={true} autoCorrect={false} />
            <Button title="LOGIN" onPress={handleLogin} />
        </View>
    );
}

export default LoginScreen;