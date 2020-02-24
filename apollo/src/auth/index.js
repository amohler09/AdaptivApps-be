const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: 'https://dev-sxhevmag.auth0.com/.well-known/jwks.json'
});

function getKey(header, cb){
  client.getSigningKey(header.kid, function(err, key) {
    var signingKey = key.publicKey || key.rsaPublicKey;
    cb(null, signingKey);
  });
}

const options = {
  audience: 'asVyDNwKxm5ysKPmQ0cwhzLzT3WShqO0',
  issuer: 'https://dev-sxhevmag.auth0.com/',
  algorithms: ['RS256']
};

const decodeToken = async authorization => {
  const match = authorization.match(/Bearer (.+)/);

  if (!match) {
    throw new Error('Invalid token');
  }

  const token = match[1];

  jwt.verify(token, getKey, options, (err, decoded) => {
    if(err) {
      return reject(err);
    }
    const { email } = decoded;
    console.log('Decoded is ', email)
    return email;
  });
};

module.exports = decodeToken;
