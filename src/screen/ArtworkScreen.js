import React, { Component } from 'react';
import { Dimensions, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Sound from 'react-native-sound';
import { Global, ArtworkScreen } from '../style/styles';
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'

// Enable playback in silence mode (iOS only)
Sound.setCategory('Playback');

let artworkSound; //artwork sound instance

const artworkStore = [
  { major: 8660,
    artworkTitle: 'Bring Back the Birch',
    artworkCopy: 'an example of a planted pun - not endorsing the received definition of the phrase (corporal punishment) - but a plea for the return of native tree species - the memorial form of the headstone is planted around with wild cherry trees and not the expected birch.',
    artworkGarden: 'Front Garden',
    artworkImg: require('../img/Bring-Back-the-Birch.png'),
    artworkAudio: 'bring-back-the-birch.mp3'
  },
  { major: 19944,
    artworkTitle: 'Temple of Apollo',
    artworkCopy: 'its importance and controversy - for Finlay an example of the increasing secularisation of art in the modern world - as a matter of principle for him the garden temple should be accorded the same status and importance as any religious building. The tale of the ensuing battle…',
    artworkGarden: 'Temple garden',
    artworkImg: require('../img/TemplePoolGarden_AndrewLawson.png'),
    artworkAudio: 'temple-of-apollo.mp3'
  },
  { major: 22011,
    artworkTitle: 'Wave, Vague, Woge, Onda, Unda',
    artworkCopy: 'taking ideas and influences from great  landscape gardeners of the past and reconfiguring them on a more domestic scale appropriate to the size of the garden - reshaping the grassland to humped forms each topped with a carved stone on which is the word for ‘wave ‘ from different `European language - an inland sea.',
    artworkGarden: 'English Parkland',
    artworkImg: require('../img/TheWaveLawn.png'),
    artworkAudio: 'english-parkland.mp3'
  },
  { major: 63294,
    artworkTitle: 'Claudi Bridge',
    artworkCopy: 'an example of how Finlay ‘signs’ the landscape - in this instance by recreating a scene from a painting by Claude Lorraine (whose paintings contain many elements important to Finlay - visions of Arcadia, idylls and ruins) - and then ‘signing’ the bridge with his name as an act of homage.',
    artworkGarden: 'The Lochan Eck Garden',
    artworkImg: require('../img/Claudi.png'),
    artworkAudio: 'claudi-bridge.mp3'
  },
  { major: 689,
    artworkTitle: 'The Nuclear Sail',
    artworkCopy: 'The Nuclear Sail - what looks like a minimalist culture is the conning tower of a nuclear submarine - where we would expect to see reflections of canvas sails in the water Finlay places something much more sinister - again punning and playing with our received understanding of things, their definition and context.',
    artworkGarden: 'The Lochan Eck Garden',
    artworkImg: require('../img/nuclear-sail.png'),
    artworkAudio: 'nuclear-sail.mp3'
  },
  { major: 20177,
    artworkTitle: 'Hand Grenade Finials',
    artworkCopy: 'Which in 18th century garden would have been topped with pineapple finials - as a reference to the owners wealth and knowledge - here replaced with hand grenades - which were given the slang term ‘pineapples’ by soldiers in WW2.',
    artworkGarden: 'Woodland Garden',
    artworkImg: require('../img/Gateway_AndrewLawson.png'),
    artworkAudio: 'pineapple-grenades.mp3'
  },
  { major: 19900,
    artworkTitle: 'Tree Column Base pantheon',
    artworkCopy: 'Trees are nature’s columns - here formalised by placing dressed stone bases in front of each inscribed with the name of key figures for Finlay - artists, philosophers, revolutionaries - thereby paying them an act of growing or eternal homage.',
    artworkGarden: 'Woodland Garden',
    artworkImg: require('../img/Hillside-Pantheon_Robin-Gillanders_fullview.png'),
    artworkAudio: 'tree-column-base.mp3'
  },
  { major: 19236,
    artworkTitle: 'The Present Order is The Disorder of The Future',
    artworkCopy: 'a monumental piece made up of fragments of stone carved with an inscription from Saint Just - one of the main protagonists in French Revolution - it exists as a political statement but also as a reference to order and disorder in nature - man’s influence in creating a garden out of wildness.',
    artworkGarden: 'The Lochan Eck Garden',
    artworkImg: require('../img/Present-Tense_AndrewLawson.png'),
    artworkAudio: 'disorder-of-the-future.mp3'
  },
  { major: 22607,
    artworkTitle: 'Little Fields Long Horizons',
    artworkCopy: 'reads as a poem which is a play on words and definition - their structure as stone dykes (which is part of the vernacular architecture of the countryside) used as enclosures - for Finlay here they become openings as they carry the meaning of the poem. Longing as a measure of distance and as a yearning of the heart.',
    artworkGarden: 'The Lochan Eck Garden',
    artworkImg: require('../img/LongHorizons_RobinGillander.png'),
    artworkAudio: 'little-fields.mp3'
  },
  { major: 16299,
    artworkTitle: 'Camouflaged Flowers',
    artworkCopy: 'on each of the brick plinths a bronze silhouette of a corvette or gunship from WW2 - which were given flower names. As the ships themselves were camouflaged with painted patterns to disguise them from the enemy - Finlay re-camouflages their names by making the words into anagrams - mixing up the letters (then gives the answers on the final plaque).',
    artworkGarden: 'Wild Garden',
    artworkImg: require('../img/Camouflaged_Flowers_RobinGillander.png'),
    artworkAudio: 'camouflaged-flowers.mp3'
  },
  { major: 16432,
    artworkTitle: 'The Golden Head',
    artworkCopy: 'the god Apollo is given the features of Saint Just and on his forehead the inscription Apollon Terroriste - again combining the classical and revolutionary worlds - the story is told of how Apollo was challenged by a youth Marsyas to a competition playing the flute (the god’s instrument) and who then had the audacity to win - Apollo exacted his punishment by flaying him alive - hence Apollon Terroriste.',
    artworkGarden: 'The Wild Garden',
    artworkImg: require('../img/Apollo-terroriste.png'),
    artworkAudio: 'apollo-terroriste.mp3'
  },
  { major: 20779,
    artworkTitle: 'Hortus Conclusus',
    artworkCopy: 'the final work realised in the garden - a collapsed barn deliberately rebuilt as a ruin to contain a walled garden - in the medieval world a Hortus Conclusus - which is kept locked - a place apart - a small formal parterre garden planted with roses and in final ‘room’ a circular pool inscribed with the name of clouds in Latin - cumulus, sirrus etc - a reflecting pool containing a piece of the sky.',
    artworkGarden: 'The Temple Pool Garden',
    artworkImg: require('../img/Hortus-Conclusus_RobinGillander.png'),
    artworkAudio: 'hortus-conclusus.mp3'
  }
];

class Artwork extends Component {

  constructor(props) {
    super(props);
    this.state = {
      major: this.props.navigation.state.params.major,
      artworkTitle: '',
      artworkCopy: '',
      artworkAudio: '',
      loadSound: false,
      isSoundPlaying: false,
      isSoundPaused: false
    };
  }

  componentDidMount() {
    var artwork = this.search(this.state.major, artworkStore);
    this.setState({artworkTitle: artwork.artworkTitle, artworkCopy: artwork.artworkCopy, artworkImg: artwork.artworkImg, artworkAudio: artwork.artworkAudio, loadSound: true})
  }

  search = (majorKey, myArray) => {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].major == majorKey) {
            return myArray[i];
        }
    }
  }

  componentWillUnmount() {
    this.setState({ isSoundPlaying: false, isSoundPaused: false });
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

  gobackToDefault = () => {
    this.props.navigation.goBack()
    artworkSound.release(); // Release the audio player resource
  }

  render() {
    {
      if(this.state.loadSound) {
        artworkSound = new Sound(this.state.artworkAudio, Sound.MAIN_BUNDLE, (error) => {
          this.setState({loadSound: false})
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
        });
      }
    }
    return (
      <View style={Global.GlobalContainer}>

        <TouchableOpacity
          style={ArtworkScreen.DismissContainer}
          onPress={() => this.gobackToDefault()}

        >
          <Text style={ArtworkScreen.DismissButton}>
            <FontAwesome>{Icons.times}</FontAwesome>
          </Text>
        </TouchableOpacity>

        <View style={ArtworkScreen.imgContainer}>
          <Image
            style={ArtworkScreen.artworkImg}
            source={this.state.artworkImg}
          />
          <View>
            {this.renderSoundControls()}
          </View>
        </View>

        <Text style={ArtworkScreen.artworkTitle}>
          {this.state.artworkTitle}
        </Text>
        <ScrollView style={ArtworkScreen.artworkCopyContainer}>
          <Text style={ArtworkScreen.artworkCopy}>
            {this.state.artworkCopy}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
export default withNavigationFocus(Artwork, 'Artwork')
