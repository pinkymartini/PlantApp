// HomeScreen.tsx
import CategoryCard from '@/components/CategoryCard';
import GetStartedCard from '@/components/GetStartedCard';
import { useAppSelector } from '@/store/hooks';

import Plant from '@/types/Plant';
import Question from '@/types/Question';
import { scale } from '@/utils/scale';
import { SearchBar } from '@rneui/themed';
import axios from 'axios';
import { Image, ImageBackground } from 'expo-image';
import { router } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';

import {
    FlatList,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/';

export default function HomeScreen() {
    const { hasProPlan } = useAppSelector((state) => state.session);
    const [items, setItems] = useState<Question[]>([]);
    const [search, setSearch] = useState('');

    const [plants, setPlants] = useState<Plant[]>([]);
    


    useEffect(() => {
        axios
            .get<Question[]>(URL + 'getQuestions')

            .then(({ data }) => setItems(data))

    }, []);

    useEffect(() => {
        axios
            .get<{ data: Plant[] }>(URL + 'getCategories')
            .then(({ data }) => {
                setPlants(data.data);          // update state

                //console.log('plants set:' + data); 
            })
            .catch(err => {
                console.error('Error fetching categories:', err);
            });
    }, []);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return items;
        return items.filter(
            (it) =>
                it.title.toLowerCase().includes(q) ||
                (it.subtitle ?? '').toLowerCase().includes(q)
        );
    }, [items, search]);



    return (
        <>
            {/* <StatusBar style="dark" translucent backgroundColor="transparent" /> */}
            <View style={styles.container}>
                <ImageBackground
                    source={require('@/assets/images/homeHeaderBackground.png')}
                    style={styles.headerBackground}
                    contentFit="cover"
                >
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Hi, plant lover!</Text>
                        <Text style={styles.subtitle}>Good Afternoon! ⛅</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: scale(16) }}>
                        <SearchBar
                            placeholder="Search for plants"
                            placeholderTextColor={'#AFAFAF'}
                            style={{ fontFamily: 'Rubik', fontWeight: '400' }}
                            value={search}
                            onChangeText={setSearch}
                            platform="ios"
                            searchIcon={
                                <Image
                                    source={require('@/assets/icons/searchIcon.png')}
                                    style={{ width: 20, height: 20, tintColor: '#597165' }} // tintColor optional
                                    contentFit="contain"
                                />
                            }
                            containerStyle={{
                                backgroundColor: 'transparent',
                                borderRadius: scale(12),
                                paddingTop: scale(8),
                                width: scale(327),
                                height: scale(44),

                            }}
                            inputContainerStyle={{
                                backgroundColor: '#fff',
                                borderRadius: 12,
                                height: 40,
                            }}
                            inputStyle={{ fontSize: 14 }}
                        />
                    </View>

                </ImageBackground>

                {/* burasi conditional renderlanacak */}

                {!hasProPlan && (
                    <View>
                        <TouchableOpacity
                            style={[styles.button, { flexDirection: 'row', justifyContent: 'space-evenly' }]}
                            onPress={() => router.push('/paywall')}
                        >
                            <Image
                                source={require('@/assets/icons/premiumMailIcon.png')}
                                style={{ height: scale(29.73), width: scale(36) }}
                            />
                            <View>
                                <Text style={styles.buttonTitleText}>FREE Premium Available</Text>
                                <Text style={styles.buttonSubText}>Tap to upgrade your account!</Text>
                            </View>
                            <Image
                                source={require('@/assets/icons/arrow.png')}
                                style={{ height: scale(24), width: scale(24) }}
                            />
                        </TouchableOpacity>
                    </View>
                )}



                <FlatList
                    data={plants}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                    ListHeaderComponent={() => (
                        <View style={{ marginTop: 16, gap: scale(12), marginBottom: scale(16) }}>
                            <Text style={{ fontSize: scale(15), marginLeft: scale(24), fontFamily: 'Rubik-Medium', color: '#13231B' }}>
                                Get started
                            </Text>
                            <FlatList
                                data={filtered}
                                keyExtractor={(item) => String(item.id)}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ marginLeft: scale(24) }}
                                renderItem={({ item }) => (
                                    <GetStartedCard
                                        title={item.title}
                                        imageUri={item.image_uri}
                                        onPress={() => Linking.openURL(item.uri)}
                                    />
                                )}
                                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                            />
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <CategoryCard title={item.title} imageUri={item.image.url} />
                        </View>
                    )}
                    columnWrapperStyle={{ columnGap: scale(12), paddingHorizontal: scale(14) }}
                    contentContainerStyle={{
                        rowGap: scale(12),
                        paddingBottom: scale(80), 
                    }}
                    showsVerticalScrollIndicator={false}
                />





            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FBFAFA', },
    title: {

        fontSize: scale(16),
        color: '#13231B',
        marginBottom: 4,
        fontFamily: 'Rubik',
        fontWeight: '400',
        letterSpacing: scale(0.07),
    },
    subtitle: { fontSize: scale(24), color: '#555', lineHeight: scale(28), fontFamily: 'Rubik-Medium' },

    headerContainer: {
        marginTop: 50,
        marginLeft: scale(24),
        gap: scale(6),
        width: scale(225),
        height: scale(53),
        marginBottom: scale(16),
    },
    headerBackground: {
        width: '100%',

    },
    button: {
        width: scale(327),
        height: scale(64),
        backgroundColor: "#24201A",
        borderRadius: scale(12),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: scale(24),
        marginTop: scale(16)

    },
    buttonTitleText: {
        color: "#E5C990",
        fontSize: scale(16),
        fontWeight: '700',
        fontFamily: 'Rubik',
        letterSpacing: scale(-0.32),
    },
    buttonSubText: {

        fontSize: scale(13),
        fontWeight: '400',
        color: "#E5C990",
        lineHeight: scale(16),
        fontFamily: 'Rubik',
    },


});