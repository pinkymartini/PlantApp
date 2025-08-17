import { scale } from "@/utils/scale";
import { useRouter } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingIndex() {
  const router = useRouter();
  const getStartedImg = require("@/assets/images/getStartedImg.png");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Welcome to <Text style={{ fontFamily: "Rubik-Bold" }}>PlantApp</Text>
        </Text>
        <Text style={styles.headerSubtitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>

      
      <View style={styles.imageContainer}>
        <Image source={getStartedImg} style={styles.imageStyle} resizeMode="contain" />
      </View>

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding_1")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By tapping next, you are agreeing to PlantID{'\n'}
          <Text style={styles.underlineText}>Terms of Use</Text> &{' '}
          <Text style={styles.underlineText}>Privacy Policy</Text>.
        </Text>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFFFE",
    
  },
  header: {
    width: scale(300),
    marginLeft: scale(24),
    gap: scale(8),
    height: scale(85),
   
  },
  headerTitle: {
    fontSize: scale(28),
    color: "#13231B",
    fontFamily: "Rubik",
  },
  headerSubtitle: {
    fontSize: scale(14),
    color: "#13231BB2",
    fontFamily: "Rubik-Regular",
    lineHeight: scale(22),
    letterSpacing: scale(0.07),
    fontWeight: '400',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: scale(375),
    height: scale(499),
  },
  button: {
    width: scale(327),
    height: scale(56),
    backgroundColor: "#28AF6E",
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(24),
  },
  buttonText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: '600',
  },
  footer: {
    width: scale(232),
    alignItems: 'center',
    marginLeft: scale(73),
    height: scale(30),
    marginTop: scale(26),
  },
  footerText: {
    fontSize: scale(11),
    color: '#597165B2',
    lineHeight: scale(15),
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: '#597165B2',
  },
});
