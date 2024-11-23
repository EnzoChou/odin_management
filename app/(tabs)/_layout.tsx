import { Tabs, Redirect } from 'expo-router';
import React, { useContext } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { UserContext } from '@/components/contexts/UserManager';


export default function TabLayout() {
    const colorScheme = useColorScheme();
    const { user } = useContext(UserContext);

    let tabs_redirect = [
        <Tabs.Screen
            name="menu"
            key="menu"
            options={{
                title: 'Menu',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
                ),
            }}
        />,
        <Tabs.Screen
            name="order"
            key="order"
            options={{
                title: 'Order',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />
                ),
            }}
        />,
        <Tabs.Screen
            name="kitchen"
            key="kitchen"
            options={{
                title: 'Kitchen',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'pizza' : 'pizza-outline'} color={color} />
                ),
            }}
        />,
        <Tabs.Screen
            name="bar"
            key="bar"
            options={{
                title: 'Bar',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabBarIcon name={focused ? 'wine' : 'wine-outline'} color={color} />
                ),
            }}
        />
    ];
    switch (user?.role) {
        case 'admin':
            break;
        case 'manager':
            break;
        case 'user':
            break;
        case 'guest':
        default:

            break;
    }
    if (true) {
        tabs_redirect.push(
        );
    }
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}>
            {tabs_redirect}
        </Tabs>
    );
}
