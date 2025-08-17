
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

export default function CategoryCard({
  title,
  imageUri,

}: Props) {
  return (
 <Pressable style={styles.card}>
  <ImageBackground
    source={{ uri: imageUri }}
    style={styles.imageBg}
    imageStyle={styles.image}
    resizeMode="cover"
  >
    <View style={styles.topWrap}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </ImageBackground>
</Pressable>
  );
}

const RADIUS = scale(12);

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS,
    overflow: 'hidden',
    backgroundColor: '#F4F6F6',
    width: scale(158),
    height: scale(152),
  },
  imageBg: {
    flex: 1,
    
  },
  image: {
    borderRadius: RADIUS, 
    resizeMode:'cover'
  },
  topWrap: {
    marginLeft: scale(14),
    
    height: scale(48),
    width: scale(42),
    marginTop:scale(20)
    
  },
  title: {
  color: '#13231B',
  fontSize: scale(16),
  fontWeight: '500',
  fontFamily: 'Rubik-Medium',
  lineHeight: scale(20),   
  flexShrink: 1,          
  flexWrap: 'wrap',        
  width: scale(120),      
},
});
