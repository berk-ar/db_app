// SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

const SettingsScreen = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const languageOptions = [
        { label: 'English', value: 'en' },
        { label: 'Español', value: 'es' },
        // Add more languages as needed
    ];

    useEffect(() => {
        // Load settings from AsyncStorage on component mount
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const darkModeValue = await AsyncStorage.getItem('darkMode');
            const languageValue = await AsyncStorage.getItem('language');

            if (darkModeValue !== null) {
                setDarkMode(JSON.parse(darkModeValue));
            }

            if (languageValue !== null) {
                setSelectedLanguage(languageValue);
            }
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    };

    const saveSettings = async () => {
        try {
            await AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
            await AsyncStorage.setItem('language', selectedLanguage);
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLanguageChange = (value) => {
        setSelectedLanguage(value);
    };

    useEffect(() => {
        // Save settings to AsyncStorage whenever darkMode or selectedLanguage changes
        saveSettings();
    }, [darkMode, selectedLanguage]);

    return (
        <View style={styles.container}>
            <View style={styles.setting}>
                <Text>Dark Mode</Text>
                <Switch value={darkMode} onValueChange={toggleDarkMode} />
            </View>
            <View style={styles.setting}>
                <Text>Language</Text>
                <RNPickerSelect
                    onValueChange={handleLanguageChange}
                    items={languageOptions}
                    value={selectedLanguage}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
});

export default SettingsScreen;