import Brush from "@/components/Brush";
import { scale } from "@/utils/scale";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding1() {
  const router = useRouter();
  const identifyImg = require("@/assets/images/identifyPlant.png");
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>Take a photo to </Text>
            <View style={styles.identifyContainer}>
              <Text style={[styles.headerTitle, styles.boldText]}>identify</Text>

              <View style={styles.brushContainer}>
                <Brush />
              </View>
            </View>
          </View>
          <Text style={styles.headerTitle}>the plant!</Text>
        </View>
      </View>


      <View style={styles.imageContainer}>
        <Image source={identifyImg} style={styles.imageStyle} contentFit="contain" />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding_2")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

     <View style={styles.footer}>
  <Text style={styles.footerText}>
    By tapping next, you are agreeing to PlantID{'\n'}
    <Text style={styles.underlineText}>Terms of Use</Text>
    {' and '}
    <Text style={styles.underlineText}>Privacy Policy</Text>
    .
  </Text>

  <View style={styles.dotsContainer}>
    <View style={styles.activeDot} />
    <View style={styles.dot} />
    <View style={styles.dot} />
  </View>
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
    width: scale(315),
    marginLeft: scale(24),
    gap: scale(8),
    height: scale(66),
  },
  titleContainer: {
    position: 'relative',
    alignItems: 'flex-start',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  identifyContainer: {
    position: 'relative',
  },
  headerTitle: {
    fontSize: scale(28),
    color: "#13231B",
    fontFamily: "Rubik-Regular",
  },
  boldText: {
    fontFamily: "Rubik-Bold",
  },
  brushContainer: {
    position: 'absolute',
    bottom: scale(-5),
    left: 0,
    right: 0,
    height: scale(10),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scaleY: -1 }],
  },
  imageContainer: {
    width: scale(375),
    height: scale(530),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
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
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(8),
    width: scale(38),
    height: scale(10),
    marginTop: scale(10)
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(3),
    backgroundColor: '#13231B40',
  },
  activeDot: {
    backgroundColor: '#13231B',
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5)
  },
});