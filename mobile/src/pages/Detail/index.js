import React from 'react'
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity,Linking } from "react-native"
import * as MailCompose from "expo-mail-composer"

import styles from "./styles"
import logoImg from "../../assets/logo.png"

export default function Detail() {
    const navigation = useNavigation();
    const menssage = 'Ola APAD, Estou entrando em contato pois gostaria de ajudar no caso "Tratamento de doguinho" com o valor de R$ 120,00 '

    function navigateBack(){
        navigation.goBack()
    }

    function sendMail(){
        MailCompose.composeAsync({
            subject:'Heroi do caso: Tratamento de doguinho',
            recipients:['ph_leda@hotmail.com'],
            body: menssage,
        })

    }

    function sendWhatsapp(){
        Linking.openURL(`https://api.whatsapp.com/send?phone=5561985638530&text=${menssage}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02048" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Tratamento de doguinho</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia! </Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato: </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>Email </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
