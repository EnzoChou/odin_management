import { Image, Text, View, ScrollView } from "react-native";
import { SplashScreen, Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from '@/assets/images/odin-logo.png';
import CustomButton from "@/components/CustomButton";
import { NativeWindStyleSheet } from "nativewind";
import * as apis from '@/api';

globalThis.apis = apis;
console.log('apis', apis);

NativeWindStyleSheet.setOutput({
  default: "native",
});

SplashScreen.preventAutoHideAsync();

export default function Index() {
  return (
    <SafeAreaView className="justify-items-center h-full pt-16 bg-white border-red-500"
    // style={{
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <ScrollView className="h-full w-auto">
        <View className="flex-auto mb-20 items-center justify-center">
          <View className="flex-auto mt-45">
            <Link href="/(tabs)/menu"
              className="flex-1"
            // style={styles.baseTextDark}
            >
              <Image source={Logo}
                resizeMode='contain'
                className="w-[380px] h-[300px]"
              />
            </Link>
          </View>
          <View className="">
            <CustomButton
              title="Log-In"
              handlePress={() => '5'}
              containerStyles="justify-items-center w-48 m-4"
            />
            <CustomButton
              title="continue as GUEST"
              handlePress={() => '5'}
              containerStyles="justify-items-center w-48 m-4"
            />
          </View>
        </View>
      </ScrollView>
      <View className="bg-emerald-600 border-2 flex-shrink-0 border-green-500">
        <Text
          className="text-white text-center font-bold"
        >
          Contatti
        </Text>
        <Link
          className="text-white underline text-center"
          href="https://www.google.it/maps/place/Via+Laurentina,+62a,+00142+Roma+RM/@41.8465038,12.4757091,17z/data=!3m1!4b1!4m6!3m5!1s0x13258af4766bffff:0x876c8da8c008f762!8m2!3d41.8465038!4d12.4782894!16s%2Fg%2F11q2tfbdm5?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
        >
          Via Laurentina 62/A
        </Link>
        <Link
          className="text-white underline text-center"
          href="tel:0653093060">
          Tel. 06 53093060
        </Link>
        <Link
          className="text-white underline text-center"
          href="tel:3338077899">
          Cell. 333 8077899
        </Link>
        <Link
          className="text-white underline text-center"
          href="mailto:info@odinludopub.it"
        >
          info@odinludopub.it
        </Link>
        <Text
          className="text-white text-center"
        >
          © 2024 Odin • Associazione Culturale
        </Text>
      </View>
    </SafeAreaView>
  );
}

// const styles = {
//   viewStyle: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   baseTextLight: {
//     color: '#ff8800'
//   },
//   baseTextDark: {
//     color: '#008080'
//   }
// };