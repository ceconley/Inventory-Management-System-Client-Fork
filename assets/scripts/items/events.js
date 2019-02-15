'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

// CREATE
const onCreateItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

// READ - INDEX
const onIndexItems = event => {
  event.preventDefault()
  api.indexItems()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

// READ - SHOW
const onShowItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.itemId = data.id
  api.showItem()
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onShowForDeleteItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.itemId = data.item.id
  api.showItem()
    .then(ui.showForDeleteSuccess)
    .catch(ui.showForDeleteFailure)
}

// UPDATE
const onUpdateItem = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.itemId = data.item.id
  api.updateItem(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

// DELETE
const onDeleteItem = () => {
  const data = store.itemId
  api.deleteItem(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

module.exports = {
  onCreateItem,
  onIndexItems,
  onShowItem,
  onShowForDeleteItem,
  onUpdateItem,
  onDeleteItem
}
