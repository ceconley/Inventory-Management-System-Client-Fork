'use strict'

const config = require('../config.js')
const store = require('../store.js')

const showItem = data => {
  return $.ajax({
    url: config.apiUrl + `/items/${store.itemId}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexItems = () => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const indexItemsTwo = () => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateItem = data => {
  return $.ajax({
    url: config.apiUrl + '/items/' + $('#update-id').val(),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  showItem,
  indexItems,
  createItem,
  deleteItem,
  updateItem,
  indexItemsTwo
}
