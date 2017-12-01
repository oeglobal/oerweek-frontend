import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let model = this.modelFor('submit');

    // for events
    model.city = 'Ljubljana';
    model.contributiontype = 'event';
    model.country = 'Slovenia';
    model.datetime = '2018-03-11T09:00:00.000Z';
    model.description = 'Accusamus quo ipsam ipsum occaecat eum eos temporibus omnis quo libero recusandae Lorem facere';
    model.email = 'jure@cuhalev.com';
    model.eventtype = 'local';
    model.facilitator = 'Sigourney Collins';
    model.firstname = 'Hall';
    model.institution = 'Hicks and Britt Co';
    model.institutionurl = 'http://example.com';
    model.language = 'Slovenian';
    model.lastname = 'Rich';
    model.link = 'http://www.xifit.tv';
    model.opentags = ["Open Education Degree", "Open Culture"];
    model.title = 'Intro workshop to OER and Open Culture';

    return model;
  }
});
