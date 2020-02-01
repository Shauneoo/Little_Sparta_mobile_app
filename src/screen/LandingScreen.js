import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity } from 'react-native';
import { Global, LandingScreen, ArtworkScreen} from '../style/styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Sound from 'react-native-sound';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworkAudio: 'welcome.mp3'
    };
  }

  componentWillMount() {
    artworkSound = new Sound(this.state.artworkAudio, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });
  }


  renderSoundControls = () => {
    if (this.state.isSoundPlaying) {
      return (
        <View style={ArtworkScreen.mediaControlContainer}>
          <TouchableOpacity
            onPress={ () => this.pauseLogic() }
          >

            {this.state.isSoundPaused ?
              <FontAwesome style={ArtworkScreen.audioIcons}>{Icons.play}</FontAwesome> :
              <FontAwesome style={ArtworkScreen.audioIcons}>{Icons.pause}</FontAwesome>
            }
          </TouchableOpacity>
            <TouchableOpacity
              onPress={ () => this.soundPlayLogic() }
            >
              <FontAwesome style={ArtworkScreen.audioIcons}>{Icons.stop}</FontAwesome>
            </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <TouchableOpacity
          style={ArtworkScreen.mediaControlContainer}
          onPress={ () => this.soundPlayLogic() }
        >
          <FontAwesome style={ArtworkScreen.DismissButton}>{Icons.volumeUp}</FontAwesome>
          <Text style={ArtworkScreen.audioText}>Listen to Audio</Text>
        </TouchableOpacity>
      )
    }
  }

  soundPlayLogic = () => {
    if (this.state.isSoundPlaying) {
      artworkSound.stop();
      this.setState({ isSoundPlaying: false, isSoundPaused: false });
      return;
    } else if (!this.state.isSoundPlaying) {
      artworkSound.play();
      this.setState({ isSoundPlaying: true });
    }
  }

  pauseLogic = () => {
    if (this.state.isSoundPaused === false) {
      artworkSound.pause();
      this.setState({ isSoundPaused: true });
      return;
    } else if (this.state.isSoundPaused === true) {
      artworkSound.play();
      this.setState({ isSoundPaused: false });
    }
  }

  startTour = () => {
    artworkSound.release(); // Release the audio player resource
    this.props.navigation.navigate('Default')
  }

  render() {
    const { artworkTitle, artworkCopy, artworkImg, artworkAudio } = this.state;
    return (
      <View style={Global.GlobalContainer}>
        <Image
          style={LandingScreen.logoImage}
          source={require('../img/logo.png')}
        />
        <View style={LandingScreen.textContainer}>
          <Text style={LandingScreen.primaryText}>Welcome to Little Sparta</Text>
          <Text style={LandingScreen.secondaryText}>This app allows visitors to explore the garden of Ian Hamilton Finlay and to follow an audio tour led by Head Gardener George Gilliland.</Text>
          <View>
            {this.renderSoundControls()}
          </View>
        </View>
        <TouchableOpacity
          style={LandingScreen.tourStartButtonContainer}
          onPress={() => this.startTour()}
        >
          <Text style={LandingScreen.tourStartButton}>Start Tour</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default withNavigationFocus(Landing, 'Landing');

// onPress={() => this.props.navigation.navigate('Default')}
//onPress={() => this.props.navigation.navigate('Artwork', { major: 19944})}
