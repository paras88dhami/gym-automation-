  import { router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

  export default function LoginScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Gym Automation</Text>

        <Text style={styles.subtitle}>
          Login using your phone number
        </Text>

        <TextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.loginButton}
         onPress={() => router.replace("/(auth)/register")}>

          <Text style={styles.footerText}>
          Not registered? Contact gym owner
          
        </Text>
        </TouchableOpacity>

      
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      paddingHorizontal: 24,
      justifyContent: "center",
    },

    logo: {
      fontSize: 28,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 8,
      color: "#111",
    },

    subtitle: {
      fontSize: 14,
      textAlign: "center",
      marginBottom: 32,
      color: "#666",
    },

    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 14,
      fontSize: 16,
      marginBottom: 16,
      backgroundColor: "#fafafa",
    },

    loginButton: {
      backgroundColor: "#0a7cff",
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 8,
    },

    loginText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },

    footerText: {
      marginTop: 24,
      textAlign: "center",
      fontSize: 13,
      color: "#777",
    },
  });
