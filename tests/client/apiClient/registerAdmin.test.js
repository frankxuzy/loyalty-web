// need to nock proper response - not a login call

import nock from 'nock'

import {registerAdmin} from '../../../client/apiClient'

const message = 'Successfully registered'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJkb24iLCJpYXQiOjE1MjU2NjQ4NTgsImV4cCI6MTUyNTc1MTI1OH0.ofOMvjwHAEkbAnMK7NC2xG3RneUlGGeTE52OC-Di06w'

const responseDetails = {
  message,
  token
}

// const userDetails = {
//   firstname: 'Mary',
//   username: 'Mary Buchanan',
//   password: 'monkeys'
// }

nock('http://localhost')
  .post('api/v1/admin/register')
  .reply(200, responseDetails)

test('registerAdmin sends post req to server', () => {
  const expected = token
  return registerAdmin(responseDetails)
    .then(res => {
      expect(res).toContain(expected)
    })
})