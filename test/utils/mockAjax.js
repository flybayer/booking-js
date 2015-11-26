'use strict';

// Set up the Ajax mocks for common requests
module.exports = function() {

    jasmine.Ajax.install();

    jasmine.Ajax.stubRequest(
      'https://api.timekit.io/v2/findtime'
    ).andReturn({
      status: 200,
      statusText: 'HTTP/1.1 200 OK',
      contentType: 'application/json',
      responseText: '{"data":[{"start":"2015-11-25T12:00:00-08:00","end":"2015-11-25T13:00:00-08:00"},{"start":"2015-11-25T17:30:00-08:00","end":"2015-11-25T18:30:00-08:00"},{"start":"2015-11-25T18:30:00-08:00","end":"2015-11-25T19:30:00-08:00"},{"start":"2015-11-25T19:30:00-08:00","end":"2015-11-25T20:30:00-08:00"},{"start":"2015-11-25T20:30:00-08:00","end":"2015-11-25T21:30:00-08:00"},{"start":"2015-11-25T21:30:00-08:00","end":"2015-11-25T22:30:00-08:00"},{"start":"2015-11-25T22:30:00-08:00","end":"2015-11-25T23:30:00-08:00"},{"start":"2015-11-25T23:30:00-08:00","end":"2015-11-26T00:30:00-08:00"},{"start":"2015-11-26T02:30:00-08:00","end":"2015-11-26T03:30:00-08:00"},{"start":"2015-11-26T03:30:00-08:00","end":"2015-11-26T04:30:00-08:00"},{"start":"2015-11-26T04:30:00-08:00","end":"2015-11-26T05:30:00-08:00"},{"start":"2015-11-26T05:30:00-08:00","end":"2015-11-26T06:30:00-08:00"},{"start":"2015-11-26T06:30:00-08:00","end":"2015-11-26T07:30:00-08:00"},{"start":"2015-11-26T07:30:00-08:00","end":"2015-11-26T08:30:00-08:00"},{"start":"2015-11-26T08:30:00-08:00","end":"2015-11-26T09:30:00-08:00"},{"start":"2015-11-26T11:30:00-08:00","end":"2015-11-26T12:30:00-08:00"},{"start":"2015-11-26T12:30:00-08:00","end":"2015-11-26T13:30:00-08:00"},{"start":"2015-11-26T14:30:00-08:00","end":"2015-11-26T15:30:00-08:00"},{"start":"2015-11-26T15:30:00-08:00","end":"2015-11-26T16:30:00-08:00"},{"start":"2015-11-26T17:30:00-08:00","end":"2015-11-26T18:30:00-08:00"},{"start":"2015-11-26T18:30:00-08:00","end":"2015-11-26T19:30:00-08:00"},{"start":"2015-11-26T19:30:00-08:00","end":"2015-11-26T20:30:00-08:00"},{"start":"2015-11-26T20:30:00-08:00","end":"2015-11-26T21:30:00-08:00"},{"start":"2015-11-26T21:30:00-08:00","end":"2015-11-26T22:30:00-08:00"},{"start":"2015-11-26T22:30:00-08:00","end":"2015-11-26T23:30:00-08:00"},{"start":"2015-11-26T23:30:00-08:00","end":"2015-11-27T00:30:00-08:00"},{"start":"2015-11-27T02:00:00-08:00","end":"2015-11-27T03:00:00-08:00"},{"start":"2015-11-27T03:00:00-08:00","end":"2015-11-27T04:00:00-08:00"},{"start":"2015-11-27T04:00:00-08:00","end":"2015-11-27T05:00:00-08:00"},{"start":"2015-11-27T05:00:00-08:00","end":"2015-11-27T06:00:00-08:00"},{"start":"2015-11-27T06:00:00-08:00","end":"2015-11-27T07:00:00-08:00"},{"start":"2015-11-27T07:00:00-08:00","end":"2015-11-27T08:00:00-08:00"},{"start":"2015-11-27T08:00:00-08:00","end":"2015-11-27T09:00:00-08:00"},{"start":"2015-11-27T11:00:00-08:00","end":"2015-11-27T12:00:00-08:00"},{"start":"2015-11-27T12:00:00-08:00","end":"2015-11-27T13:00:00-08:00"},{"start":"2015-11-27T14:00:00-08:00","end":"2015-11-27T15:00:00-08:00"},{"start":"2015-11-27T15:00:00-08:00","end":"2015-11-27T16:00:00-08:00"},{"start":"2015-11-27T17:00:00-08:00","end":"2015-11-27T18:00:00-08:00"},{"start":"2015-11-27T18:00:00-08:00","end":"2015-11-27T19:00:00-08:00"},{"start":"2015-11-27T19:00:00-08:00","end":"2015-11-27T20:00:00-08:00"},{"start":"2015-11-27T20:00:00-08:00","end":"2015-11-27T21:00:00-08:00"},{"start":"2015-11-27T21:00:00-08:00","end":"2015-11-27T22:00:00-08:00"},{"start":"2015-11-27T22:00:00-08:00","end":"2015-11-27T23:00:00-08:00"},{"start":"2015-11-27T23:00:00-08:00","end":"2015-11-28T00:00:00-08:00"},{"start":"2015-11-28T00:00:00-08:00","end":"2015-11-28T01:00:00-08:00"},{"start":"2015-11-28T01:00:00-08:00","end":"2015-11-28T02:00:00-08:00"},{"start":"2015-11-28T02:00:00-08:00","end":"2015-11-28T03:00:00-08:00"},{"start":"2015-11-28T03:00:00-08:00","end":"2015-11-28T04:00:00-08:00"},{"start":"2015-11-28T04:00:00-08:00","end":"2015-11-28T05:00:00-08:00"},{"start":"2015-11-28T05:00:00-08:00","end":"2015-11-28T06:00:00-08:00"},{"start":"2015-11-28T06:00:00-08:00","end":"2015-11-28T07:00:00-08:00"},{"start":"2015-11-28T07:00:00-08:00","end":"2015-11-28T08:00:00-08:00"},{"start":"2015-11-28T08:00:00-08:00","end":"2015-11-28T09:00:00-08:00"},{"start":"2015-11-28T10:00:00-08:00","end":"2015-11-28T11:00:00-08:00"},{"start":"2015-11-28T11:00:00-08:00","end":"2015-11-28T12:00:00-08:00"},{"start":"2015-11-28T12:00:00-08:00","end":"2015-11-28T13:00:00-08:00"},{"start":"2015-11-28T13:00:00-08:00","end":"2015-11-28T14:00:00-08:00"},{"start":"2015-11-28T14:00:00-08:00","end":"2015-11-28T15:00:00-08:00"},{"start":"2015-11-28T15:00:00-08:00","end":"2015-11-28T16:00:00-08:00"},{"start":"2015-11-28T16:00:00-08:00","end":"2015-11-28T17:00:00-08:00"},{"start":"2015-11-28T17:00:00-08:00","end":"2015-11-28T18:00:00-08:00"},{"start":"2015-11-28T18:00:00-08:00","end":"2015-11-28T19:00:00-08:00"},{"start":"2015-11-28T19:00:00-08:00","end":"2015-11-28T20:00:00-08:00"},{"start":"2015-11-28T20:00:00-08:00","end":"2015-11-28T21:00:00-08:00"},{"start":"2015-11-28T21:00:00-08:00","end":"2015-11-28T22:00:00-08:00"},{"start":"2015-11-28T22:00:00-08:00","end":"2015-11-28T23:00:00-08:00"},{"start":"2015-11-28T23:00:00-08:00","end":"2015-11-29T00:00:00-08:00"},{"start":"2015-11-29T00:00:00-08:00","end":"2015-11-29T01:00:00-08:00"},{"start":"2015-11-29T01:00:00-08:00","end":"2015-11-29T02:00:00-08:00"},{"start":"2015-11-29T02:00:00-08:00","end":"2015-11-29T03:00:00-08:00"},{"start":"2015-11-29T03:00:00-08:00","end":"2015-11-29T04:00:00-08:00"},{"start":"2015-11-29T04:00:00-08:00","end":"2015-11-29T05:00:00-08:00"},{"start":"2015-11-29T05:00:00-08:00","end":"2015-11-29T06:00:00-08:00"},{"start":"2015-11-29T06:00:00-08:00","end":"2015-11-29T07:00:00-08:00"},{"start":"2015-11-29T07:00:00-08:00","end":"2015-11-29T08:00:00-08:00"},{"start":"2015-11-29T08:00:00-08:00","end":"2015-11-29T09:00:00-08:00"},{"start":"2015-11-29T10:00:00-08:00","end":"2015-11-29T11:00:00-08:00"},{"start":"2015-11-29T11:00:00-08:00","end":"2015-11-29T12:00:00-08:00"},{"start":"2015-11-29T12:00:00-08:00","end":"2015-11-29T13:00:00-08:00"},{"start":"2015-11-29T13:00:00-08:00","end":"2015-11-29T14:00:00-08:00"},{"start":"2015-11-29T14:00:00-08:00","end":"2015-11-29T15:00:00-08:00"},{"start":"2015-11-29T15:00:00-08:00","end":"2015-11-29T16:00:00-08:00"},{"start":"2015-11-29T16:00:00-08:00","end":"2015-11-29T17:00:00-08:00"},{"start":"2015-11-29T17:00:00-08:00","end":"2015-11-29T18:00:00-08:00"},{"start":"2015-11-29T18:00:00-08:00","end":"2015-11-29T19:00:00-08:00"},{"start":"2015-11-29T19:00:00-08:00","end":"2015-11-29T20:00:00-08:00"},{"start":"2015-11-29T20:00:00-08:00","end":"2015-11-29T21:00:00-08:00"},{"start":"2015-11-29T21:00:00-08:00","end":"2015-11-29T22:00:00-08:00"},{"start":"2015-11-29T22:00:00-08:00","end":"2015-11-29T23:00:00-08:00"},{"start":"2015-11-29T23:00:00-08:00","end":"2015-11-30T00:00:00-08:00"},{"start":"2015-12-01T00:00:00-08:00","end":"2015-12-01T01:00:00-08:00"},{"start":"2015-12-01T01:00:00-08:00","end":"2015-12-01T02:00:00-08:00"},{"start":"2015-12-01T02:00:00-08:00","end":"2015-12-01T03:00:00-08:00"},{"start":"2015-12-01T03:00:00-08:00","end":"2015-12-01T04:00:00-08:00"},{"start":"2015-12-01T04:00:00-08:00","end":"2015-12-01T05:00:00-08:00"},{"start":"2015-12-01T05:00:00-08:00","end":"2015-12-01T06:00:00-08:00"},{"start":"2015-12-01T06:00:00-08:00","end":"2015-12-01T07:00:00-08:00"},{"start":"2015-12-01T07:00:00-08:00","end":"2015-12-01T08:00:00-08:00"},{"start":"2015-12-01T08:00:00-08:00","end":"2015-12-01T09:00:00-08:00"},{"start":"2015-12-01T09:00:00-08:00","end":"2015-12-01T10:00:00-08:00"},{"start":"2015-12-01T10:00:00-08:00","end":"2015-12-01T11:00:00-08:00"},{"start":"2015-12-01T11:00:00-08:00","end":"2015-12-01T12:00:00-08:00"},{"start":"2015-12-01T12:00:00-08:00","end":"2015-12-01T13:00:00-08:00"},{"start":"2015-12-01T13:00:00-08:00","end":"2015-12-01T14:00:00-08:00"},{"start":"2015-12-01T15:00:00-08:00","end":"2015-12-01T16:00:00-08:00"},{"start":"2015-12-01T16:00:00-08:00","end":"2015-12-01T17:00:00-08:00"},{"start":"2015-12-01T17:00:00-08:00","end":"2015-12-01T18:00:00-08:00"},{"start":"2015-12-01T18:00:00-08:00","end":"2015-12-01T19:00:00-08:00"},{"start":"2015-12-01T19:00:00-08:00","end":"2015-12-01T20:00:00-08:00"},{"start":"2015-12-01T20:00:00-08:00","end":"2015-12-01T21:00:00-08:00"},{"start":"2015-12-01T21:00:00-08:00","end":"2015-12-01T22:00:00-08:00"},{"start":"2015-12-01T22:00:00-08:00","end":"2015-12-01T23:00:00-08:00"},{"start":"2015-12-01T23:00:00-08:00","end":"2015-12-02T00:00:00-08:00"},{"start":"2015-12-02T00:00:00-08:00","end":"2015-12-02T01:00:00-08:00"},{"start":"2015-12-02T01:00:00-08:00","end":"2015-12-02T02:00:00-08:00"},{"start":"2015-12-02T02:00:00-08:00","end":"2015-12-02T03:00:00-08:00"},{"start":"2015-12-02T03:00:00-08:00","end":"2015-12-02T04:00:00-08:00"},{"start":"2015-12-02T04:00:00-08:00","end":"2015-12-02T05:00:00-08:00"},{"start":"2015-12-02T05:00:00-08:00","end":"2015-12-02T06:00:00-08:00"},{"start":"2015-12-02T06:00:00-08:00","end":"2015-12-02T07:00:00-08:00"},{"start":"2015-12-02T07:00:00-08:00","end":"2015-12-02T08:00:00-08:00"},{"start":"2015-12-02T08:00:00-08:00","end":"2015-12-02T09:00:00-08:00"},{"start":"2015-12-02T10:00:00-08:00","end":"2015-12-02T11:00:00-08:00"},{"start":"2015-12-02T11:00:00-08:00","end":"2015-12-02T12:00:00-08:00"},{"start":"2015-12-02T12:30:00-08:00","end":"2015-12-02T13:30:00-08:00"},{"start":"2015-12-02T13:30:00-08:00","end":"2015-12-02T14:30:00-08:00"},{"start":"2015-12-02T14:30:00-08:00","end":"2015-12-02T15:30:00-08:00"},{"start":"2015-12-02T15:30:00-08:00","end":"2015-12-02T16:30:00-08:00"},{"start":"2015-12-02T17:00:00-08:00","end":"2015-12-02T18:00:00-08:00"},{"start":"2015-12-02T18:00:00-08:00","end":"2015-12-02T19:00:00-08:00"},{"start":"2015-12-02T19:00:00-08:00","end":"2015-12-02T20:00:00-08:00"},{"start":"2015-12-02T20:00:00-08:00","end":"2015-12-02T21:00:00-08:00"},{"start":"2015-12-02T21:00:00-08:00","end":"2015-12-02T22:00:00-08:00"},{"start":"2015-12-02T22:00:00-08:00","end":"2015-12-02T23:00:00-08:00"},{"start":"2015-12-02T23:00:00-08:00","end":"2015-12-03T00:00:00-08:00"},{"start":"2015-12-03T00:00:00-08:00","end":"2015-12-03T01:00:00-08:00"},{"start":"2015-12-03T01:00:00-08:00","end":"2015-12-03T02:00:00-08:00"},{"start":"2015-12-03T02:00:00-08:00","end":"2015-12-03T03:00:00-08:00"},{"start":"2015-12-03T03:00:00-08:00","end":"2015-12-03T04:00:00-08:00"},{"start":"2015-12-03T04:00:00-08:00","end":"2015-12-03T05:00:00-08:00"},{"start":"2015-12-03T05:00:00-08:00","end":"2015-12-03T06:00:00-08:00"},{"start":"2015-12-03T06:00:00-08:00","end":"2015-12-03T07:00:00-08:00"},{"start":"2015-12-03T07:00:00-08:00","end":"2015-12-03T08:00:00-08:00"},{"start":"2015-12-03T08:00:00-08:00","end":"2015-12-03T09:00:00-08:00"},{"start":"2015-12-03T09:00:00-08:00","end":"2015-12-03T10:00:00-08:00"},{"start":"2015-12-03T10:00:00-08:00","end":"2015-12-03T11:00:00-08:00"},{"start":"2015-12-03T12:00:00-08:00","end":"2015-12-03T13:00:00-08:00"},{"start":"2015-12-03T13:00:00-08:00","end":"2015-12-03T14:00:00-08:00"},{"start":"2015-12-03T14:00:00-08:00","end":"2015-12-03T15:00:00-08:00"},{"start":"2015-12-03T15:00:00-08:00","end":"2015-12-03T16:00:00-08:00"},{"start":"2015-12-03T16:00:00-08:00","end":"2015-12-03T17:00:00-08:00"},{"start":"2015-12-03T17:00:00-08:00","end":"2015-12-03T18:00:00-08:00"},{"start":"2015-12-03T18:00:00-08:00","end":"2015-12-03T19:00:00-08:00"},{"start":"2015-12-03T19:00:00-08:00","end":"2015-12-03T20:00:00-08:00"},{"start":"2015-12-03T20:00:00-08:00","end":"2015-12-03T21:00:00-08:00"},{"start":"2015-12-03T21:00:00-08:00","end":"2015-12-03T22:00:00-08:00"},{"start":"2015-12-03T22:00:00-08:00","end":"2015-12-03T23:00:00-08:00"},{"start":"2015-12-03T23:00:00-08:00","end":"2015-12-04T00:00:00-08:00"},{"start":"2015-12-04T00:00:00-08:00","end":"2015-12-04T01:00:00-08:00"},{"start":"2015-12-04T01:00:00-08:00","end":"2015-12-04T02:00:00-08:00"},{"start":"2015-12-04T02:00:00-08:00","end":"2015-12-04T03:00:00-08:00"},{"start":"2015-12-04T03:00:00-08:00","end":"2015-12-04T04:00:00-08:00"},{"start":"2015-12-04T04:00:00-08:00","end":"2015-12-04T05:00:00-08:00"},{"start":"2015-12-04T05:00:00-08:00","end":"2015-12-04T06:00:00-08:00"},{"start":"2015-12-04T06:00:00-08:00","end":"2015-12-04T07:00:00-08:00"},{"start":"2015-12-04T07:00:00-08:00","end":"2015-12-04T08:00:00-08:00"},{"start":"2015-12-04T08:00:00-08:00","end":"2015-12-04T09:00:00-08:00"},{"start":"2015-12-04T10:00:00-08:00","end":"2015-12-04T11:00:00-08:00"},{"start":"2015-12-04T11:00:00-08:00","end":"2015-12-04T12:00:00-08:00"},{"start":"2015-12-04T12:00:00-08:00","end":"2015-12-04T13:00:00-08:00"},{"start":"2015-12-04T13:00:00-08:00","end":"2015-12-04T14:00:00-08:00"},{"start":"2015-12-04T15:00:00-08:00","end":"2015-12-04T16:00:00-08:00"},{"start":"2015-12-04T16:00:00-08:00","end":"2015-12-04T17:00:00-08:00"},{"start":"2015-12-04T18:00:00-08:00","end":"2015-12-04T19:00:00-08:00"},{"start":"2015-12-04T19:00:00-08:00","end":"2015-12-04T20:00:00-08:00"},{"start":"2015-12-04T20:00:00-08:00","end":"2015-12-04T21:00:00-08:00"},{"start":"2015-12-04T21:00:00-08:00","end":"2015-12-04T22:00:00-08:00"},{"start":"2015-12-04T22:00:00-08:00","end":"2015-12-04T23:00:00-08:00"},{"start":"2015-12-04T23:00:00-08:00","end":"2015-12-05T00:00:00-08:00"},{"start":"2015-12-05T00:00:00-08:00","end":"2015-12-05T01:00:00-08:00"},{"start":"2015-12-05T01:00:00-08:00","end":"2015-12-05T02:00:00-08:00"},{"start":"2015-12-05T02:00:00-08:00","end":"2015-12-05T03:00:00-08:00"},{"start":"2015-12-05T03:00:00-08:00","end":"2015-12-05T04:00:00-08:00"},{"start":"2015-12-05T04:00:00-08:00","end":"2015-12-05T05:00:00-08:00"},{"start":"2015-12-05T05:00:00-08:00","end":"2015-12-05T06:00:00-08:00"},{"start":"2015-12-05T06:00:00-08:00","end":"2015-12-05T07:00:00-08:00"},{"start":"2015-12-05T07:00:00-08:00","end":"2015-12-05T08:00:00-08:00"},{"start":"2015-12-05T08:00:00-08:00","end":"2015-12-05T09:00:00-08:00"},{"start":"2015-12-05T09:00:00-08:00","end":"2015-12-05T10:00:00-08:00"},{"start":"2015-12-05T10:00:00-08:00","end":"2015-12-05T11:00:00-08:00"},{"start":"2015-12-05T11:00:00-08:00","end":"2015-12-05T12:00:00-08:00"},{"start":"2015-12-05T12:00:00-08:00","end":"2015-12-05T13:00:00-08:00"},{"start":"2015-12-05T13:00:00-08:00","end":"2015-12-05T14:00:00-08:00"},{"start":"2015-12-05T14:00:00-08:00","end":"2015-12-05T15:00:00-08:00"},{"start":"2015-12-05T15:00:00-08:00","end":"2015-12-05T16:00:00-08:00"},{"start":"2015-12-05T16:00:00-08:00","end":"2015-12-05T17:00:00-08:00"},{"start":"2015-12-05T17:00:00-08:00","end":"2015-12-05T18:00:00-08:00"},{"start":"2015-12-05T18:00:00-08:00","end":"2015-12-05T19:00:00-08:00"},{"start":"2015-12-05T19:00:00-08:00","end":"2015-12-05T20:00:00-08:00"},{"start":"2015-12-05T20:00:00-08:00","end":"2015-12-05T21:00:00-08:00"},{"start":"2015-12-05T21:00:00-08:00","end":"2015-12-05T22:00:00-08:00"},{"start":"2015-12-05T22:00:00-08:00","end":"2015-12-05T23:00:00-08:00"},{"start":"2015-12-05T23:00:00-08:00","end":"2015-12-06T00:00:00-08:00"},{"start":"2015-12-06T00:00:00-08:00","end":"2015-12-06T01:00:00-08:00"},{"start":"2015-12-06T01:00:00-08:00","end":"2015-12-06T02:00:00-08:00"},{"start":"2015-12-06T02:00:00-08:00","end":"2015-12-06T03:00:00-08:00"},{"start":"2015-12-06T03:00:00-08:00","end":"2015-12-06T04:00:00-08:00"},{"start":"2015-12-06T04:00:00-08:00","end":"2015-12-06T05:00:00-08:00"},{"start":"2015-12-06T05:00:00-08:00","end":"2015-12-06T06:00:00-08:00"},{"start":"2015-12-06T06:00:00-08:00","end":"2015-12-06T07:00:00-08:00"},{"start":"2015-12-06T07:00:00-08:00","end":"2015-12-06T08:00:00-08:00"},{"start":"2015-12-06T08:00:00-08:00","end":"2015-12-06T09:00:00-08:00"},{"start":"2015-12-06T09:00:00-08:00","end":"2015-12-06T10:00:00-08:00"},{"start":"2015-12-06T10:00:00-08:00","end":"2015-12-06T11:00:00-08:00"},{"start":"2015-12-06T11:00:00-08:00","end":"2015-12-06T12:00:00-08:00"},{"start":"2015-12-06T12:00:00-08:00","end":"2015-12-06T13:00:00-08:00"},{"start":"2015-12-06T13:00:00-08:00","end":"2015-12-06T14:00:00-08:00"},{"start":"2015-12-06T14:00:00-08:00","end":"2015-12-06T15:00:00-08:00"},{"start":"2015-12-06T15:00:00-08:00","end":"2015-12-06T16:00:00-08:00"},{"start":"2015-12-06T16:00:00-08:00","end":"2015-12-06T17:00:00-08:00"},{"start":"2015-12-06T17:00:00-08:00","end":"2015-12-06T18:00:00-08:00"},{"start":"2015-12-06T18:00:00-08:00","end":"2015-12-06T19:00:00-08:00"},{"start":"2015-12-06T19:00:00-08:00","end":"2015-12-06T20:00:00-08:00"},{"start":"2015-12-06T20:00:00-08:00","end":"2015-12-06T21:00:00-08:00"},{"start":"2015-12-06T21:00:00-08:00","end":"2015-12-06T22:00:00-08:00"},{"start":"2015-12-06T22:00:00-08:00","end":"2015-12-06T23:00:00-08:00"},{"start":"2015-12-06T23:00:00-08:00","end":"2015-12-07T00:00:00-08:00"},{"start":"2015-12-08T00:00:00-08:00","end":"2015-12-08T01:00:00-08:00"},{"start":"2015-12-08T01:00:00-08:00","end":"2015-12-08T02:00:00-08:00"},{"start":"2015-12-08T02:00:00-08:00","end":"2015-12-08T03:00:00-08:00"},{"start":"2015-12-08T03:00:00-08:00","end":"2015-12-08T04:00:00-08:00"},{"start":"2015-12-08T04:00:00-08:00","end":"2015-12-08T05:00:00-08:00"},{"start":"2015-12-08T05:00:00-08:00","end":"2015-12-08T06:00:00-08:00"},{"start":"2015-12-08T06:00:00-08:00","end":"2015-12-08T07:00:00-08:00"},{"start":"2015-12-08T07:00:00-08:00","end":"2015-12-08T08:00:00-08:00"},{"start":"2015-12-08T08:00:00-08:00","end":"2015-12-08T09:00:00-08:00"},{"start":"2015-12-08T09:00:00-08:00","end":"2015-12-08T10:00:00-08:00"},{"start":"2015-12-08T11:30:00-08:00","end":"2015-12-08T12:30:00-08:00"},{"start":"2015-12-08T14:00:00-08:00","end":"2015-12-08T15:00:00-08:00"},{"start":"2015-12-08T15:00:00-08:00","end":"2015-12-08T16:00:00-08:00"},{"start":"2015-12-08T16:00:00-08:00","end":"2015-12-08T17:00:00-08:00"},{"start":"2015-12-08T17:00:00-08:00","end":"2015-12-08T18:00:00-08:00"},{"start":"2015-12-08T18:00:00-08:00","end":"2015-12-08T19:00:00-08:00"},{"start":"2015-12-08T19:00:00-08:00","end":"2015-12-08T20:00:00-08:00"},{"start":"2015-12-08T20:00:00-08:00","end":"2015-12-08T21:00:00-08:00"},{"start":"2015-12-08T21:00:00-08:00","end":"2015-12-08T22:00:00-08:00"},{"start":"2015-12-08T22:00:00-08:00","end":"2015-12-08T23:00:00-08:00"},{"start":"2015-12-08T23:00:00-08:00","end":"2015-12-09T00:00:00-08:00"},{"start":"2015-12-09T00:00:00-08:00","end":"2015-12-09T01:00:00-08:00"},{"start":"2015-12-09T01:00:00-08:00","end":"2015-12-09T02:00:00-08:00"},{"start":"2015-12-09T02:00:00-08:00","end":"2015-12-09T03:00:00-08:00"},{"start":"2015-12-09T03:00:00-08:00","end":"2015-12-09T04:00:00-08:00"},{"start":"2015-12-09T04:00:00-08:00","end":"2015-12-09T05:00:00-08:00"},{"start":"2015-12-09T05:00:00-08:00","end":"2015-12-09T06:00:00-08:00"},{"start":"2015-12-09T06:00:00-08:00","end":"2015-12-09T07:00:00-08:00"},{"start":"2015-12-09T07:00:00-08:00","end":"2015-12-09T08:00:00-08:00"},{"start":"2015-12-09T08:00:00-08:00","end":"2015-12-09T09:00:00-08:00"},{"start":"2015-12-09T10:00:00-08:00","end":"2015-12-09T11:00:00-08:00"},{"start":"2015-12-09T12:00:00-08:00","end":"2015-12-09T13:00:00-08:00"},{"start":"2015-12-09T13:00:00-08:00","end":"2015-12-09T14:00:00-08:00"},{"start":"2015-12-09T15:00:00-08:00","end":"2015-12-09T16:00:00-08:00"},{"start":"2015-12-09T16:00:00-08:00","end":"2015-12-09T17:00:00-08:00"},{"start":"2015-12-09T17:00:00-08:00","end":"2015-12-09T18:00:00-08:00"},{"start":"2015-12-09T18:00:00-08:00","end":"2015-12-09T19:00:00-08:00"},{"start":"2015-12-09T19:00:00-08:00","end":"2015-12-09T20:00:00-08:00"},{"start":"2015-12-09T20:00:00-08:00","end":"2015-12-09T21:00:00-08:00"},{"start":"2015-12-09T21:00:00-08:00","end":"2015-12-09T22:00:00-08:00"},{"start":"2015-12-09T22:00:00-08:00","end":"2015-12-09T23:00:00-08:00"},{"start":"2015-12-09T23:00:00-08:00","end":"2015-12-10T00:00:00-08:00"},{"start":"2015-12-10T00:00:00-08:00","end":"2015-12-10T01:00:00-08:00"},{"start":"2015-12-10T01:00:00-08:00","end":"2015-12-10T02:00:00-08:00"},{"start":"2015-12-10T02:00:00-08:00","end":"2015-12-10T03:00:00-08:00"},{"start":"2015-12-10T03:00:00-08:00","end":"2015-12-10T04:00:00-08:00"},{"start":"2015-12-10T04:00:00-08:00","end":"2015-12-10T05:00:00-08:00"},{"start":"2015-12-10T05:00:00-08:00","end":"2015-12-10T06:00:00-08:00"},{"start":"2015-12-10T06:00:00-08:00","end":"2015-12-10T07:00:00-08:00"},{"start":"2015-12-10T07:00:00-08:00","end":"2015-12-10T08:00:00-08:00"},{"start":"2015-12-10T08:00:00-08:00","end":"2015-12-10T09:00:00-08:00"},{"start":"2015-12-10T11:00:00-08:00","end":"2015-12-10T12:00:00-08:00"},{"start":"2015-12-10T12:00:00-08:00","end":"2015-12-10T13:00:00-08:00"},{"start":"2015-12-10T13:00:00-08:00","end":"2015-12-10T14:00:00-08:00"},{"start":"2015-12-10T14:00:00-08:00","end":"2015-12-10T15:00:00-08:00"},{"start":"2015-12-10T15:00:00-08:00","end":"2015-12-10T16:00:00-08:00"},{"start":"2015-12-10T16:00:00-08:00","end":"2015-12-10T17:00:00-08:00"},{"start":"2015-12-10T18:00:00-08:00","end":"2015-12-10T19:00:00-08:00"},{"start":"2015-12-10T19:00:00-08:00","end":"2015-12-10T20:00:00-08:00"},{"start":"2015-12-10T20:00:00-08:00","end":"2015-12-10T21:00:00-08:00"},{"start":"2015-12-10T21:00:00-08:00","end":"2015-12-10T22:00:00-08:00"},{"start":"2015-12-10T22:00:00-08:00","end":"2015-12-10T23:00:00-08:00"},{"start":"2015-12-10T23:00:00-08:00","end":"2015-12-11T00:00:00-08:00"},{"start":"2015-12-11T00:00:00-08:00","end":"2015-12-11T01:00:00-08:00"},{"start":"2015-12-11T01:00:00-08:00","end":"2015-12-11T02:00:00-08:00"},{"start":"2015-12-11T02:00:00-08:00","end":"2015-12-11T03:00:00-08:00"},{"start":"2015-12-11T03:00:00-08:00","end":"2015-12-11T04:00:00-08:00"},{"start":"2015-12-11T04:00:00-08:00","end":"2015-12-11T05:00:00-08:00"},{"start":"2015-12-11T05:00:00-08:00","end":"2015-12-11T06:00:00-08:00"},{"start":"2015-12-11T06:00:00-08:00","end":"2015-12-11T07:00:00-08:00"},{"start":"2015-12-11T07:00:00-08:00","end":"2015-12-11T08:00:00-08:00"},{"start":"2015-12-11T08:00:00-08:00","end":"2015-12-11T09:00:00-08:00"},{"start":"2015-12-11T11:00:00-08:00","end":"2015-12-11T12:00:00-08:00"},{"start":"2015-12-11T12:00:00-08:00","end":"2015-12-11T13:00:00-08:00"},{"start":"2015-12-11T14:00:00-08:00","end":"2015-12-11T15:00:00-08:00"},{"start":"2015-12-11T15:00:00-08:00","end":"2015-12-11T16:00:00-08:00"},{"start":"2015-12-11T16:00:00-08:00","end":"2015-12-11T17:00:00-08:00"},{"start":"2015-12-11T17:00:00-08:00","end":"2015-12-11T18:00:00-08:00"},{"start":"2015-12-11T18:00:00-08:00","end":"2015-12-11T19:00:00-08:00"},{"start":"2015-12-11T19:00:00-08:00","end":"2015-12-11T20:00:00-08:00"},{"start":"2015-12-11T20:00:00-08:00","end":"2015-12-11T21:00:00-08:00"},{"start":"2015-12-11T21:00:00-08:00","end":"2015-12-11T22:00:00-08:00"},{"start":"2015-12-11T22:00:00-08:00","end":"2015-12-11T23:00:00-08:00"},{"start":"2015-12-11T23:00:00-08:00","end":"2015-12-12T00:00:00-08:00"},{"start":"2015-12-12T00:00:00-08:00","end":"2015-12-12T01:00:00-08:00"},{"start":"2015-12-12T01:00:00-08:00","end":"2015-12-12T02:00:00-08:00"},{"start":"2015-12-12T02:00:00-08:00","end":"2015-12-12T03:00:00-08:00"},{"start":"2015-12-12T03:00:00-08:00","end":"2015-12-12T04:00:00-08:00"},{"start":"2015-12-12T04:00:00-08:00","end":"2015-12-12T05:00:00-08:00"},{"start":"2015-12-12T05:00:00-08:00","end":"2015-12-12T06:00:00-08:00"},{"start":"2015-12-12T06:00:00-08:00","end":"2015-12-12T07:00:00-08:00"},{"start":"2015-12-12T07:00:00-08:00","end":"2015-12-12T08:00:00-08:00"},{"start":"2015-12-12T08:00:00-08:00","end":"2015-12-12T09:00:00-08:00"},{"start":"2015-12-12T09:00:00-08:00","end":"2015-12-12T10:00:00-08:00"},{"start":"2015-12-12T10:00:00-08:00","end":"2015-12-12T11:00:00-08:00"},{"start":"2015-12-12T11:00:00-08:00","end":"2015-12-12T12:00:00-08:00"},{"start":"2015-12-12T12:00:00-08:00","end":"2015-12-12T13:00:00-08:00"},{"start":"2015-12-12T13:00:00-08:00","end":"2015-12-12T14:00:00-08:00"},{"start":"2015-12-12T14:00:00-08:00","end":"2015-12-12T15:00:00-08:00"},{"start":"2015-12-12T15:00:00-08:00","end":"2015-12-12T16:00:00-08:00"},{"start":"2015-12-12T16:00:00-08:00","end":"2015-12-12T17:00:00-08:00"},{"start":"2015-12-12T17:00:00-08:00","end":"2015-12-12T18:00:00-08:00"},{"start":"2015-12-12T18:00:00-08:00","end":"2015-12-12T19:00:00-08:00"},{"start":"2015-12-12T19:00:00-08:00","end":"2015-12-12T20:00:00-08:00"},{"start":"2015-12-12T20:00:00-08:00","end":"2015-12-12T21:00:00-08:00"},{"start":"2015-12-12T21:00:00-08:00","end":"2015-12-12T22:00:00-08:00"},{"start":"2015-12-12T22:00:00-08:00","end":"2015-12-12T23:00:00-08:00"},{"start":"2015-12-12T23:00:00-08:00","end":"2015-12-13T00:00:00-08:00"},{"start":"2015-12-13T00:00:00-08:00","end":"2015-12-13T01:00:00-08:00"},{"start":"2015-12-13T01:00:00-08:00","end":"2015-12-13T02:00:00-08:00"},{"start":"2015-12-13T02:00:00-08:00","end":"2015-12-13T03:00:00-08:00"},{"start":"2015-12-13T03:00:00-08:00","end":"2015-12-13T04:00:00-08:00"},{"start":"2015-12-13T04:00:00-08:00","end":"2015-12-13T05:00:00-08:00"},{"start":"2015-12-13T05:00:00-08:00","end":"2015-12-13T06:00:00-08:00"},{"start":"2015-12-13T06:00:00-08:00","end":"2015-12-13T07:00:00-08:00"},{"start":"2015-12-13T07:00:00-08:00","end":"2015-12-13T08:00:00-08:00"},{"start":"2015-12-13T08:00:00-08:00","end":"2015-12-13T09:00:00-08:00"},{"start":"2015-12-13T09:00:00-08:00","end":"2015-12-13T10:00:00-08:00"},{"start":"2015-12-13T10:00:00-08:00","end":"2015-12-13T11:00:00-08:00"},{"start":"2015-12-13T11:00:00-08:00","end":"2015-12-13T12:00:00-08:00"},{"start":"2015-12-13T12:00:00-08:00","end":"2015-12-13T13:00:00-08:00"},{"start":"2015-12-13T13:00:00-08:00","end":"2015-12-13T14:00:00-08:00"},{"start":"2015-12-13T14:00:00-08:00","end":"2015-12-13T15:00:00-08:00"},{"start":"2015-12-13T15:00:00-08:00","end":"2015-12-13T16:00:00-08:00"},{"start":"2015-12-13T16:00:00-08:00","end":"2015-12-13T17:00:00-08:00"},{"start":"2015-12-13T17:00:00-08:00","end":"2015-12-13T18:00:00-08:00"},{"start":"2015-12-13T18:00:00-08:00","end":"2015-12-13T19:00:00-08:00"},{"start":"2015-12-13T19:00:00-08:00","end":"2015-12-13T20:00:00-08:00"},{"start":"2015-12-13T20:00:00-08:00","end":"2015-12-13T21:00:00-08:00"},{"start":"2015-12-13T21:00:00-08:00","end":"2015-12-13T22:00:00-08:00"},{"start":"2015-12-13T22:00:00-08:00","end":"2015-12-13T23:00:00-08:00"},{"start":"2015-12-13T23:00:00-08:00","end":"2015-12-14T00:00:00-08:00"},{"start":"2015-12-15T00:00:00-08:00","end":"2015-12-15T01:00:00-08:00"},{"start":"2015-12-15T01:00:00-08:00","end":"2015-12-15T02:00:00-08:00"},{"start":"2015-12-15T02:00:00-08:00","end":"2015-12-15T03:00:00-08:00"},{"start":"2015-12-15T03:00:00-08:00","end":"2015-12-15T04:00:00-08:00"},{"start":"2015-12-15T04:00:00-08:00","end":"2015-12-15T05:00:00-08:00"},{"start":"2015-12-15T05:00:00-08:00","end":"2015-12-15T06:00:00-08:00"},{"start":"2015-12-15T06:00:00-08:00","end":"2015-12-15T07:00:00-08:00"},{"start":"2015-12-15T07:00:00-08:00","end":"2015-12-15T08:00:00-08:00"},{"start":"2015-12-15T08:00:00-08:00","end":"2015-12-15T09:00:00-08:00"},{"start":"2015-12-15T12:00:00-08:00","end":"2015-12-15T13:00:00-08:00"},{"start":"2015-12-15T13:00:00-08:00","end":"2015-12-15T14:00:00-08:00"},{"start":"2015-12-15T14:00:00-08:00","end":"2015-12-15T15:00:00-08:00"},{"start":"2015-12-15T15:00:00-08:00","end":"2015-12-15T16:00:00-08:00"},{"start":"2015-12-15T17:00:00-08:00","end":"2015-12-15T18:00:00-08:00"},{"start":"2015-12-15T18:00:00-08:00","end":"2015-12-15T19:00:00-08:00"},{"start":"2015-12-15T19:00:00-08:00","end":"2015-12-15T20:00:00-08:00"},{"start":"2015-12-15T20:00:00-08:00","end":"2015-12-15T21:00:00-08:00"},{"start":"2015-12-15T21:00:00-08:00","end":"2015-12-15T22:00:00-08:00"},{"start":"2015-12-15T22:00:00-08:00","end":"2015-12-15T23:00:00-08:00"},{"start":"2015-12-15T23:00:00-08:00","end":"2015-12-16T00:00:00-08:00"},{"start":"2015-12-16T00:00:00-08:00","end":"2015-12-16T01:00:00-08:00"},{"start":"2015-12-16T01:00:00-08:00","end":"2015-12-16T02:00:00-08:00"},{"start":"2015-12-16T02:00:00-08:00","end":"2015-12-16T03:00:00-08:00"},{"start":"2015-12-16T03:00:00-08:00","end":"2015-12-16T04:00:00-08:00"},{"start":"2015-12-16T04:00:00-08:00","end":"2015-12-16T05:00:00-08:00"},{"start":"2015-12-16T05:00:00-08:00","end":"2015-12-16T06:00:00-08:00"},{"start":"2015-12-16T06:00:00-08:00","end":"2015-12-16T07:00:00-08:00"},{"start":"2015-12-16T07:00:00-08:00","end":"2015-12-16T08:00:00-08:00"},{"start":"2015-12-16T08:00:00-08:00","end":"2015-12-16T09:00:00-08:00"},{"start":"2015-12-16T12:00:00-08:00","end":"2015-12-16T13:00:00-08:00"},{"start":"2015-12-16T13:00:00-08:00","end":"2015-12-16T14:00:00-08:00"},{"start":"2015-12-16T14:00:00-08:00","end":"2015-12-16T15:00:00-08:00"},{"start":"2015-12-16T15:00:00-08:00","end":"2015-12-16T16:00:00-08:00"},{"start":"2015-12-16T16:00:00-08:00","end":"2015-12-16T17:00:00-08:00"},{"start":"2015-12-16T17:00:00-08:00","end":"2015-12-16T18:00:00-08:00"},{"start":"2015-12-16T18:00:00-08:00","end":"2015-12-16T19:00:00-08:00"},{"start":"2015-12-16T19:00:00-08:00","end":"2015-12-16T20:00:00-08:00"},{"start":"2015-12-16T20:00:00-08:00","end":"2015-12-16T21:00:00-08:00"},{"start":"2015-12-16T21:00:00-08:00","end":"2015-12-16T22:00:00-08:00"},{"start":"2015-12-16T22:00:00-08:00","end":"2015-12-16T23:00:00-08:00"},{"start":"2015-12-16T23:00:00-08:00","end":"2015-12-17T00:00:00-08:00"},{"start":"2015-12-17T00:00:00-08:00","end":"2015-12-17T01:00:00-08:00"},{"start":"2015-12-17T01:00:00-08:00","end":"2015-12-17T02:00:00-08:00"},{"start":"2015-12-17T02:00:00-08:00","end":"2015-12-17T03:00:00-08:00"},{"start":"2015-12-17T03:00:00-08:00","end":"2015-12-17T04:00:00-08:00"},{"start":"2015-12-17T04:00:00-08:00","end":"2015-12-17T05:00:00-08:00"},{"start":"2015-12-17T05:00:00-08:00","end":"2015-12-17T06:00:00-08:00"},{"start":"2015-12-17T06:00:00-08:00","end":"2015-12-17T07:00:00-08:00"},{"start":"2015-12-17T07:00:00-08:00","end":"2015-12-17T08:00:00-08:00"},{"start":"2015-12-17T08:00:00-08:00","end":"2015-12-17T09:00:00-08:00"},{"start":"2015-12-17T11:00:00-08:00","end":"2015-12-17T12:00:00-08:00"},{"start":"2015-12-17T12:00:00-08:00","end":"2015-12-17T13:00:00-08:00"},{"start":"2015-12-17T13:00:00-08:00","end":"2015-12-17T14:00:00-08:00"},{"start":"2015-12-17T14:00:00-08:00","end":"2015-12-17T15:00:00-08:00"},{"start":"2015-12-17T16:00:00-08:00","end":"2015-12-17T17:00:00-08:00"},{"start":"2015-12-17T18:00:00-08:00","end":"2015-12-17T19:00:00-08:00"},{"start":"2015-12-17T19:00:00-08:00","end":"2015-12-17T20:00:00-08:00"},{"start":"2015-12-17T20:00:00-08:00","end":"2015-12-17T21:00:00-08:00"},{"start":"2015-12-17T21:00:00-08:00","end":"2015-12-17T22:00:00-08:00"},{"start":"2015-12-17T22:00:00-08:00","end":"2015-12-17T23:00:00-08:00"},{"start":"2015-12-17T23:00:00-08:00","end":"2015-12-18T00:00:00-08:00"},{"start":"2015-12-18T00:00:00-08:00","end":"2015-12-18T01:00:00-08:00"},{"start":"2015-12-18T01:00:00-08:00","end":"2015-12-18T02:00:00-08:00"},{"start":"2015-12-18T02:00:00-08:00","end":"2015-12-18T03:00:00-08:00"},{"start":"2015-12-18T03:00:00-08:00","end":"2015-12-18T04:00:00-08:00"},{"start":"2015-12-18T04:00:00-08:00","end":"2015-12-18T05:00:00-08:00"},{"start":"2015-12-18T05:00:00-08:00","end":"2015-12-18T06:00:00-08:00"},{"start":"2015-12-18T06:00:00-08:00","end":"2015-12-18T07:00:00-08:00"},{"start":"2015-12-18T07:00:00-08:00","end":"2015-12-18T08:00:00-08:00"},{"start":"2015-12-18T08:00:00-08:00","end":"2015-12-18T09:00:00-08:00"},{"start":"2015-12-18T10:00:00-08:00","end":"2015-12-18T11:00:00-08:00"},{"start":"2015-12-18T12:00:00-08:00","end":"2015-12-18T13:00:00-08:00"},{"start":"2015-12-18T13:00:00-08:00","end":"2015-12-18T14:00:00-08:00"},{"start":"2015-12-18T14:00:00-08:00","end":"2015-12-18T15:00:00-08:00"},{"start":"2015-12-18T15:00:00-08:00","end":"2015-12-18T16:00:00-08:00"},{"start":"2015-12-18T16:00:00-08:00","end":"2015-12-18T17:00:00-08:00"},{"start":"2015-12-18T17:00:00-08:00","end":"2015-12-18T18:00:00-08:00"},{"start":"2015-12-18T18:00:00-08:00","end":"2015-12-18T19:00:00-08:00"},{"start":"2015-12-18T19:00:00-08:00","end":"2015-12-18T20:00:00-08:00"},{"start":"2015-12-18T20:00:00-08:00","end":"2015-12-18T21:00:00-08:00"},{"start":"2015-12-18T21:00:00-08:00","end":"2015-12-18T22:00:00-08:00"},{"start":"2015-12-18T22:00:00-08:00","end":"2015-12-18T23:00:00-08:00"},{"start":"2015-12-18T23:00:00-08:00","end":"2015-12-19T00:00:00-08:00"},{"start":"2015-12-19T00:00:00-08:00","end":"2015-12-19T01:00:00-08:00"},{"start":"2015-12-19T01:00:00-08:00","end":"2015-12-19T02:00:00-08:00"},{"start":"2015-12-19T02:00:00-08:00","end":"2015-12-19T03:00:00-08:00"},{"start":"2015-12-19T03:00:00-08:00","end":"2015-12-19T04:00:00-08:00"},{"start":"2015-12-19T04:00:00-08:00","end":"2015-12-19T05:00:00-08:00"},{"start":"2015-12-19T05:00:00-08:00","end":"2015-12-19T06:00:00-08:00"},{"start":"2015-12-19T06:00:00-08:00","end":"2015-12-19T07:00:00-08:00"},{"start":"2015-12-19T07:00:00-08:00","end":"2015-12-19T08:00:00-08:00"},{"start":"2015-12-19T08:00:00-08:00","end":"2015-12-19T09:00:00-08:00"},{"start":"2015-12-19T09:00:00-08:00","end":"2015-12-19T10:00:00-08:00"},{"start":"2015-12-19T10:00:00-08:00","end":"2015-12-19T11:00:00-08:00"},{"start":"2015-12-19T11:00:00-08:00","end":"2015-12-19T12:00:00-08:00"},{"start":"2015-12-19T12:00:00-08:00","end":"2015-12-19T13:00:00-08:00"},{"start":"2015-12-19T13:00:00-08:00","end":"2015-12-19T14:00:00-08:00"},{"start":"2015-12-19T14:00:00-08:00","end":"2015-12-19T15:00:00-08:00"},{"start":"2015-12-19T15:00:00-08:00","end":"2015-12-19T16:00:00-08:00"},{"start":"2015-12-19T16:00:00-08:00","end":"2015-12-19T17:00:00-08:00"},{"start":"2015-12-19T17:00:00-08:00","end":"2015-12-19T18:00:00-08:00"},{"start":"2015-12-19T18:00:00-08:00","end":"2015-12-19T19:00:00-08:00"},{"start":"2015-12-19T19:00:00-08:00","end":"2015-12-19T20:00:00-08:00"},{"start":"2015-12-19T20:00:00-08:00","end":"2015-12-19T21:00:00-08:00"},{"start":"2015-12-19T21:00:00-08:00","end":"2015-12-19T22:00:00-08:00"},{"start":"2015-12-19T22:00:00-08:00","end":"2015-12-19T23:00:00-08:00"},{"start":"2015-12-19T23:00:00-08:00","end":"2015-12-20T00:00:00-08:00"},{"start":"2015-12-20T00:00:00-08:00","end":"2015-12-20T01:00:00-08:00"},{"start":"2015-12-20T01:00:00-08:00","end":"2015-12-20T02:00:00-08:00"},{"start":"2015-12-20T02:00:00-08:00","end":"2015-12-20T03:00:00-08:00"},{"start":"2015-12-20T03:00:00-08:00","end":"2015-12-20T04:00:00-08:00"},{"start":"2015-12-20T04:00:00-08:00","end":"2015-12-20T05:00:00-08:00"},{"start":"2015-12-20T05:00:00-08:00","end":"2015-12-20T06:00:00-08:00"},{"start":"2015-12-20T06:00:00-08:00","end":"2015-12-20T07:00:00-08:00"},{"start":"2015-12-20T07:00:00-08:00","end":"2015-12-20T08:00:00-08:00"},{"start":"2015-12-20T08:00:00-08:00","end":"2015-12-20T09:00:00-08:00"},{"start":"2015-12-20T09:00:00-08:00","end":"2015-12-20T10:00:00-08:00"},{"start":"2015-12-20T10:00:00-08:00","end":"2015-12-20T11:00:00-08:00"},{"start":"2015-12-20T11:00:00-08:00","end":"2015-12-20T12:00:00-08:00"},{"start":"2015-12-20T12:00:00-08:00","end":"2015-12-20T13:00:00-08:00"},{"start":"2015-12-20T13:00:00-08:00","end":"2015-12-20T14:00:00-08:00"},{"start":"2015-12-20T14:00:00-08:00","end":"2015-12-20T15:00:00-08:00"},{"start":"2015-12-20T15:00:00-08:00","end":"2015-12-20T16:00:00-08:00"},{"start":"2015-12-20T16:00:00-08:00","end":"2015-12-20T17:00:00-08:00"},{"start":"2015-12-20T17:00:00-08:00","end":"2015-12-20T18:00:00-08:00"},{"start":"2015-12-20T18:00:00-08:00","end":"2015-12-20T19:00:00-08:00"},{"start":"2015-12-20T19:00:00-08:00","end":"2015-12-20T20:00:00-08:00"},{"start":"2015-12-20T20:00:00-08:00","end":"2015-12-20T21:00:00-08:00"},{"start":"2015-12-20T21:00:00-08:00","end":"2015-12-20T22:00:00-08:00"},{"start":"2015-12-20T22:00:00-08:00","end":"2015-12-20T23:00:00-08:00"},{"start":"2015-12-20T23:00:00-08:00","end":"2015-12-21T00:00:00-08:00"},{"start":"2015-12-22T00:00:00-08:00","end":"2015-12-22T01:00:00-08:00"},{"start":"2015-12-22T01:00:00-08:00","end":"2015-12-22T02:00:00-08:00"},{"start":"2015-12-22T02:00:00-08:00","end":"2015-12-22T03:00:00-08:00"},{"start":"2015-12-22T03:00:00-08:00","end":"2015-12-22T04:00:00-08:00"},{"start":"2015-12-22T04:00:00-08:00","end":"2015-12-22T05:00:00-08:00"},{"start":"2015-12-22T05:00:00-08:00","end":"2015-12-22T06:00:00-08:00"},{"start":"2015-12-22T06:00:00-08:00","end":"2015-12-22T07:00:00-08:00"},{"start":"2015-12-22T07:00:00-08:00","end":"2015-12-22T08:00:00-08:00"},{"start":"2015-12-22T08:00:00-08:00","end":"2015-12-22T09:00:00-08:00"},{"start":"2015-12-22T12:00:00-08:00","end":"2015-12-22T13:00:00-08:00"},{"start":"2015-12-22T14:00:00-08:00","end":"2015-12-22T15:00:00-08:00"},{"start":"2015-12-22T15:00:00-08:00","end":"2015-12-22T16:00:00-08:00"},{"start":"2015-12-22T17:00:00-08:00","end":"2015-12-22T18:00:00-08:00"},{"start":"2015-12-22T18:00:00-08:00","end":"2015-12-22T19:00:00-08:00"},{"start":"2015-12-22T19:00:00-08:00","end":"2015-12-22T20:00:00-08:00"},{"start":"2015-12-22T20:00:00-08:00","end":"2015-12-22T21:00:00-08:00"},{"start":"2015-12-22T21:00:00-08:00","end":"2015-12-22T22:00:00-08:00"},{"start":"2015-12-22T22:00:00-08:00","end":"2015-12-22T23:00:00-08:00"},{"start":"2015-12-22T23:00:00-08:00","end":"2015-12-23T00:00:00-08:00"},{"start":"2015-12-23T00:00:00-08:00","end":"2015-12-23T01:00:00-08:00"},{"start":"2015-12-23T01:00:00-08:00","end":"2015-12-23T02:00:00-08:00"},{"start":"2015-12-23T02:00:00-08:00","end":"2015-12-23T03:00:00-08:00"},{"start":"2015-12-23T03:00:00-08:00","end":"2015-12-23T04:00:00-08:00"},{"start":"2015-12-23T04:00:00-08:00","end":"2015-12-23T05:00:00-08:00"},{"start":"2015-12-23T05:00:00-08:00","end":"2015-12-23T06:00:00-08:00"},{"start":"2015-12-23T06:00:00-08:00","end":"2015-12-23T07:00:00-08:00"},{"start":"2015-12-23T07:00:00-08:00","end":"2015-12-23T08:00:00-08:00"},{"start":"2015-12-23T08:00:00-08:00","end":"2015-12-23T09:00:00-08:00"},{"start":"2015-12-23T09:00:00-08:00","end":"2015-12-23T10:00:00-08:00"},{"start":"2015-12-23T10:00:00-08:00","end":"2015-12-23T11:00:00-08:00"}]}'
    });

    jasmine.Ajax.stubRequest(
      'https://api.timekit.io/v2/users/timezone/marty.mcfly@timekit.io'
    ).andReturn({
      status: 200,
      statusText: 'HTTP/1.1 200 OK',
      contentType: 'application/json',
      responseText: '{"data":{"timezone":"America\/Los_Angeles","utc_offset":-8}}'
    });

};