'use strict';

module.exports = {
  deref: deref
};

function deref (pointer, doc) {
  const segments = compact(pointer.split('/'));

  if(segments.length === 0) {
    return doc;
  }

  let context = doc;
  segments.forEach((segment) => { context = context[segment]; });
  return context;
}

function compact (collection) {
  return collection.filter((item) => item);
}
