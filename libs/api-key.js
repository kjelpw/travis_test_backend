/**

 Copyright 2019 University of Denver

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 */

'use strict';

const config = require('../config/config'),
    logger = require('../libs/log4');

/**
 * Verifies api key
 * @param req
 * @param res
 * @param next
 */
exports.verify = function (req, res, next) {

    let api_key = req.query.api_key;
    console.log(api_key);

    /*
    if (api_key === config.apiKey) {

        next();

    } else {

        logger.module().error('ERROR: [/libs/api-key lib (verify)] Unauthorized request');

        res.status(401).send({
            message: 'Unauthorized request'
        });
    }
    */
};