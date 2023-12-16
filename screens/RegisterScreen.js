import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { auth } from "../firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (text) => {
        setEmail(text)
    }

    const handlePassword = (text) => {
        setPassword(text)
    }

    const handleRegister = () => { //kayıt kısmı burada yapılır.
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Success: ", user)
            })
            .catch((err) => {
                console.log(console.error(err));
            })
    }

    return (
        <View>
            <Text>Hello From RegisterScreen</Text>
            <TextInput placeholder="E-Mail Adress" onChangeText={handleEmail} keyboardType="email-address" />
            <TextInput placeholder="Password" onChangeText={handlePassword} secureTextEntry={true} autoCorrect={false} />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
}

export default RegisterScreen;