import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  Modal,
  TextInput,
} from "react-native";
import React,{useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
const Cheakmodals = () => {
  const { width, height } = Dimensions.get("window");
  const calculateHeightPercentage = (percentage) => {
    return (height * percentage) / 100;
  };

  const calculateWidthPercentage = (percentage) => {
    return (width * percentage) / 100;
  };

  const calculateFontSizePercentage = (percentage) => {
    const baseDimension = Math.min(height, width);
    return (baseDimension * percentage) / 100;
  };
  const [selectedBank, setSelectedBank] = useState("Select Payment Method"); // Initialize with your default value
  const [selectedAccount, setSelectedAccount] = useState("Select Account"); // Initialize with your default value

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        // visible={isSellVisible}
        // onRequestClose={() => setSellVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: calculateFontSizePercentage(1),
              borderRadius: 10,
              width: calculateWidthPercentage(80),
              // alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#EFF8FF",
                padding: calculateFontSizePercentage(1),
                width: calculateWidthPercentage(78),
                borderRadius: 10,
                height: calculateHeightPercentage(height < 600 ? 2 : 8),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(6),
                  fontWeight: "bold",
                  alignItems: "center",
                  marginTop: calculateHeightPercentage(1),
                }}
              >
                WITHDRAWAL CASH
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: "flex-end",
                }}
                //   onPress={() => setSellVisible(false)}
              >
                <Ionicons name="close" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: calculateFontSizePercentage(5.5),
                marginLeft: calculateWidthPercentage(5),
                marginTop: calculateHeightPercentage(2),
                fontWeight: "bold",
              }}
            >
              Enter Amount
            </Text>
            <TextInput
              // label="Amount"
              placeholder="$ 0"
              // value={BuyCurrency}
              placeholderTextColor="black"
              keyboardType="numeric"
              style={{
                color: "black",
                fontSize: calculateFontSizePercentage(6),
                height: calculateHeightPercentage(height < 600 ? 3 : 6),
                width: calculateWidthPercentage(width < 600 ? 65 : 70),
                borderWidth: 2,
                padding: calculateFontSizePercentage(1.5),
                borderRadius: 5,
                // marginBottom: calculateHeightPercentage(2),
                marginLeft: calculateWidthPercentage(5),
                // shadowColor: "lightblue",
              }}
              onChangeText={(e) => setBuyCurrency(e)}
            />
            <View>
              <Picker
                setSelectedBank={selectedBank}
                onValueChange={(itemValue, itemIndex) => setSelectedBank(itemValue)}
                  style={{
                  color: "black",
                  height: calculateHeightPercentage(height < 600 ? 3 : 6),
                  width: calculateWidthPercentage(width < 600 ? 70 : 85),
                  borderWidth: 2,
                  borderRadius: 5,
                  marginLeft: calculateWidthPercentage(1),
                  shadowColor: "lightblue",
                }}
              >
                <Picker.Item label="Select Payment Method" value="Select Payment Method"
                />
                <Picker.Item label="USD" value="USD" 
                  // style={{
                  // color: "black",
                  // height: calculateHeightPercentage(height < 600 ? 3 : 6),
                  // width: calculateWidthPercentage(width < 600 ? 60 : 65),
                  // borderWidth: 2,
                  // borderRadius: 5,
                  // marginBottom: calculateHeightPercentage(2),
                  // marginLeft: calculateWidthPercentage(5),
                  // shadowColor: "lightblue",
                  // }}
                />
                <Picker.Item label="EUR" value="EUR" 
                  // style={{
                  // color: "black",
                  // height: calculateHeightPercentage(height < 600 ? 3 : 6),
                  // width: calculateWidthPercentage(width < 600 ? 60 : 65),
                  // borderWidth: 2,
                  // borderRadius: 5,
                  // marginBottom: calculateHeightPercentage(2),
                  // marginLeft: calculateWidthPercentage(5),
                  // shadowColor: "lightblue",
                  // }}
                />
                <Picker.Item label="GBP" value="GBP" 
                  // style={{
                  // color: "black",
                  // height: calculateHeightPercentage(height < 600 ? 3 : 6),
                  // width: calculateWidthPercentage(width < 600 ? 60 : 65),
                  // borderWidth: 2,
                  // borderRadius: 5,
                  // marginBottom: calculateHeightPercentage(2),
                  // marginLeft: calculateWidthPercentage(5),
                  // shadowColor: "lightblue",
                  // }}
                />
                {/* Add more currency options here */}
              </Picker>
              <Picker
                setSelectedAccount={selectedAccount}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAccount(itemValue)
                }
                  style={{
                  color: "black",
                  height: calculateHeightPercentage(height < 600 ? 3 : 6),
                  width: calculateWidthPercentage(width < 600 ? 70 : 85),
                  borderWidth: 2,
                  borderRadius: 5,
                  marginBottom: calculateHeightPercentage(2),
                  marginLeft: calculateWidthPercentage(1),
                  shadowColor: "lightblue",
                }}
              >
                <Picker.Item label="Select Account" value="Select Account"/>
                <Picker.Item label="USD" value="USD"/>
                <Picker.Item label="EUR" value="EUR"/>
                <Picker.Item label="GBP" value="GBP"/>
                {/* Add more currency options here */}
              </Picker>
            </View>
            <TouchableOpacity
              style={{
                marginLeft: calculateWidthPercentage(5),
                backgroundColor: "red",
                padding: calculateFontSizePercentage(1),
                borderRadius: 10,
                marginBottom: calculateHeightPercentage(1),
                width: calculateWidthPercentage(width < 600 ? 28 : 45),
                height: calculateHeightPercentage(height < 600 ? 2 : 6),
                borderWidth: 2,
                // value:{value}
              }}
              // onPress={ModalButtonCheck}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: calculateFontSizePercentage(5.5),
                  textAlign: "center",
                }}
              >
                Sell
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cheakmodals;
