const sodium = require('sodium').api

module.exports = {
  generate,
  verifyUser
}

// generate hash using password
function generate (password) {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str(
    passwordBuffer,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )
}

// check if password match
function verifyUser (hash, password) {
  const passwordBuffer = Buffer.from(password, 'utf8')
  return sodium.crypto_pwhash_str_verify(hash, passwordBuffer)
}
