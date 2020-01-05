var mongoose = require('mongoose');
const listings = mongoose.model('uneedlistings');

exports.getFullList = (req, resp, next) => {
  listings.find().exec()
  .then(list => {
    console.log('ListingModel list: ', list);
    //resp.json(list);
    return resp.status(200).send(list);
  })
  /*.then(() => {
    var list = [];
    var item = {};
    item._id = 123;
    item.name = "Hard Coded Name";
    item.status = "Status F";
    item.url = "www.url.com";
    list.push(item);
    return resp.status(200).send(list);
  })*/
  .catch(err => {
    console.log('controller error: ', err);
    next(err);
  })
};
