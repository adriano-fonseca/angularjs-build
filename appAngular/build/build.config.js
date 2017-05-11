/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {

		devDir      : "../app/",
	    buildDir    : "../bin/",
        compileDir  : "../../webapp/resources/",
        	
        /**
         * This is the same as `appFiles`, except it contains patterns that reference vendor code (`vendor/`) that we
         * need to place into the build process somewhere. While the `appFiles` property ensures all standardized files
         * are collected for compilation, it is the user's job to ensure non-standardized (i.e. vendor-related) files are
         * handled appropriately in `vendorFiles.js`.
         *
         * The `vendorFiles.js` property holds files to be automatically concatenated and minified with our project source
         * files.
         *
         * The `vendorFiles.css` property holds any CSS files to be automatically included in our app.
        */
};

