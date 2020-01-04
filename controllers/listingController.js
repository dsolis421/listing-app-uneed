import listing from '../models/ListingsModel';

const listingController = {};

listingController.getFullList = (request, response, next) => {
  ListingsModel.find().exec()
  .then(game => response.json(list))
  .catch(err => next(err));
};

export default listingController;
