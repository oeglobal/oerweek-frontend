import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return {
      date: 'all',
      filters: {
        online: true,
        local: true,
        anytime: true,
      },
    };
  },
});

export default Storage;
