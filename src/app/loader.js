
import Handlebars from 'handlebars';

const Loader = {
    load: function (config) {
        $.each(config.partials, (i, partial) => {
            $.when(
                $.ajax({
                    dataType: "json",
                    url: partial.dataUrl
                }),
                // load your external HTML template
                $.ajax({
                    url: partial.url
                })
            ).done(function (data, html) {
                // render the template and data, append it to your target in the DOM
                var template = Handlebars.compile(html[0]);
                $(template(data[0])).appendTo(partial.target);
            }
            );
        });
    }
};

export default Loader;