const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcryptjs")
const User = require("../models/User.js")

const passport = (passport) => {
    console.log("HELLO")
    let sessionEmail = null
    passport.use(
        new localStrategy({ usernameField: "email" }, (email, password, done) => {
            sessionEmail = email
            testUser = User.findOne({ email: email })
            .then (console.log(testUser))
            .then(user => {
                console.log("should be user", user)
                if (!user) return done(null, false)
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err
                    if (isMatch) {
                        return done(null, user)
                    }
                    else {
                        return done(null, false)
                    }
                })
            })
            .catch(err => console.log(err))
        })
    )
    passport.serializeUser((user, done) => {
        console.log(user)
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user)
        })
    })
}

module.exports = passport