// import Family from "../Utilities/Family";
// import { typography } from "../theme";
// import theme from "./theme";
import theme from "../components/theme"
// import { FONTS } from "./theme"

export const globalStyles = {
  label: {
    color: 'black',
    // opacity:.7,
    fontSize: 14,
    // fontFamily:typography.primary.bold,

  },
  rowflex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  searchBox: {
    backgroundColor: "white",
    // opacity:.8,
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    alignItems: 'center',
    // elevation:1,
    marginVertical: 10,
    borderWidth: .3,
    borderColor: "rgba(0,0,0,.1)"
  },
  rowflex2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"

  },
  globalFontFamily: {
    fontFamily: "",
  },
  circle: {
    width: 18,
    height: 18, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(0,0,0,.5)', justifyContent: "center", alignItems: "center"
  },
  dots: {
    width: 6,
    height: 6, borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,.1)"
  },
  circleActive: {
    width: 15,
    height: 15, borderRadius: 20, borderWidth: 4, borderColor: theme.colors.primary, justifyContent: "center", alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 16,
    // fontWeight:"bold"
    // fontFamily: FONTS.intBold,

    flexShrink: 1,
    flexGrow: 0,
  },
  textBold: {
    color: "black",
    fontSize: 16,
    fontWeight: "800",
    flexShrink: 1,
    // fontFamily: FONTS.intBold,
    flexGrow: 0,
  },
  primaryText: {
    color: theme.colors.primary,
    fontSize: 16,
    // fontWeight:"bold"
    flexShrink: 1,
    flexGrow: 0,
  },
  priceText: {
    color: theme.colors.primary,
    fontSize: 26,
    // fontWeight:"bold"
    flexShrink: 1,
    flexGrow: 0,
  },
  line: {
    backgroundColor: "white",
    opacity: .3,
    height: 3,
    borderRadius: 3,
    flex: 1,
    marginVertical: 5
  },
  text2: {
    color: "black",
    fontSize: 12,
    // fontWeight:"bold"
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 30

  },
  container2: {
    backgroundColor: 'white', flex: 1, padding: 15, borderRadius: 5, marginVertical: 10, elevation: 2


  },
  container3: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10

  },
  box: {
    // height: 90,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '99.5%',
    marginLeft: 1,

    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    marginVertical: 10,
  },
  box2: {
    // height: 90,
    backgroundColor: 'white',
    borderRadius: 10,
    // width: '99',
    // marginLeft: 1,

    padding: 10,
    // flexDirection: 'row',
    alignItems: 'center',
    // elevation: 1,
    marginVertical: 10,
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,.1)"
  },

}