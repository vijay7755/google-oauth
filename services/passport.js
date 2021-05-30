const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./../config/keys');


passport.serializeUser((userID, done) => {
    done(null, userID)
});

passport.deserializeUser((userID, done) => {
    // perform logic here to verify the userID with the database
    // Once verifyed call done(),so that the request pass to route  //handler
    done(null, userID)
});


passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {
            console.log(profile.id);
            // Write logic here to find the user profile with id in the database
            // Once done, the DB will return the response

            let existingUser = "some_id_123" // Assume this variable value was return by database by finding existing record
            if (existingUser) {
                done(null, existingUser)
            }
            else {
                // Write logic here to create the record for the user with the ID
                // Once done, the DB will return the response

                let newUser = "new_id_456" // Assume this variable value was return by database after creating new record
                done(null, newUser)
            }
        })
);