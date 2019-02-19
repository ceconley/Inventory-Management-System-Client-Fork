const showItemsTemplate = require('../templates/item-listing.handlebars')
const showOneItemTemplate = require('../templates/single-item-listing.handlebars')
const confirmDelete = require('../templates/delete-confirm.handlebars')
const api = require('./api.js')

const resetForms = () => {
  $('#show-item')[0].reset()
  $('#create-item')[0].reset()
  $('#delete-item')[0].reset()
  $('#update-item')[0].reset()
  $('#results').text('')
}

const createSuccess = (data) => {
  resetForms()
  const showItemsHtml = showOneItemTemplate({ item: data })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('Item Successfully Created')
}

const createFailure = () => {
  $('#results-message').text('Create Item Failed')
  resetForms()
}

const indexSuccess = (response) => {
  resetForms()
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  $('#results').append(showItemsHtml)
  $('#results-message').text('')
}

const indexSuccess1 = (response) => {
  resetForms()
  const showItemsHtml = showItemsTemplate({ items: response.items })
  $('#results').empty()
  $('#results').append(showItemsHtml)
}

const indexFailure = () => {
  resetForms()
  $('#results-message').text('Could Not Retrieve Inventory')
}

const showSuccess = (response) => {
  resetForms()
  const showItemsHtml = showOneItemTemplate({ item: response })
  $('#results').empty()
  $('#results').append(showItemsHtml)
}

const showFailure = () => {
  resetForms()
  $('#results-message').text('Show Inventory Failed')
}

const showForDeleteSuccess = (response) => {
  const showItemsHtml = confirmDelete({ item: response.item })
  $('#delete-confirm').empty()
  $('#delete-confirm').append(showItemsHtml)
}

const showForDeleteFailure = () => {
  resetForms()
  $('#results-message').text('Error deleting item')
}

const updateSuccess = () => {
  resetForms()
  $('#results-message').text('Item successfully updated')
  api.showItem()
    .then(showSuccess)
    .catch(showFailure)
}

const updateFailure = () => {
  resetForms()
  $('#results-message').text('Could Not Update Item')
}

const deleteSuccess = () => {
  resetForms()
  $('#results-message').text('Item Deleted Successfully')
  api.indexItemsTwo()
    .then(indexSuccess1)
    .catch(indexFailure)
}

const deleteFailure = () => {
  resetForms()
  $('#results-message').text('Error deleting item')
  $('.forms').val('')
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  indexSuccess1,
  showSuccess,
  showFailure,
  showForDeleteSuccess,
  showForDeleteFailure,
  updateSuccess,
  updateFailure,
  deleteSuccess,
  deleteFailure
}
