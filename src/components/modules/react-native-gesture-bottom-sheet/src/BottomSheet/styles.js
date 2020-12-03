import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-end"
  },
  background: {
    flex: 1,
    backgroundColor: "transparent"
  },
  container: {
    backgroundColor: "#F3F3F3",
    width: "100%",
    height: 0,
    overflow: "hidden",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },
  draggableContainer: {
    width: "100%",
    alignItems: "center",
    // backgroundColor: "transparent"
  },
  draggableIcon: {
    width: 55,
    height: 6,
    // borderRadius: 3,
    margin: 10,
    // marginBottom: 10,
  }
});

export default styles;
