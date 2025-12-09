"use strict";
// Automation Deva Test File
// Copyright ©2000-2025 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:21490477123408682036 LICENSE.md
// Sunday, November 30, 2025 - 10:27:14 AM

const {expect} = require('chai')
const AutomationDeva = require('./index.js');

describe(AutomationDeva.me.name, () => {
  beforeEach(() => {
    return AutomationDeva.init()
  });
  it('Check the DEVA Object', () => {
    expect(AutomationDeva).to.be.an('object');
    expect(AutomationDeva).to.have.property('agent');
    expect(AutomationDeva).to.have.property('vars');
    expect(AutomationDeva).to.have.property('listeners');
    expect(AutomationDeva).to.have.property('methods');
    expect(AuthorityDeva).to.have.property('modules');
  });
})
