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
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import LiveClock from "./LiveClock";
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from "react-native-paper";

const Positions = ({ navigation }) => {
  const { width, height } = Dimensions.get("window"); // Detect screen dimensions
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

  const [Selected, setSelected] = useState('Holdings')
  const [BuyCurrency, setBuyCurrency] =useState();
  const [isBuyVisible,setBuyVisible]=useState(false);
  const [isInvestVisible,setInvestVisible]=useState(false);
  const [isSellVisible,setSellVisible]=useState(false);
  const BuyButtonPress = () => {
    setBuyVisible(true);
  };
  const InvestButtonPress = () => {
    setInvestVisible(true);
  };
  const SellButtonPress = () => {
    setSellVisible(true);
  };
  const options = [
    { label: "Holdings", value: "Holdings" },
    { label: "Position", value: "Position" },
  ];
 
  const ModalButtonCheck=()=>{
    if(!BuyCurrency==0){
    alert("Successfully Done...");
      return;
    }
    else{
      alert("Please Enter Amount...!!!");
    return;
    }
  }

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.BottelGreen,
          height: calculateHeightPercentage(8),
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Positions")}>
          <Text style={{ color: "white" }}>Positions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Holdings")}>
          <Text style={{ color: "white" }}>Holdings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Bulk_Trade")}>
          <Text style={{ color: "white" }}>Bulk Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Closed")}>
          <Text style={{ color: "white" }}>Closed</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexWrap: "wrap",
          marginTop: calculateHeightPercentage(height < 900 ? 1 : 5),
        }}
      >
        <ImageBackground
          style={{ resizeModel: "cover" }}
          source={require("../assets/back2.jpg")}
        >
          <View
            style={{
              flexDirection: "column",
              margin: calculateHeightPercentage(height < 900 ? 1 : 5),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: calculateWidthPercentage(5),
              }}
            >
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(10),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Status
              </Text>
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(10),
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Open
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: calculateWidthPercentage(6.2),
              }}
            >
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                EUR/USD
                <Text
                  style={{
                    fontSize: calculateFontSizePercentage(4),
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {"\n"}
                  <LiveClock />
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                  marginLeft: calculateWidthPercentage(22),
                }}
              >
                {"\u0024"}1.787
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: calculateWidthPercentage(6.2),
              }}
            >
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Invest Amount
              </Text>
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {"\u0024"}1.787
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: calculateWidthPercentage(6.2),
              }}
            >
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: 10,
                  padding: calculateFontSizePercentage(1),
                  height: calculateHeightPercentage(5),
                }}
              >
                Today | Profit
              </Text>
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: 10,
                  padding: calculateFontSizePercentage(1),
                  height: calculateHeightPercentage(5),
                }}
              >
                {"\u0024"}1.787
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: calculateWidthPercentage(6.2),
              }}
            >
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Current Value
              </Text>
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {"\u0024"}3.787.0000
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: calculateWidthPercentage(6.2),
              }}
            >
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Lot Size
              </Text>
              <Text
                style={{
                  fontSize: calculateFontSizePercentage(5),
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {"\u0024"}100
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: calculateWidthPercentage(6.2),
                justifyContent: "space-between",
                marginTop: calculateHeightPercentage(1),
                marginBottom: calculateHeightPercentage(1),
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "green",
                  padding: calculateFontSizePercentage(1),
                  borderRadius: 10,
                  width: calculateWidthPercentage(width < 600 ? 22 : 45),
                  height: calculateHeightPercentage(height < 600 ? 2 : 6),
                  borderWidth: 2,
                }}
                onPress={BuyButtonPress}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: calculateFontSizePercentage(5.5),
                    textAlign: "center",
                  }}
                >
                  Buy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "lightblue",
                  padding: calculateFontSizePercentage(1),
                  borderRadius: 10,
                  width: calculateWidthPercentage(width < 600 ? 32 : 55),
                  height: calculateHeightPercentage(height < 600 ? 2 : 6),
                  borderWidth: 2,
                }}
                onPress={InvestButtonPress}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: calculateFontSizePercentage(5.3),
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Add Invest
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  padding: calculateFontSizePercentage(1),
                  borderRadius: 10,
                  width: calculateWidthPercentage(width < 600 ? 22 : 45),
                  height: calculateHeightPercentage(height < 600 ? 2 : 6),
                  borderWidth: 2,
                }}
                 onPress={SellButtonPress}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: calculateFontSizePercentage(6),
                    textAlign: "center",
                  }}
                >
                  Sell
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBuyVisible}
        onRequestClose={() => setBuyVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: calculateFontSizePercentage(1),
              borderRadius: 10,
              width: calculateWidthPercentage(80),
              // alignItems: "center",
            }}
          >
          <View
            style={{
              backgroundColor: '#EFF8FF',
              padding: calculateFontSizePercentage(1),
              width: calculateWidthPercentage(78),
              borderRadius:10,
              height:calculateHeightPercentage(height < 600 ? 2 : 8),
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
          <Image
            source={require('../assets/EurUsd.png')}
            style={{ width: 40, height: 40 }}
          ></Image>
            <Text
              style={{
                fontSize: calculateFontSizePercentage(8),
              }}
            >
              EUR/USD
            </Text>
            <TouchableOpacity
              style={{
                alignItems:"flex-end"
              }}
              onPress={() => setBuyVisible(false)}
            >
            <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
             <Text style={{
                fontSize:calculateFontSizePercentage(10),
                padding:calculateFontSizePercentage(3),
                color:"red",
                textAlign:"center",
              }}
             >
                {"\u0024"}1.787
             </Text>
             <Text style={{fontSize:calculateFontSizePercentage(4.4),marginLeft:calculateWidthPercentage(5)}}>Amount</Text>
              <TextInput 
                label="Amount"
                placeholder="$ 0"
                value={BuyCurrency}
                placeholderTextColor="black"
                keyboardType='numeric'
                style={{color:"black",fontSize:calculateFontSizePercentage(6),height:calculateHeightPercentage(height < 600 ? 2 : 5),width:calculateWidthPercentage(width < 600 ? 65 : 70),borderWidth:2,padding:calculateFontSizePercentage(1.5),borderRadius:5,marginBottom:calculateHeightPercentage(2),marginLeft:calculateWidthPercentage(5)}}
                onChangeText={(e)=>setBuyCurrency(e)}  
              />
      <View style={{ marginHorizontal: calculateWidthPercentage(3.5) }}>
        {options.map((option) => (
          <View
            key={option.value}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: calculateHeightPercentage(0.1), // Adjust spacing between options
              justifyContent:"flex-start"
            }}
          >
            <RadioButton.Android
              value={option.value}
              status={Selected === option.value ? "checked" : "unchecked"}
              onPress={() => setSelected(option.value)}
              color={COLORS.primaryColor} // Customize the color
            />
            <Text style={{ marginLeft: 10 }}>{option.label}</Text>
          </View>
        ))}
      </View>
              <TouchableOpacity
                style={{
                  marginLeft:calculateWidthPercentage(5),
                  backgroundColor: "green",
                  padding: calculateFontSizePercentage(1),
                  borderRadius: 10,
                  marginBottom:calculateHeightPercentage(1),
                  width: calculateWidthPercentage(width < 600 ? 28 : 45),
                  height: calculateHeightPercentage(height < 600 ? 2 : 6),
                  borderWidth: 2,
                  // value:{value}
                }}
                onPress={ModalButtonCheck}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: calculateFontSizePercentage(5.5),
                    textAlign: "center",
                  }}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isInvestVisible}
        onRequestClose={() => setInvestVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: calculateFontSizePercentage(1),
              borderRadius: 10,
              width: calculateWidthPercentage(80),
              // alignItems: "center",
            }}
          >
          <View
            style={{
              backgroundColor: '#EFF8FF',
              padding: calculateFontSizePercentage(1),
              width: calculateWidthPercentage(78),
              borderRadius:10,
              height:calculateHeightPercentage(height < 600 ? 2 : 8),
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
          <Image
            source={require('../assets/EurUsd.png')}
            style={{ width: 40, height: 40 }}
          ></Image>
            <Text
              style={{
                fontSize: calculateFontSizePercentage(8),
              }}
            >
              EUR/USD
            </Text>
            <TouchableOpacity
              style={{
                alignItems:"flex-end"
              }}
              onPress={() => setInvestVisible(false)}
            >
            <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
             {/* <Text style={{
                fontSize:calculateFontSizePercentage(10),
                padding:calculateFontSizePercentage(3),
                color:"red",
                textAlign:"center",
              }}
             >
                {"\u0024"}1.787
             </Text> */}
             <Text style={{fontSize:calculateFontSizePercentage(4.4),marginLeft:calculateWidthPercentage(5)}}>Investment Amount</Text>
              <TextInput 
                label="Amount"
                placeholder="$ 0"
                value={BuyCurrency}
                placeholderTextColor="black"
                keyboardType='numeric'
                style={{color:"black",fontSize:calculateFontSizePercentage(6),height:calculateHeightPercentage(height < 600 ? 2 : 5),width:calculateWidthPercentage(width < 600 ? 65 : 70),borderWidth:2,padding:calculateFontSizePercentage(1.5),borderRadius:5,marginBottom:calculateHeightPercentage(2),marginLeft:calculateWidthPercentage(5)}}
                onChangeText={(e)=>setBuyCurrency(e)}  
              />
      {/* <View style={{ marginHorizontal: calculateWidthPercentage(3.5) }}>
        {options.map((option) => (
          <View
            key={option.value}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: calculateHeightPercentage(0.1), // Adjust spacing between options
              justifyContent:"flex-start"
            }}
          >
            <RadioButton.Android
              value={option.value}
              status={Selected === option.value ? "checked" : "unchecked"}
              onPress={() => setSelected(option.value)}
              color={COLORS.primaryColor} // Customize the color
            />
            <Text style={{ marginLeft: 10 }}>{option.label}</Text>
          </View>
        ))}
      </View> */}
              <TouchableOpacity
                style={{
                  marginLeft:calculateWidthPercentage(5),
                  backgroundColor: "green",
                  padding: calculateFontSizePercentage(1),
                  borderRadius: 10,
                  marginBottom:calculateHeightPercentage(1),
                  width: calculateWidthPercentage(width < 600 ? 28 : 45),
                  height: calculateHeightPercentage(height < 600 ? 2 : 6),
                  borderWidth: 2,
                  // value:{value}
                }}
                onPress={ModalButtonCheck}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: calculateFontSizePercentage(5.5),
                    textAlign: "center",
                  }}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSellVisible}
        onRequestClose={() => setSellVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: calculateFontSizePercentage(1),
              borderRadius: 10,
              width: calculateWidthPercentage(80),
              // alignItems: "center",
            }}
          >
          <View
            style={{
              backgroundColor: '#EFF8FF',
              padding: calculateFontSizePercentage(1),
              width: calculateWidthPercentage(78),
              borderRadius:10,
              height:calculateHeightPercentage(height < 600 ? 2 : 8),
              flexDirection:"row",
              justifyContent:"space-between"
            }}
          >
          <Image
            source={require('../assets/EurUsd.png')}
            style={{ width: 40, height: 40 }}
          ></Image>
            <Text
              style={{
                fontSize: calculateFontSizePercentage(8),
              }}
            >
              EUR/USD
            </Text>
            <TouchableOpacity
              style={{
                alignItems:"flex-end"
              }}
              onPress={() => setSellVisible(false)}
            >
            <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
          </View>
             <Text style={{
                fontSize:calculateFontSizePercentage(10),
                padding:calculateFontSizePercentage(3),
                color:"red",
                textAlign:"center",
              }}
             >
                {"\u0024"}1.787
             </Text>
             {/* <Text style={{fontSize:calculateFontSizePercentage(4.4),marginLeft:calculateWidthPercentage(5)}}>Amount</Text> */}
              {/* <TextInput 
                label="Amount"
                placeholder="$ 0"
                value={BuyCurrency}
                placeholderTextColor="black"
                keyboardType='numeric'
                style={{color:"black",fontSize:calculateFontSizePercentage(6),height:calculateHeightPercentage(height < 600 ? 2 : 5),width:calculateWidthPercentage(width < 600 ? 65 : 70),borderWidth:2,padding:calculateFontSizePercentage(1.5),borderRadius:5,marginBottom:calculateHeightPercentage(2),marginLeft:calculateWidthPercentage(5)}}
                onChangeText={(e)=>setBuyCurrency(e)}  
              />
      <View style={{ marginHorizontal: calculateWidthPercentage(3.5) }}>
        {options.map((option) => (
          <View
            key={option.value}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: calculateHeightPercentage(0.1), // Adjust spacing between options
              justifyContent:"flex-start"
            }}
          >
            <RadioButton.Android
              value={option.value}
              status={Selected === option.value ? "checked" : "unchecked"}
              onPress={() => setSelected(option.value)}
              color={COLORS.primaryColor} // Customize the color
            />
            <Text style={{ marginLeft: 10 }}>{option.label}</Text>
          </View>
        ))}
      </View> */}
              <TouchableOpacity
                style={{
                  marginLeft:calculateWidthPercentage(5),
                  backgroundColor: "red",
                  padding: calculateFontSizePercentage(1),
                  borderRadius: 10,
                  marginBottom:calculateHeightPercentage(1),
                  width: calculateWidthPercentage(width < 600 ? 28 : 45),
                  height: calculateHeightPercentage(height < 600 ? 2 : 6),
                  borderWidth: 2,
                  // value:{value}
                }}
                onPress={ModalButtonCheck}
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
    </SafeAreaView>
  );
};
const Bulk_Trade = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.BottelGreen,
          height: 50,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Positions")}>
          <Text style={{ color: "white" }}>Positions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Holdings")}>
          <Text style={{ color: "white" }}>Holdings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Bulk_Trade")}>
          <Text style={{ color: "white" }}>Bulk Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Closed")}>
          <Text style={{ color: "white" }}>Closed</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 50, color: "black" }}>Bulk Trade</Text>
      </View>
    </SafeAreaView>
  );
};
const Closed = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.BottelGreen,
          height: 50,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Positions")}>
          <Text style={{ color: "white" }}>Positions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Holdings")}>
          <Text style={{ color: "white" }}>Holdings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Bulk_Trade")}>
          <Text style={{ color: "white" }}>Bulk Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Closed")}>
          <Text style={{ color: "white" }}>Closed</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 50, color: "black" }}>Closed</Text>
      </View>
    </SafeAreaView>
  );
};
const Holdings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.BottelGreen,
          height: 50,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Positions")}>
          <Text style={{ color: "white" }}>Positions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Holdings")}>
          <Text style={{ color: "white" }}>Holdings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Bulk_Trade")}>
          <Text style={{ color: "white" }}>Bulk Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Closed")}>
          <Text style={{ color: "white" }}>Closed</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 50, color: "black" }}>Holdings</Text>
      </View>
    </SafeAreaView>
  );
};
export { Positions, Closed, Holdings, Bulk_Trade };