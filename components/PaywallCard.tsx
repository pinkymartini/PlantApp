import { scale } from '@/utils/scale';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  icon: ImageSourcePropType;
};

export default function PaywallCard({
  title,
  subtitle,
  icon,
}: Props) {
  return (
    <TouchableOpacity 
      style={styles.wrapper} 
      activeOpacity={0.7}
    >
      <BlurView intensity={16} tint="dark" style={styles.card}>
        {/* Icon at top left */}
        <View style={styles.iconContainer}>
          <Image 
            source={icon}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>

        {/* Text content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          
          {subtitle && (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </BlurView>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    borderRadius: scale(16),
    overflow: 'hidden', 
  },
  card: {
    padding: scale(20),
    borderRadius: scale(16),
    height: scale(130),
    width: scale(156),
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: scale(16),
    alignSelf: 'flex-start',
  },
  icon: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(8),
  },
  textContainer: {
    flex: 1,
    gap: scale(4),
    height: scale(46),
    width: scale(97),
    

  },
  title: {
    fontSize: scale(20),
    fontFamily: 'Rubik',
    color: '#FFFFFF',
    marginBottom: scale(8),
    lineHeight: scale(24),
  },
  subtitle: {
    fontSize: scale(14),
    fontFamily: 'Rubik-Regular',
    color: '#FFFFFFB2',
    lineHeight: scale(20),
  },
});
