import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
// import CartEmpty from "../Components/CartEmpty";
import EventIterms from "../Components/EventIterms";
import {  Alert, TextInput, StyleSheet } from "react-native";

function CartScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          choose Event
        </Text>
      </Center>
      {/* IF Event IS EMPTY
      <CartEmpty /> */}
      {/* Event ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <EventIterms />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>selected event</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              start
            </Button>
          </HStack>
        </Center>
              
        {/* start untertitel with event code */}
        <Center px={5}>
        <TextInput style={styles.codeinput}
        
        
        placeholder="clik here to enter event code"
        keyboardType="numeric"
      />
          <Buttone
            onPress={() => Alert.alert("Untertitel start with code")}
            bg={Colors.black}
            color={Colors.white}
            mt={10}
          >
            Start with event code
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  codeinput: {
    marginTop: 50,
  },
 
});

export default CartScreen;
