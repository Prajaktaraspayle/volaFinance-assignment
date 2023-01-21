const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');


const GOOGLE_CLIENT_ID = "304569566995-mv43vn9rnfpb17n8f8oivmt6nps3bjkn.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET="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";

const   FACEBOOK_APP_ID = "892508038452653";
const FACEBOOK_APP_SECRET="07f4698bc09428c36148aa2f5493f7d6";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null,profile);
  }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
   }
  
));
passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})
