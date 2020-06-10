(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['multipleChoiceCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"mutipleChoiceBox\">\r\n    <ul class = \"choicelist\">\r\n        <li>First State</li>\r\n        <li>Another State</li>\r\n        <li>Some State</li>\r\n        <li>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"state") || (depth0 != null ? lookupProperty(depth0,"state") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"state","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":21}}}) : helper)))
    + "</li>\r\n    </ul>\r\n</section>";
},"useData":true});
})();