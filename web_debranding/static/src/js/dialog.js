odoo.define("web_debranding.dialog", function(require) {
    "use strict";
    require("web_debranding.base");

    var Dialog = require("web.Dialog");
    Dialog.include({
        init: function(parent, options) {
            var debranding_new_name = odoo.debranding_new_name;
            var debranding_new_website = odoo.debranding_new_website;
            if (!options)
                return this._super(parent, options);
            if (options.title && options.title.replace) {
                var title = options.title.replace(/Odoo/gi, debranding_new_name);
                options.title = title;
            } else {
                options.title = debranding_new_name;
            }
            if (options.$content) {
                if (!(options.$content instanceof $)) {
                    options.$content = $(options.$content);
                }
                var content_html = options.$content.html();
                content_html = content_html.replace(
                    /Odoo.com/gi,
                    debranding_new_website
                );
                content_html = content_html.replace(/Odoo/gi, debranding_new_name);
                options.$content.html(content_html);
            }
            return this._super(parent, options);
        },
    });
});
