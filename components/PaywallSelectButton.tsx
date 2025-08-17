import { scale } from '@/utils/scale';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const radioChecked = require('@/assets/icons/paywallActive.png');  
const radioUnchecked = require('@/assets/icons/paywallInactive.png'); 

type Props = {
  title: string;
  subtitle?: string;
  type: 'monthly' | 'yearly' | 'trial';
  isSelected?: boolean;
  onPress?: () => void;
};

export default function PaywallSelectButton({
  title,
  subtitle,
  type,
  isSelected = false,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.buttonSelected]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {type === 'yearly' && (
        <View style={styles.saveBadge}>
          <Text style={styles.saveBadgeText}>Save 50%</Text>
        </View>
      )}

      <View style={styles.content}>
        <CheckBox
          checked={isSelected}
          onPress={onPress}
         
          checkedIcon={
            <Image
              source={radioChecked}
              style={{ width: scale(24), height: scale(24) }}
              resizeMode="contain"
            />
          }
          uncheckedIcon={
            <Image
              source={radioUnchecked}
              style={{ width: scale(24), height: scale(24) }}
              resizeMode="contain"
            />
          }
          containerStyle={styles.checkboxContainer}
        />

        <View style={styles.textContainer}>
          <Text style={[styles.buttonText, isSelected && styles.buttonTextSelected]}>
            {title}
          </Text>
          {!!subtitle && (
            <Text style={[styles.subtitleText, isSelected && styles.subtitleTextSelected]}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: scale(327),
    height: scale(56),
    backgroundColor: '#101E17',
    borderRadius: scale(14),
    borderWidth: 1.5,
    borderColor: '#FFFFFF4D',
    justifyContent: 'center',
  },
  buttonSelected: { borderColor: '#28AF6E' },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: scale(8),
  },
  checkboxContainer: {
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginRight: scale(8),
  },
  textContainer: { flex: 1 },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scale(16),
    fontWeight: '600',
    fontFamily: 'Rubik-SemiBold',
  },
  buttonTextSelected: { color: 'white' },
  subtitleText: {
    color: '#FFFFFFB2',
    fontSize: scale(12),
    fontFamily: 'Rubik-Regular',
    marginTop: scale(2),
  },
  subtitleTextSelected: { color: '#FFFFFFB2', opacity: 0.8 },
  saveBadge: {
    position: 'absolute',
    top: scale(-1),
    right: scale(-2),
    width: scale(77),
    height: scale(26),
    backgroundColor: '#28AF6E',
    borderTopRightRadius: scale(14),
    borderBottomLeftRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  saveBadgeText: {
    color: '#FFFFFF',
    fontSize: scale(12),
    fontWeight: '500',
    fontFamily: 'Rubik',
    textAlign: 'center',
  },
});
