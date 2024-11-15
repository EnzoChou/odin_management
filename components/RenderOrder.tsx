import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useContext, useEffect } from 'react';
import { OrderContext } from '@/components/contexts/OrderManager';
import { useBuildCheckboxes } from "@/hooks/useBuildCheckBoxes";
import Checkbox from 'expo-checkbox';
import { RenderCheckBoxes } from "./RenderCheckBoxes";

export const RenderSauceIcons = (props: {
    key: number
    item: add_on
}) => {
    return (
        <View className="flex-row self-auto">
            <Text className={props['item'].add ?
                "text-sm font-thin p-1 text-slate-800" :
                "text-sm font-thin p-1 text-red-800 line-through"}>{props['item'].name}</Text>
        </View>
    )
};

export const RenderSingleMeal = (props: {
    meal: meal, type: 'food' | 'drink', order: order
}) => {
    const { orders, setOrders } = useContext(OrderContext);
    const logicalOnPress = () => {
        console.log('logicalOnPress called');
        let new_orders: order[] = orders.map((el, i) => {
            el[props['type']] = el[props['type']].map((el2, i2) => {
                if (el2._id == props['meal']._id) {
                    if (el2['status'] == 'in progress') {
                        el2['status'] = 'done';
                    } else {
                        el2['status'] = 'in progress';
                    }
                };
                return el2;
            });
            return el;
        });
        setOrders(new_orders);
        return;
    };
    const [checkboxes, setCheckboxes] = useState<Checkbox[]>([]);
    useBuildCheckboxes(props['meal']['quantity'] || 0, checkboxes, setCheckboxes);
    let single_meal_all_portions = checkboxes.every(el => !!el.value);

    useEffect(() => {
        let new_orders: order[] = orders.map((el, i) => {
            el[props['type']] = el[props['type']].map((el2, i2) => {
                if (el2._id == props['meal']._id) {
                    if (!!single_meal_all_portions) {
                        el2['status'] = 'done';
                    } else {
                        el2['status'] = 'in progress';
                    }
                };
                return el2;
            });
            return el;
        });
        setOrders(new_orders);
        return;
    }, [single_meal_all_portions]);

    let singleOrderClassName = 'flex-auto p-1 justify-normal rounded-lg border-2 border-slate-600 ';
    const [orderColor, setColor] = useState(singleOrderClassName + "bg-yellow-100");
    useEffect(() => {
        if (props['meal']['status'] == 'done') {
            setColor(singleOrderClassName + 'bg-green-100');
        } else {
            setColor(singleOrderClassName + 'bg-yellow-100');
        }
    }, [props['meal']['status']]);
    return (
        <View className="flex-auto rounded-lg pb-1">
            {/* <TouchableOpacity
                onPress={logicalOnPress}
            > */}
            <View className={orderColor}>
                <View className="flex-col">
                    <Text className='text-lg font-semibold'>
                        {props['meal']['name']} - {props['meal']['quantity']}
                    </Text>
                    <FlatList
                        className="p-1"
                        data={checkboxes}
                        renderItem={({ item }) => <RenderCheckBoxes item={item} checkboxes={checkboxes} setCheckboxes={setCheckboxes} />}
                        horizontal={true}
                    ></FlatList>
                </View>
                {!!props['meal']['add_on'] || props['meal']['add_on'] ?
                    <View className="flex-row justify-between p-1">
                        <View className="flex-row p-1">
                            <FlatList
                                // horizontal={true}
                                data={(props['meal']['add_on'] || [])}
                                renderItem={({ item, index }) => <RenderSauceIcons key={index} item={item} />}
                            />
                        </View>
                        <View>
                            <Text className='text-sm font-semibold p-1'>
                                {!!props['meal']['description'] ? 'Description\n' + props['meal']['description'] : ''}
                            </Text>
                        </View>
                    </View> : <></>}

            </View>
            {/* </TouchableOpacity> */}
        </View >);
};

export const RenderMeal = (props: {
    order: order
    type: 'food' | 'drink'
}) => {

    let are_all_meals_done = props['order'][props['type']].every(el => el.status == 'done');

    const [orderColor, setColor] = useState('flex-auto border-2 border-slate-600 p-2 m-1 rounded-lg bg-orange-200');

    useEffect(() => {
        switch (are_all_meals_done) {
            case true:
                setColor('flex-auto border-2 border-slate-600 p-2 m-1 rounded-lg bg-blue-200');
                break;
            case false:
            default:
                setColor('flex-auto border-2 border-slate-600 p-2 m-1 rounded-lg bg-orange-200');
                break;
        }
        if (!!props['order']['paid']) setColor('flex-auto border-2 border-slate-600 p-2 m-1 rounded-lg bg-green-200');
    },
        [are_all_meals_done, props['order']['paid']]
    );



    return (
        <View className={orderColor}>
            <View className="p-1 flex-col m-2">
                <View className="flex-row p-1 justify-center">
                    <Text className='text-lg font-bold text-center'>
                        TABLE - {props['order']['table']}
                    </Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className='text-lg font-semibold'>
                        name - {props['order']['name']}
                    </Text>
                    <Text className='text-lg font-bold'>
                        time - {props['order']['simple_date']}
                    </Text>
                </View>
            </View>
            <View className="flex-col">
                <FlatList
                    data={props['order'][props['type']]}
                    renderItem={({ item }) => <RenderSingleMeal meal={item} type={props['type']} order={props['order']} />}
                    keyExtractor={item => item._id || ''}
                >
                </FlatList>
            </View>
        </View>
    );
};