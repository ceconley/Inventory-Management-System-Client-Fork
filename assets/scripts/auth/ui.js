'use strict'

$('#change-password-modal').hide()
$('#sign-out').hide()
$('#show-item').hide()
$('#index-items').hide()
$('#create-item').hide()
$('#delete-item').hide()
$('#update-item').hide()
$('#signup-box').hide()
$('#login-top').hide()

const store = require('../store.js')

const signUpSuccess = data => {
  $('#auth-message').text('')
  $('#auth-message').text('Signed up successfully.')
  $('.forms').val('')
}

const signUpFailure = data => {
  $('#auth-message').text('')
  $('#auth-message').text('Signed up failed....try again')
  $('.forms').val('')
}

const signInSuccess = data => {
  $('#auth-message').text('')
  store.user = data.user
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password-modal').show()
  $('.forms').val('')
  $('#show-item').show()
  $('#index-items').show()
  $('#create-item').show()
  $('#delete-item').show()
  $('#update-item').show()
  $('#register').hide()
  $('#login-top').hide()
}

const signInFailure = () => {
  $('#auth-message').text('')
  $('#auth-message').text('Error on sign in')
  $('.forms').val('')
}

const changePasswordSuccess = data => {
  $('#auth-message').text('')
  $('#auth-message').text('Password changed successfully')
  $('.forms').val('')
}

const changePasswordFailure = () => {
  $('#auth-message').text('')
  $('#auth-message').text('Error on password change')
  $('.forms').val('')
}

const signOutSuccess = data => {
  store.user = null
  $('#auth-message').text('')
  $('#auth-message').text('Signed out successfully')
  $('#sign-out').hide()
  $('#change-password-modal').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#show-item').hide()
  $('#index-items').hide()
  $('#create-item').hide()
  $('#delete-item').hide()
  $('#update-item').hide()
  $('#results').text('')
  $('#results-message').text('')
  $('#register').show()
}

const signOutFailure = () => {
  $('#auth-message').text('')
  $('#auth-message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
