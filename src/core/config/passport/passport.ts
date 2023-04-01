import { Strategy } from 'passport-google-oauth20'

export const passportConfig = (passport: any) => {
    passport.use(
        new Strategy(
            {
                clientID: "453159304412-ojjsgjb70sivit5s2i3mipj1lin04tli.apps.googleusercontent.com",
                clientSecret: "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",
                callbackURL: "api/users/user/googleAuth",
            },
            async (accessToken, refreshToken, profile, done) => {
                return done(null, profile);
            }
        )
    )
    passport.serializeUser(function (user:any, cb:any) {
        cb(null, user);
    });

    passport.deserializeUser(function (obj:any, cb:any) {
        cb(null, obj);
    });
}