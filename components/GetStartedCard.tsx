// components/GetStartedCard.tsx
import { scale } from '@/utils/scale';
import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  imageUri: string;
  onPress?: () => void;
  width?: number;
  height?: number;
};

export default function GetStartedCard({
  title,
  imageUri,
  onPress,
}: Props) {
  
  const safeTitle = title ? String(title).trim() : '';
  const safeImageUri = imageUri || '';
  
  
  if (!safeTitle) {
    return null;
  }

  return (
    <Pressable onPress={onPress} style={[styles.card]}>
      <ImageBackground
        source={{ uri: safeImageUri }}
        style={styles.imageBg}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <View style={styles.bottomWrap}>
          <Text style={styles.title}>
            {safeTitle}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  card: {
    borderRadius: scale(12),
    overflow: 'hidden',
    backgroundColor: '#eee',
    borderColor: '#FFFFFF1A',
    width: scale(240),
    height: scale(164),
  },
  imageBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: scale(12),
  },
  bottomWrap: {
    marginLeft: scale(14),
    paddingVertical: 10,
    height: scale(64),
    width: scale(240),
    justifyContent: 'flex-start',   
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});