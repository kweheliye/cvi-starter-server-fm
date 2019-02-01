/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the IBM License, a copy of which may be obtained at:
 *
 * http://www14.software.ibm.com/cgi-bin/weblap/lap.pl?li_formnum=L-DDIN-AHKPKY&popup=n&title=IBM%20IoT%20for%20Automotive%20Sample%20Starter%20Apps%20%28Android-Mobile%20and%20Server-all%29
 *
 * You may not use this file except in compliance with the license.
 */
/*
 * User router
 * - to use shared authentication middleware function:
 *    '''var authenticate = require('./auth.js').authenticate;
 *       router.get(path, authenticate, <handler>);```
 */

/**
 * Export routers
 */
module.exports = [
                  require('./asset.js'),
                  require('./event.js'),
                  require('./poi.js'),
                  require('./geofence.js'),
                  require('./analysis.js'),
                  require('./monitor.js'),
                  require('./iotpdevice.js'),
                  require('./simulator.js')
                  ];