import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

/*** GLOBAL VARS ***/
export const MainColor = 'rgb(113,151,107)';

export const Global = StyleSheet.create({
  GlobalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MainColor,
    justifyContent: 'space-around'
  },
});
/**************************/

/*** SCREENS ***/
export const LandingScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  logoImage: {
    width: .4*width,
    marginTop: '15%',
    flex: 1,
    resizeMode: 'contain',
  },
  textContainer: {
    width: .75*width,
    flex: 3,
    marginTop: '20%',
  },
  primaryText: {
    fontFamily: "CrimsonText-Regular",
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 30,
  },
  secondaryText: {
    fontFamily: "CrimsonText-Regular",
    color: 'white',
    marginTop: '5%',
    fontSize: 20
  },
  tourStartButtonContainer: {
    flex: 1,
  },
  tourStartButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export const DefaultScreen = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    marginTop: .15*height,
    width: .5*width,
    resizeMode: 'contain',
  }
});

export const ArtworkScreen = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
  },
  DismissContainer: {
    width: .8*width,
  },
  DismissButton: {
    marginTop: height*.04,
    marginBottom: height*.04,
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
  },
  imgContainer: {
    flex: 1,
    // minHeight: .2*height,
  },
  mediaControlContainer: {
    height: .1*height,
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioIcons: {
    fontSize: 40,
    color: 'white',
    marginRight: .1*width,
  },
  audioText: {
    color: 'white',
    fontSize: 20,
    marginLeft: .05*width,
  },
  artworkImg: {
    flex: 1,
    width: .8*width,
    resizeMode: 'cover',
    margin: 0
  },
  artworkTitle: {
    fontFamily: "CrimsonText-Regular",
    color: 'white',
    fontSize: 30,
    width: .8*width,
    marginBottom: height*.025,
  },
  artworkCopyContainer: {
    flex: 2,
    width: .8*width,
  },
  artworkCopy: {
    fontFamily: "CrimsonText-Regular",
    color: 'white',
    fontSize: 20
  }
});

/**************************/
