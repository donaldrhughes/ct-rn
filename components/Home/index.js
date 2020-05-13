//Home Screen
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container, Text, Button } from 'native-base';


//Components

import Loading from '../common/Loading';
import Head from '../common/Head';
// import Logo from '../common/Logo';
import Foot from '../common/Foot';
import BodyImg from '../common/BodyImg';
import Styles from '../common/Styles';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      headText: null,
      bkImg: null
    };
  }

  componentDidMount(){
    this.setState({
      loading: false,
      headText: 'Login',
      bkImg: 'new-bk2.png'
    })
  }

  render() {
    if (this.state.loading) return <Loading />;
    const headText = this.state.headText;
    const bkImg = this.state.bkImg;

    return (
      <Container><Text>Test App3</Text>  <Button rounded style={Styles.forgotBtn} onPress={() => (this.props.navigation.navigate('Splash'))}>
      <Text style={Styles.btnForgotText}>Splash</Text>
    </Button>
        {/* <StatusBar barStyle="default" />
        <Logo></Logo>
        <Head headText='Login'>
        </Head>
       
        <BodyImg bkImg='new-bk2.png'/> */}
   
      </Container>
    );
  }
}

