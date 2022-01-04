import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import styles from './styles';

const Application = () => {
    const [tapTapCount, setTapTapCount] = useState(0);
    const [count, setCount] = useState('');
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const [showStartScreen, setShowStartScreen] = useState(true);
    const [showTapTapScreen, setShowTapTapScreen] = useState(false);
    const [showResultScreen, setShowResultScreen] = useState(false);
    const [showStartCountScreen, setShowStartCountScreen] = useState(false);

    useEffect(()  => {
        if(showStartCountScreen) {
            setCount(3);
            setTimeout(() => {
                setCount(2);
                setTimeout(() => {
                    setCount(1);
                    setTimeout(() => {
                        setCount('Go');
                        setTimeout(() => {
                            setCount('');
                            setShowStartCountScreen(false);
                            setShowTapTapScreen(true);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }
    }, [showStartCountScreen]);

    useEffect(()  => {
        if(showTapTapScreen) {
            setTapTapCount(0);
            setTimeout(() => {
                setShowTapTapScreen(false);
                setShowResultScreen(true);
            }, 5 * 1000);
        }
    }, [showTapTapScreen]);


    //--------------- Show Splash Screen --------------
    setTimeout(() => {
        setShowSplashScreen(false);
    }, 1 * 1000);

    const onClickStart = () => {
        setShowResultScreen(false);
        setShowStartScreen(false);
        setShowStartCountScreen(true);
    }

    //------------- Screens --------------
    const SplashScreenComponent = () => (
        <View style={styles.viewContainer}>
            <View style={styles.center}>
                <View style={styles.splashScreenTextContainer}>
                    <Text style={styles.splashScreenText}>Tap Tap Go</Text>
                </View>
            </View>
        </View>
    )

    const StartScreenComponent = () => (
        <View style={styles.viewContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Tap Tap Go</Text>
            </View>

            <View style={styles.startButtonContainer}>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={onClickStart}>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>Start</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

    const StartCountScreenCmponent = () => {
        return (
            <View style={styles.viewContainer}>
                <View style={styles.startCountContainer}>
                    <Text style={styles.startCountText}>{count}</Text>
                </View>
            </View>
        )
    }

    const TapTapScreenComponent = () => {
        return (
            <View style={styles.taptapScreenContainer}>
                <View style={styles.spaceView} />
                <TouchableOpacity onPress={() => setTapTapCount(tapTapCount+1)} style={styles.taptapButtonContainer}>
                    <View style={styles.taptapTextContainer}>
                        <Text style={styles.taptapText}>Tap</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const ResultScreenComponent = () => {
        return (
            <View 
                style={{flex: 1, justifyContent: 'space-between', borderWidth: 1, borderColor: 'red'}}
            >
                <View style={styles.resultComponent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Result</Text>
                    </View>
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>you have tap <Text style={styles.messageCount}> {tapTapCount} </Text> times</Text>
                    </View>
                </View>
                <View
                    style={{flex: 1, justifyContent: 'space-between', borderWidth: 1, borderColor: 'red'}} 
                    style={{alignSelf: 'flex-end', }}
                >
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
    }

    return <SplashScreenComponent />;
    // return showSplashScreen ? <SplashScreenComponent /> : (
    //     <View style={styles.container}>
    //         {showStartScreen && <StartScreenComponent />}
    //         {showStartCountScreen && <StartCountScreenCmponent />}
    //         {showTapTapScreen && <TapTapScreenComponent />}
    //         {showResultScreen && <ResultScreenComponent />}
    //     </View>
    // )
}

export default Application;

//---Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#222",
    //   backgroundColor: ''
    },
    viewContainer: {
        flex: 1,
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    //--------------------- Result Container ---------------

    resultComponent: {
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '60%',
        elevation: 5,
        width: '95%',
        alignSelf: 'center',
    },
    messageContainer: {
        alignSelf: 'center',
        alignItems: 'flex-end',

    },
    messageText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        lineHeight: 24,
    },
    messageCount: {
        color: '#FFDC0D',
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 24,
    },    
    tryAgainButton: {
        backgroundColor: '#FCD71E',
        borderRadius: 250,
        paddingVertical: 5,
        paddingHorizontal: 15, 
    },
    tryAgainText: {
        fontSize: 16,
        color: '#222',
        fontWeight: 'bold',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    //--------------------- TapTap Screen --------------
    taptapText: {
        color: '#FFDC0D',
        fontSize: 40,
        fontWeight: 'bold',
    },
    taptapScreenContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    taptapButtonContainer: {
        borderColor: '#FFDC0D',
        borderWidth: 4,
        borderRadius: 250,
        height: 120,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },

    //--------------------- StartCount Screen -------------
    startCountText: {
        color: '#FFDC0D',
        fontSize: 100,
        fontWeight: 'bold',
    },
    startCountContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //--------------------- Splash Screen --------------
    splashScreenTextContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFDC0D',
        height: 320,
        width: 320,
        borderRadius: 250,
        elevation: 50,
        borderWidth: 4,
        borderColor: 'white',
        opacity: 0.8,
        
    },
    splashScreenText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        elevation: 4,
    },

    //--------------------- Title Style   --------------
    titleContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        paddingVertical: 20,
    },
    titleText: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
    },

    //--------------------- Button Style ----------------
    startButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startButton: {
        backgroundColor: '#FBC40E',
        padding: 10,
        height: 100,
        width: 100,
        borderRadius: 250,
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#FAEEC6',
        elevation: 5,
    },
    buttonTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#222',
        fontWeight: 'bold',
    }
});