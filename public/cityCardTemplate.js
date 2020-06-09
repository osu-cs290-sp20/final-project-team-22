(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['cityCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"city-card\">\n    \n    <div class=\"caption\" >\n        Which city is this? \n    </div>\n	\n	<div class = \"answer\">\n	"
    + alias4(((helper = (helper = lookupProperty(helpers,"caption") || (depth0 != null ? lookupProperty(depth0,"caption") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data,"loc":{"start":{"line":8,"column":1},"end":{"line":8,"column":12}}}) : helper)))
    + "\n	</div>\n	\n	\n	<input id=\"text-entry\">\n	<button id=\"submit-answer\">Submit Answer</button>\n	\n	\n	<div class=\"image-container\">\n        <img class=\"city-image\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"photoURL") || (depth0 != null ? lookupProperty(depth0,"photoURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":17,"column":37},"end":{"line":17,"column":49}}}) : helper)))
    + "\" />\n    </div>\n	\n</section>";
},"useData":true});
})();