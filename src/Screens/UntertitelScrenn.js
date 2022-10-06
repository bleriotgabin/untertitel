import {
    Box,
    Heading,
    Image,
    ScrollView,
    HStack,
    View,
    Spacer,
    Text,
  } from "native-base";
  import React, { useState } from "react";
  import Colors from "../color";
  import Rating from "../Components/Rating";
  import NumericInput from "react-native-numeric-input";
  import Buttone from "../Components/Buttone";
  import Review from "../Components/Review";
  import { useNavigation } from "@react-navigation/native";
  import {FlatList} from 'react-native';
  import { TouchableHighlight } from "react-native-web";
  import * as data from '../../assets/untertitel.json';

  function SingleProductScreen({ route }) {
    
    const navigation = useNavigation();
    const untertitel = data.data;
    
    
    

    return (
      <Box safeArea flex={1}> 
          <ScrollView>
             
          <Text>{untertitel}</Text>


          </ScrollView>
      </Box> 
    );
  }
  
  export default SingleProductScreen;
  