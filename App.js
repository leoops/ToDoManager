import React from "react";
import { Routes } from "./src/routes";
import { SafeAreaView } from 'react-native';
const App = () => (
    <SafeAreaView style={{ flex: 1}}>
        <Routes />
    </SafeAreaView>
);

export default App;