'use strict';

describe('Service: marvelApi', function () {

  // load the service's module
  beforeEach(module('marvelPullListApp'));

  // instantiate service
  var marvelApi, httpBackend;
  beforeEach(inject(function (_marvelApi_, _$httpBackend_) {
    marvelApi = _marvelApi_;
    httpBackend = _$httpBackend_;
  }));

  it('should have a method that gets api keys from a local file env.json', function () {
    httpBackend
      .when('GET', 'env.json')
      .respond(200, { MARVEL_PUBLIC_KEY: 'foo', MARVEL_PRIVATE_KEY: 'bar' });

    marvelApi.getApiKeys().then(function(response){
      expect(response.data.MARVEL_PUBLIC_KEY === 'foo').toBe(true);
      expect(response.data.MARVEL_PRIVATE_KEY === 'bar').toBe(true);
    });

    httpBackend.flush();
  });

  it('should have a method that returns the credentials needed for the api', function () {
    var publicKey = 'foo';
    var privateKey = 'bar';
    var credentials = marvelApi.getCredentials(publicKey, privateKey);
    expect(credentials.publicKey === 'foo').toBe(true);
    expect(credentials.privateKey === 'bar').toBe(true);
    expect(credentials.timeStamp > 1 ).toBe(true);
    expect(credentials.hash.length > 1 ).toBe(true);
  });
});
