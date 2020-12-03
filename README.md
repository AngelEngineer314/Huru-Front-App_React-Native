# Huru_Front
Frontend of Huru(Beatview) App


Error : undefined is not an object (evaluating 'RNGestureHandlerModule.State'

Remove this modification: // export { default as Directions } from './Directions';

And if you specified something in your "react-native.config.js", remove it.

add these lines in your MainActivity.java:
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

And add this inside the MainActivity class, just after protected String getMainComponentName() function
@Override
protected ReactActivityDelegate createReactActivityDelegate() {
return new ReactActivityDelegate(this, getMainComponentName()) {
@Override
protected ReactRootView createRootView() {
return new RNGestureHandlerEnabledRootView(MainActivity.this);
}
};
}

And after that do:
cd android
gradlew clean
cd ..
