/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

const merge = require('lodash/merge');
const chalk = require('chalk');
const buildToMatchSchema = require('./matchers/toMatchSchema');
const buildToBeValidSchema = require('./matchers/toBeValidSchema');

function matchersWithOptions(userOptions = {}) {
  const defaultOptions = {
    allErrors: true,
  };

  const options = merge(defaultOptions, userOptions);

  return {
    toMatchSchema: buildToMatchSchema(options),
    toBeValidSchema: buildToBeValidSchema(options),
  };
}

module.exports.matchers = matchersWithOptions();
module.exports.matchersWithFormats = (formats = {}) => {
  console.warn(chalk.yellow(
    'matchersWithFormats has been deprecated and will be removed in the next major version.\n' +
    'Please use matchersWithOptions instead.'
  ));
  return matchersWithOptions({ unknownFormats: true, formats });
};
module.exports.matchersWithOptions = matchersWithOptions;
