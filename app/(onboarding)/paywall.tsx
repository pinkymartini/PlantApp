import PaywallCard from "@/components/PaywallCard";
import PaywallSelectButton from "@/components/PaywallSelectButton";
import { scale } from "@/utils/scale";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


import { useAppDispatch } from "@/store/hooks";
import { updateOnboardedStatus, updateProPlanStatus } from "@/store/sessionSlice";

export default function Paywall() {
  const router = useRouter();
 

  const dispatch = useAppDispatch();
  
  const paywallBackground = require("@/assets/images/PaywallBackground.png");
  const cancelIcon = require("@/assets/icons/paywall-cancel.png");
  const [selectedOption, setSelectedOption] = useState<'monthly' | 'yearly'>('yearly');

  const completeOnboarding = async (option: string) => {
    try {
      //await AsyncStorage.setItem("hasCompletedOnboarding", "true");

      dispatch(updateOnboardedStatus(true));


      router.replace("/(tabs)"); // go to tabs after onboarding
      
      // ✅ REPLACE OLD ASYNCSTORAGE WITH REDUX
      if (option === 'yearly' || option === 'monthly') {
        // This updates BOTH Redux AND AsyncStorage automatically!
        dispatch(updateProPlanStatus(true));
      } else {
        // This updates BOTH Redux AND AsyncStorage automatically!
        dispatch(updateProPlanStatus(false));
      }
    } catch (e) {
      console.error("Error", e);
    }
  };

  const handlePress = () => {
    const message =
      selectedOption === 'yearly'
        ? 'Purchase successful! Enjoy 3 free days.'
        : 'Purchase successful!';

    Alert.alert(
      'Success',
      message,
      [
        {
          text: 'OK',
          onPress: () => completeOnboarding(selectedOption),
        },
      ],
      { cancelable: false }
    );
  };

  const buttonText =
    selectedOption === 'yearly' ? 'Try free for 3 days' :
      selectedOption === 'monthly' ? 'Purchase' :
        'Continue';

  return (
    <View style={{ flex: 1, backgroundColor: "#101E17" }}>
      <ImageBackground
        source={paywallBackground}
        style={styles.background}>
        <SafeAreaView>
          <TouchableOpacity onPress={() => completeOnboarding('cancel')} activeOpacity={0.7}>
            <Image
              source={cancelIcon}
              style={styles.cancelBtnStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              <Text style={styles.boldText}>PlantApp </Text>
              Premium
            </Text>

            <Text style={styles.headerSubtitle}>
              Access All Features
            </Text>
          </View>

          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: scale(24),
                gap: scale(8),
                flexDirection: 'row',
              }}
            >
              <PaywallCard
                title="Unlimited"
                subtitle="Plant Identify"
                icon={require('@/assets/icons/paywall-unlimited.png')}
              />

              <PaywallCard
                title="Faster"
                subtitle="Process"
                icon={require('@/assets/icons/faster-unlimited.png')}
              />

              <PaywallCard
                title="Detailed"
                subtitle="Plant care"
                icon={require('@/assets/icons/paywall-unlimited.png')}
              />
            </ScrollView>
          </View>

          <View style={styles.selectButtonsContainer}>
            <PaywallSelectButton
              title="1 Month"
              subtitle="$2.99/month, auto renewable"
              type="monthly"
              isSelected={selectedOption === 'monthly'}
              onPress={() => setSelectedOption('monthly')}
            />

            <PaywallSelectButton
              title="1 Year"
              subtitle="First 3 days free, then $529,99/year"
              type="yearly"
              isSelected={selectedOption === 'yearly'}
              onPress={() => setSelectedOption('yearly')}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              After the 3-day free trial period you'll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
            </Text>
            <Text style={styles.termsText}>Terms  •  Privacy  •  Restore</Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101E17",
  },
  background: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: scale(327),
    marginLeft: scale(24),
    gap: scale(8),
    marginTop: scale(240),
    height: scale(71),
  },
  headerTitle: {
    fontSize: scale(30),
    color: "#FFFFFF",
    fontFamily: "Rubik-Regular",
  },
  boldText: {
    fontFamily: "Rubik-Bold",
  },
  headerSubtitle: {
    fontSize: scale(14),
    color: "#FFFFFFB2",
    fontFamily: "Rubik-Regular",
    lineHeight: scale(22),
    letterSpacing: scale(0.07),
    fontWeight: '400',
  },
  selectButtonsContainer: {
    paddingHorizontal: scale(24),
    gap: scale(12),
    marginTop: scale(20),
    marginBottom: scale(20),
  },
  button: {
    width: scale(327),
    height: scale(56),
    backgroundColor: "#28AF6E",
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(24),
    marginTop: scale(10),
  },
  buttonText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: '600',
  },
  footer: {
    width: scale(327),
    alignSelf: "center",
    marginTop: scale(26),
    height: scale(24),
  },
  footerText: {
    fontSize: scale(9),
    lineHeight: scale(12),
    color: "#FFFFFF85",
    fontFamily: "Rubik-Regular",
    textAlign: "center"
  },
  termsText: {
    fontSize: scale(11),
    lineHeight: scale(11),
    color: "#FFFFFF80",
    fontFamily: "Rubik-Regular",
    textAlign: "center",
    marginTop: scale(11),
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: '#597165B2',
  },
  cancelBtnStyle: {
    position: 'absolute',
    top: scale(55),
    left: scale(335),
    backgroundColor: '#00000066',
    borderRadius: scale(50),
    zIndex: 1,
    width: scale(36),
    height: scale(36),
  },
});