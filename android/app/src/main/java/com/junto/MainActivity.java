package com.junto;

import android.os.Bundle;
import android.view.View;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;



public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "junto";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
}
