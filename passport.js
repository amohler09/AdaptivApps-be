// const GooglePlusToken = require('passport-google-plus-token')

// passport.use('googleToken', new GooglePlusToken({
//     clientID: config.oauth.google.clientID,
//     clientSecret: config.oauth.google.clientSecret
// }, async (accessToken, refreshToken, profile, done) => {
//     try {
//         console.log('profile', profile);
//         console.log('accessToken', accessToken);
//         console.log('refreshToken', refreshToken);

//         const existingUser = await User.findOne({ "google.id": profile.id })
//         if (existingUser) {
//             return done(null, existingUser);
//         }

//         const newUser = new User({
//             method: 'google',
//             google: {
//                 id: profile.id,
//                 email: profile.emails[0].value
//             }
//         });

//         await newUser.save();
//         done(null, newUser);
//     }   catch(err) {
//         done(err, false, err.message);
//     }
// }));