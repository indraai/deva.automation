"use strict";
// Automation Deva Test File
// Copyright ©2000-2026 Quinn A Michaels; All rights reserved. 
// Legal Signature Required For Lawful Use.
// Distributed under VLA:39929644578553757603 LICENSE.md
// Wednesday, January 7, 2026 - 10:42:57 AM

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
    expect(AutomationDeva).to.have.property('modules');
  });
})
