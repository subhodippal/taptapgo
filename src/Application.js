import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';

const Application = () => {
  //--------------------------- Declare states ----------------
  const [tapTapCount, setTapTapCount] = useState(0);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showTapTapScreen, setShowTapTapScreen] = useState(false);
  const [showResultScreen, setShowResultScreen] = useState(false);
  const [highscore, setHighscore] = useState(0);

  //--------------------------- Functions / Methods ----------------
  useEffect(() => {
    if (showTapTapScreen) {
      setTapTapCount(0);
      setTimeout(() => {
        setShowTapTapScreen(false);
        setShowResultScreen(true);
      }, 5 * 1000);
    }
  }, [showTapTapScreen]);

  const getHighscore = () => {
    let newHighscore =
      highscore && highscore > tapTapCount ? highscore : tapTapCount;
    setHighscore(newHighscore);
    return newHighscore;
  };

  const onClickStart = () => {
    setShowResultScreen(false);
    setShowStartScreen(false);
    setShowTapTapScreen(true);
  };

  //--------------------------- UI Components ----------------
  const StartScreenComponent = () => (
    <View style={styles.viewContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Tap Tap Go</Text>
      </View>

      <View style={styles.startButtonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={onClickStart}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Start</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  const TapTapScreenComponent = () => {
    return (
      <View style={styles.taptapScreenContainer}>
        <TouchableOpacity
          onPress={() => setTapTapCount(tapTapCount + 1)}
          style={styles.taptapButtonContainer}>
          <View style={styles.taptapTextContainer}>
            <Text style={styles.taptapText}>Tap</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ResultScreenComponent = () => {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={styles.resultComponent}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>You have tap </Text>
            <Text style={styles.titleText}>{tapTapCount}</Text>
            <Text style={styles.titleText}>times</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>
              <Text style={styles.messageCount}>
                Highscore: {getHighscore()}{' '}
              </Text>
            </Text>
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity
            onPress={onClickStart}
            style={styles.tryAgainButton}>
            <View>
              <Text style={styles.tryAgainText}>Try Again</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showStartScreen && <StartScreenComponent />}
      {showTapTapScreen && <TapTapScreenComponent />}
      {showResultScreen && <ResultScreenComponent />}
    </View>
  );
};

export default Application;
