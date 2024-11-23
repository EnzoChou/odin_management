import {
    View,
    Text,
    Pressable,
    Modal,
    TextInput,
    FlatList,
    Button,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, useController, useFieldArray, UseFieldArrayRemove } from "react-hook-form";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export const AddRemoveMeal = (props: {
    meal: meal,
    index: number,
    remove: UseFieldArrayRemove
}) => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<meal>({ defaultValues: props['meal'] });
    console.log('meal', props['meal']);
    console.log('index', props['index']);
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <View className='pl-1 pb-5'>
            <View className='flex-row justify-between'>
                <View>
                    <Text className=''>
                        Name - {props['index']}
                    </Text>
                </View>
                <View className=''>
                    <Pressable
                        className='p-1'
                        onPress={() => {
                            // setMeals([...meals, { _id: '', name: '', price: 0 }])
                            console.log('index to remove', props['index']);
                            props['remove'](props['index']);
                        }
                        }
                    >
                        <TabBarIcon className='text-center' name='remove-circle-outline' size={24} />
                    </Pressable>
                </View>
            </View>
            <View className='bg-white rounded-lg'>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 1
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="name"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="name"
                />
            </View>
            <View>
                <Text>
                    Description
                </Text>
            </View>
            <View className='bg-white rounded-lg justify-around'>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 1
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="description"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            multiline={true}
                        />
                    )}
                    name="description"
                />
            </View>
            <View>
                <Text>
                    Price
                </Text>
            </View>
            <View className='bg-white rounded-lg justify-around'>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 1,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            keyboardType='numeric'
                            placeholder="price"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value.toString()}
                        />
                    )}
                    name="price"
                />
            </View>
            {/* <View className='bg-white'>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 1
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            placeholder="add_on"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="add_on"
                />
            </View> */}
        </View>
    );
};

export const EditObject = (props: {
    model: string,
    savedObj?: menu_meal
}) => {
    const {
        register,
        setValue,
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm<menu_meal>({ defaultValues: props['savedObj'] });

    const { fields, append, remove } = useFieldArray({
        name: 'meals',
        control
    });

    const onSubmit = handleSubmit((data) => console.log(data));

    const [meals,
        setMeals] = useState(props['savedObj']?.meals || []);


    switch (props['model']) {
        case 'category':
            return (
                // <View className='grid grid-flow-row gap-2 p-2 overflow-auto'>
                //     <View>
                //         <Text>Category:</Text>
                //     </View>
                <View className='border-2 border-slate-600'>
                    <View className='p-1 mb-1'>
                        <Text className='font-semibold'>
                            Category Name
                        </Text>
                        <View className='bg-white rounded-lg justify-around'>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength: 1
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput

                                        placeholder="category"
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="category"
                            />
                        </View>
                        {errors.category && <Text className='text-red-500'>This is required.</Text>}
                    </View>
                    <View className='flex-1 pl-1 rounded-lg border-4 border-red-300'>
                        <View>
                            <Text className='font-semibold'>
                                Meals
                            </Text>
                        </View>
                        {fields.map((item, index) => <AddRemoveMeal meal={item} key={item.id} index={index} remove={remove} />)}
                        {/* <FlatList
                            data={meals}
                            renderItem={({ item }) => <AddRemoveMeal meal={item} />}
                        /> */}
                        <View className='flex-auto'>
                            <Pressable
                                className='p-1'
                                onPress={() =>
                                    // setMeals([...meals, { _id: '', name: '', price: 0 }])
                                    append({ _id: '', name: '', price: 0 })
                                }
                            >
                                <TabBarIcon className='text-center' name='add-circle-outline' size={28} />
                            </Pressable>
                        </View>
                    </View>
                    <View className='p-1'>
                        <Button title="Save" onPress={onSubmit} />
                    </View>
                </View>
            );
        default:
            break;
    }
};

export const PropMenuModal = (props: {
    open: boolean,
    onClose: React.Dispatch<React.SetStateAction<boolean>>,
    model: string
}) => {
    let labelCreator = (stringToReplace: string): string => stringToReplace.replace(/[^\w\s]/gi, '').toLowerCase();
    const [formData, setFormData] = useState({});

    return (
        <SafeAreaProvider>
            <SafeAreaView className='flex-1'>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={props['open']}
                    onRequestClose={() => {
                        props['onClose'](!props['open']);
                    }}>
                    <ScrollView
                        automaticallyAdjustKeyboardInsets={true}
                    >
                        <View className='flex-1'>
                            <Pressable className='flex-1'
                                onPress={() => props['onClose'](!props['open'])}
                            >
                                <View className='flex-1 m-10 bg-yellow-200 border-2 border-yellow-600 rounded-t-lg'>
                                    <Pressable className='flex-1'
                                    >
                                        <View className='flex-row-reverse'>
                                            <View className='bg-yellow-100 p-1 rounded-full'>
                                                <Pressable className='flex-auto m-1'
                                                    onPress={() => props['onClose'](!props['open'])}
                                                >
                                                    <Text>X</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View className='flex-1'>
                                            <Text className='text-center font-Norsebold text-2xl'> edit {props['model']}</Text>
                                            <View className='m-2'>
                                                <EditObject model={props['model']} savedObj={{
                                                    "_id": "4",
                                                    "index": 4,
                                                    "category": "Dolci",
                                                    "label": "dolci",
                                                    "meals": [
                                                        {
                                                            "_id": "0",
                                                            "index": 0,
                                                            "name": "Waffle",
                                                            "label": "waffle",
                                                            "price": 5,
                                                            "add_on": [{
                                                                key: 'nutella',
                                                                name: 'Nutella',
                                                                add: true
                                                            }, {
                                                                key: 'sciroppodacero',
                                                                name: 'Sciroppo d\'acero',
                                                                add: true
                                                            }, {
                                                                key: 'nutella',
                                                                name: 'Nutella',
                                                                add: true
                                                            }, {
                                                                key: 'caramello',
                                                                name: 'Caramello',
                                                                add: true
                                                            }],
                                                            "tags": [],
                                                            "description": "Con Nutella/Cioccolato/Sciroppo d'acero/Caramello (1 pz*)"
                                                        }]
                                                }} />
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                            </Pressable>
                        </View>
                    </ScrollView>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};