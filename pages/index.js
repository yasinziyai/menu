import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App(props) {
  let [hovered, setHovered] = useState(false);
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "100vh",
      }}
    >
      <View style={styles.header}>
        <View
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Pressable style={{ height: 40 }}>منوی اول</Pressable>
          {hovered ? (
            <View style={styles.menubox}>
              <Pressable
                style={({ hovered }) => ({ color: hovered ? "red" : "black" })}
              >
                خرید بستنی
              </Pressable>
              <Pressable>خرید کیک</Pressable>
            </View>
          ) : (
            ""
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    width: "100%",
    height: 40,
  },
  tex: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  menubox: {
    backgroundColor: "#e0e9e9",
    width: 120,
    position: "absolute",
    top: 40,
  },
});
