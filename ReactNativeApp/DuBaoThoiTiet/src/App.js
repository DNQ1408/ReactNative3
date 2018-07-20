import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList
} from 'react-native';
import axios from 'axios';
import ListItem from './ListItem';
class App extends Component {
  state = {
    data: [],
    textinput: '',
    city: ''

  }
  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=hanoi&appid=927d09bc49dbee6aac7f5cb1df707542')
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.list,
          city: res.city.name
        }, )
      })
  }


  _renderItem = ({ item }) => <ListItem item={item} />
  _keyExtractor = (item) => item.dt

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bigBox1}>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.setState({ textinput: text })}
            underlineColorAndroid='white'
          />
          <TouchableOpacity
            style={styles.search}
          // onPress={}
          >
            <Text style={{ color: 'black', textAlign: 'center' }}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bigBox2}>
          <View style={styles.smallBox1}>
            <Text style={{ fontSize: 20, color: '#fff' }}>Ha noi</Text>
            <Text style={{ fontSize: 15, color: '#fff' }}>20/07/2018</Text>
          </View>
          <View style={styles.smallBox2}>
            <View style={styles.smallBox22}>
              <Image
                source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFUhJREFUeNrsXVtvG8cVniEpSnZcl0kTNAiClnkvUBYFektRy+hD0TflF0R6adMWRZxfYPgX2H7ti5xfYL0VfSgsF70DRRSg71GBNnFbN2YUS6ZI7p7O2V2aupDU7FzPLs9BNitT4uzOzPedy8yZGSFYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWKomkpvAncBHP+mpW1c1a0/A6ItCrvSKX3WLq0xp++p/+3kvtX4vYJyon/bwM/nGr/a4tZkAscG+ngFdNr8pIPma+qj3/Jfps+J+NPlA/Xdc7gGNVfyfegRea/hE9c/Lk6eLjAyQ7KvnP8SfFSl2uVeYAL4Bry5xTV3r+YcjdR3n4EbQZ/8emz5Bs8dW8qtx6fQ9/z6SAAmxy4RgAtgCvqOaZ6MAPN47OdifFZfS7pAWrWjRjAD2xEArgdYByYB32cZP++raKQixowjR515lAmgA/6cI9rdz0Kc52JOn6n6YuzJOmg4siQEahLgiRPNKTgp0pXIyvK+IsMO9zAQ4C3oMUN9V12am6ZPPc8CnTwM3ERgQQoNMGRFeUPerE8twT113FRn2mQCs7d/NfHoYKk2vsJGc1fSBNH6Z75mSYWIZWujdrU5ihrvLbBXkkgIfNf1NVf2uSA8U6D87MUojAwEf3JRnSgYcZWp2JlYBLcEtRYR7TIClAD50c23fLwJZeaYpfGp7cECIMpZBwyo0X8ytgmgsHRHkcgL/s9nA94b7spbAkgxMBCZAAfx1VUUF/HQ9A/1J4EuXzQAlcQ8eyOCFCLsFEXaZANUCPvbebdWZm9mIzvhxDgZ5ssqeQD8XjLYWIAIRWq9MYgS0BO/VcS5B1hD8G0LKbRXUdnLgD8+4Or6AD5ZkIEoEDJaRCI1LCP6tuo0YyRoBH8f2ttVPG8/9/HPBrZcnm5NB2yr4JoJGWegStb6EjNgpiNBnApAB/zsntP5/i3wcFxofPJFBxyq4tAiu3KIVIVa+XCtrIKsNfKX1ZQNHd26IMWr9g2m1TPNzwNcwpcZn3l0j59bgThEk95kAocG//05XdcB9pe17mdZPhwXoTapUNgUBCBAhsjXA2ACtgVzFtQlvVTWtQlYU/BtCNJXLc5S7PE6rAZGIENktMq0fkqB5tbIukawe+H9+Q8jm7WyEB7M0S1cjwiSTjRaPbg10ku2u5kTIh0rvMAG8gf8X2+qVN8Xo0YnhTRvQQwQiGFgDcFSOTxKgS9R+HX+4p0iwxQRwO8qjgt0VBf5kQww/8e+DW7lG4O+9gDgJcPIMSSBXKzNUSp4AyuVR4G89EJD0xOiT6Sosa78+stvgzCUKSQKNsqYkwOD4OnUSSNrg/wVq/gcq2M1HekqN1FRgJIUcCZwHx+RJIGmDv63A/0yB/z8WICSuMYOSwPB9akyCBl23Z7UA/2SYU2Ohitbkl9T4zLAcKQ11jCz/jtKkXoZ60bReo3/j5CRuF/Mg32SACaAB/ncKzT/L7fFJArEkJJBMAtIWQK5uTzW/Ty/OAHBWJBAVJIGjek1JsM0EWKT9//HLfKhTG/yOO8orCVy+kwhEAof1yuZujjeUFdhmAswOem8ISDbzcf4yAazrMQCf4wKRY5So5FZ/M/wnkmBTkeAGGYeDSNC7kSW2DT9WbwTi/AJ1w4Xm4HFSSresqCNDhuXovI9pvXCeYPUN1L1vUcgdkvHB/7OukK0PxPBRJ9tb0yij04YALkGiSwJqE2WBSdBoC9H+Kg6LfiN2FmlUFyhfxaU0//hxJ8/toWwYJQG94ysecBlraZSNqeujRzgidD/2yFDcGEA2b4r0sJdndUpDX99W+wcgj/QIeEFx2FdDcPFSPjJ0cyldoCynH5L72RDZSS7KMhtUmeyl6TsO8B0L1MgVmuYNRYsHohAgy+4U4iMFfnUfF+CXJUYZbHdX1u0sCpmjuu9BLYW6RDyw8npfeQNvxEiXiOMC4QL2pF/C74czl0vw+9ADMsJzpUbRBF0hjAeST1EhRpkfCE6AbAeHdLCR+YDzGi24/x4rXqAQlMeOT5SMn+A5DDhJtlFrFygf9QHl+nzSyfL65cT1ke60CoBDArheB0whFtB1ewK7QrKl4oGvBHeFAlsAeTt3fcZ+wAyUNLkkXp4LC+PQFcI5oNwVul1LC5BtVAujB2L0L/Wv5hztLxfFDR6B78MCONaQy2AF8G9Wv4qjQtdDbcgb0ALIm2L8P3POYaPOu2rt/1OPMxzPe4yyRMhgcwNBCJDtz59+vq6C3zn+PkUQenonaRPQSnfYpuoS4umbycG6Cog3a2QB0ptZpH9hng9r46ia2+WIkI0VQE8Bkpu1IECm/ZPPuucDX0kA9Ey4sOZDs6wsIO53Q1iBABZAaX+trcohMChhuYghiYBbt6zkSRAr4JUAU+0PZ1L8ZUUBCESR7NmdcbqEUtcKpEGsgGcLgNq/f6LiZZLboOZAZneJghXwRoDsqKJxP9f+ZxtGOykMIoAfGJ9On+nECmxUjgACT2DPfH9x5nC6sgAFh8C3AT8sESskEfaI3AoglqpEAKX9uziWq1wgQ+CDAXhtgM9uEVk3KLMC2bxAt0oWYKr9nboquinRYEkaF+SAmoExkhvk2Qr4IUB6vCngWCzM9NRyd0AT5GAJ+jpo/7qeeS4RT+oabFaCAFnwixmfzjrE92hQ4KAYoCLkiZCysdAK9Ds+gmEfFuBtkR5aNAQEIoHPuICwRYllKGzdoPRpji3KzZFtcZEePsm2wcuKbpzI/5mR9iylgbaRAYBvC2KTxfoB1zBX6aT6k3/Xfk1B6sqLLhfMOLYAMl/q6OSEdnAY4Jb9Do8IkZT8HGinbpBrF+iaSA4DamHQvEK6L662aqlhUC4tlWJ+Kug1ugRIPt84XW+pGRDqjPaEkFgAhWoDO0h5cooxigRQ/v+68v8tRn9ipyjAkgGZcsS8KBg+7GRYo2cBpCLAswAgBaJlgqa1YytiR4AMYwQJkB5dyxe9LBrZmZHuACYZoLagBRHWtWLgumuuEZLAWRzQcvdix+vuAGFzAryMALKQ2r/ihMFA+Fx7SM16FX8HA1oWIPf/nxl0HHgCiG1qBGtw0jGEwpqrOMCRCyR7GQFshrkAKggq231KmTyG7jb+v0eHAOmh8v8TzY6uy2SUj016WfSaPsXkuK/TIQCMu3NNH5QAEkBFSBBryBQcfV4HEhz3KBGgZxd8XkQCqB74qbo+leeEPIE5AgRQwUjvfAAMi4Neo1ETqAn4WRwGwr3oBFDSzcZmXYMLFq0IiwF8V+CvYYq1S82u3RwZ5joECCB7egRwdfZUSCKUfA7ESOfw6f8TJl2OufX4BEgPm+XaseQOcBAjUc6gXOB9jIJLnh5tJfYzwZB+331nz9hHSOpuqivDAwxi7ToBjv68qgST1+ITQGsGWJ75+ezdBQkidCZEXl3GgbB1EW6C4FBm38mBGFUCP5PGN/bsCSCbXa2OMDK/1E6BL0tCn6fXLLNlkBrYCxYEHxl2KtiTIKRFKP0sYqvLSiugCswuO3CBWn47Qs736Y069YJzhaV0D/po7gdr/xDSCvq05zyYFQTrkOSCvzkL2GDnDIcEP4cE1SWAE0txgTWIFiuEAn+VLAN95lnHAOloaODzu/AxgVAnV3XXimpnkV6MvQAEgHMvAQZtDhUAX4hne3C/gDIBXWMvAgHcmXObFWEhlz/6TL8I6fqwu+SeABfuewkl6gpEQBqCXJ6S6EDUgBhLHQS7Gj6dJZJIp0MccsQiBrG1Eg3/DTQn+AUdV8inn09hbyCIVDRUu24Oy7YmQDJINV8QStSD6oqw0AF0aO1frTZOBgkBC9AQ+24aGpaEBC53xg6l/Ym2e0PuRyeAlGcIACXXAoMJCaCiwI8N/noFv+ewF4MA45kuUMkGL02CqnWYyz1Pq7C2oGwWLxhij4AL1GiKPb1gtkxly5AAiAPf5cw2WPy6fovxpZQPoxNgeDD+zLwhF60XKDMaRHHvINep0+ARp9WMrUZPxwSCYCH20rHubg4XWAooSZq5wKtSekQI8IOH38UlU4G5XQoE2IdxaunKCIckCE0Gm7PIYoM/pG5wmy0LOQGsT4t0soLk+E9vQrvTPl3s3CNQpcbPs97M5bGpvo5x8hEU2xYTUvuHCIDzvx/2R2L1u3+wxq+TmWBljvbMKrwgaAbdhrLRvmUvakExNe0f7nkzMReLAMkg+bubRjElAcVA2GNQrFUcoYU1HvJ/0mFKhwCKjX+D1LSDy5p5qAgRbA709un2+NLU4QJmxFoyTD8kQwAle6fzMs4efQQlSKCbMwQeABgrIDYdIPABfurzKs/zz5xYAGfbKAz+8CasvtQ+X7RcdGrkgiB45knjrqohnXeK9+87W0Phy/Ux2cPJLAA+/nQo1t78o5NOdJYOrUzSbvkGuigNWre9TF0N3UDXR2AMxMBfDfcnxxrsunpzdwQYJA9PT4jpngBpQAJnRNAFe6SAGEKC3wM5fAS/CmOINXIEULJ7cX62wzwgcASy4PGBawUZG/xhE+wKjDmzAE63Ujv63feeXHpltTPzEQtjAc0YYN53ZfCq+gMHuP5j365RCN9/+p1n/z3uX/7Bn16kaAHE+HC8Y97YFgtitMfFie8cURfwe5TxYbLjsjzX26I8HB+NLfxBy1VhYAJS21weB/EC1Az8nrT/+Chzfx5SJsDO+RRVk4xOSxIYYzFkWoQp8CmAP44U2KJrAa7++K99xdKdubPCAI5JAI4BFjAWBpMvCiLgD6n9i28qTCG2EGOULQDK+4WpcmL29GIH8AS6+GFB8FVl5CzHKffnfdelexkaOfztd55cfu1SZ+6jpCzxCiVGg0yqI731WeBCQrk9obV//r2jjwf9F3745xddd5WXvUGTYXovHabzGwDK7ANaJgYwOd7UwsX3Eh54SKALAX6P2h+xhJjy8QRfm+PeHR6MnGuBcoE0uMGh5zjY7p0JrS0Af+nVw4Ms+L1bGQKoQGVfRey7C1Okoexu0CaBMIXtD30Bvyrgt3yywhBiCTFVJQuQMXZ0kRVwQoIy363yWgETQFOpq/n3Rh61v7cgeCKf/+bbH73w+qWubCxIc5DS4JWkwypJwiCgAPxYrg9k2v/wn4P9L/zoL2/46hmvB2SoCtwqZwXKanOXQaTrNGdXFgcqCn7756L2Rwz5xKh39TffCriwBDp/FyMJLpbVoAR++trfuwVYbAUualBX+2lWIRC2fVeoFfhDaf9g6hGtwOXX1rqNVuPiVzC2BD7/lnagGPxdvBGgGPcfA058edf+QSzAxArgRkZajWVsCcpqwpiWwUWMUDfwTwWxEkL7B1WDB7/+1oPLr66tN9eaF7+KlI5eVRJpGiBaFiXwT3d8OHo0wHH/6yFw2RDh5NbgU81zXcHV6TC2GtbV5dJq1BH8UykwcisUKIMRQDF6Nx2m94YHpq6QEHSOTqUeFFcN/MV+nyrwRYwgVmpHgELeU/5dP9XdTRrAU2PDkoO+RDtAiPfIA1/EBmIkZGsHJQAuZlDBzdbg8VBfm4Cvc8JA0LEMod9Dd1uWcCvLEBOIDdcLXqhZACTBTjJIdoYL5wZmkAB8nxoZkhAxyUcJ/FPXBzGB2AiNx+AEKGQrc4WGabnGhZCnRtoGtcHyqN27fgHBjxgoXJ+tGK0ShQATV+jZ42OxeFdpKNE5sTbBpQRyB8AP6PZg3z+L5PrEtgCZK6TYf+f4wqHRsiSo04nygdydUsGuu8zW409HaAHuxHB9ohOgkFujp+O90dORGQmYCG7qHwH8uMUJ9r0IOOY/S6InxBz8+ltddfvghdcudRrthtnryrpmhHrU+MGBf9rvP/x4gC7PN3yt9KqKBRBFA2wdPRqIi0+ZAcOOrLtFgMqAH/v46NFxNhASG/wkCDCJB1TDvKdPgrIuUV2JYAj8yODHvo7p95P1DZQ7tK3coE3lDtm/vpRVbAJ/oAQI85wF5Si3Z5LqsEWlNcn1viLB/ZUrrY21l1fdVEHKKjeHGzBCzIX0eXk406uCXpzseotSyzYI9vYWjg4MHh+7cQPAZn1wbNfG8j1KuTvewY8jPlvUwEZS5SkrgNsqPlCWoKdvCTSrIyWx5qJwNJG/xTUnwH891mRXJR1gcxKEIAJFL4nKyrJpedTBTz4CtCNBiepVmQxAc0llFcBfiSGQCQka7Ubv8qtrYvb2Kg6rWAUyAMVjjU4PdabDlDz4qQbBp6RowOuqQXf05glKBsnzAkcAWoC3fi8ICf6dKoC/EhbgjDXYVhZg8/Krq6LRbsapcggLAVVYRH+6fExvKCa5SI3z14oABQluqNvttZfbYuXKCq3q65IjiHUJ9wxMbCtW+eEM750q4amS0Z8iwYa6bavguINEsK9GXUaEwi6pRJcHU5oVAbIFLVTSG5ai54ss0vsYHF9SJDB3iareJPFObcHFLEWw+xaFxLZaBsELguP9Iji+g77nUGf/0VLBIuXEuRjvN30eruEtgt07RbC7X1Uc1cL2T1yi5lozc4lm70Fa5SajsGtFvnUJ+vrJIKmsy1NX53cyX4CjRBvtzopoX20Frp6sAdDnvw9q/WLPzp0C/P064KZ2S6VOWYOXVhzGBssmU19/oALdOmn9WhPghDW4ra7NlSstsfpS22AGebmBf2KEB/95T+RDnP261bbWqFBEWFe3mwr86+gSrVxdYSJoAB8PpxjmB1Tsqo9uhdyrkwnghwibBRG6TAQt4O8XwL9X99ovFQrOE6GliNBYWtAvM/CXkgBniaCuLsYISIZ8Sxa5NMDPtiQ8GE98/KUD/lIT4AQRcMToXXWtIwGQCK3LzcI9ql96BGr78VEy2YcfP0Lf/m7dRnaYAOWJ0C2IgJahg1YBiYBXNZvp9HwCgh6vQtvjSM69Avj7y973TIDZVuFtdW2gJWiuNZ6TYRo4S9KAn2h6vPDMrWINBWr595dZ2zMByhEB5xKQDNeKe7Z1Y0sRAg/6Q2LEIcT52WIEOAI9GSjQq3vh3vQL0D/Eex3H8JkAYQmxjrFCQQi8i0ZLZsFzs52TQuK/W7YnXC5Oh8B8HBhDBvZkmIMdPytktwD8bp3H7pkAdAjRU9fXi3tv8jskReY+tWVuJbKfyw23IriF0uyZdh/m9zMHiuwV14d4Z8AzASiQAknQmViIwlqgdIurjOwXlyi0+kTD9xXY97i1WVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFiWVf4vwAAqvS6WlYbTogAAAABJRU5ErkJggg==' }}
                style={styles.image}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={styles.bigtext}>24*C</Text>
            </View>
          </View>
          <View style={styles.smallBox3}>
            <View style={styles.smallBox22}>
              <Text style={{ fontSize: 15, color: '#fff' }}>Clear</Text>
            </View>
            <View style={styles.smallBox22}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.degree}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>°C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.degree}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>°F</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <FlatList
          data={this.state.data}
          extraData={this.state}
          renderItem={this._renderItem}
          numColumns='1'
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const window = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: window.height,
    width: window.width,
    backgroundColor: '#38344C'
  },
  bigBox1: {
    height: '8%',
    width: '95%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10

  },
  inputText: {
    backgroundColor: '#FFFFFF',
    width: '70%',
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  search: {
    backgroundColor: '#FFFFFF',
    // height:'10%',
    width: '20%',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  smallBox1: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigBox2: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallBox2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallBox3: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15
  },
  smallBox22: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150,
  },
  bigtext: {
    fontSize: 50,
    color: '#fff'
  },
  degree: {
    margin: 5,
  }
})

export default App;