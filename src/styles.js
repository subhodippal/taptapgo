import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#111115',
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

  headerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 28,
  },

  //--------------------- Result Container ---------------

  resultComponent: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 60,
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
    height: 100,
  },
  messageText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
    alignSelf: 'flex-end',
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
    marginTop: 100,
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
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#222',
    fontWeight: 'bold',
  },
});

export default styles;