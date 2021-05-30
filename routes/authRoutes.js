const passport = require('passport');


module.exports = (app) => {
    
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/')
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        if (req.user) {
            res.send({ here_is_user_profile: user })
        }
        else {
            res.send('Please login by this URL: http://localhost:5000/auth/google')
        }
    });
}