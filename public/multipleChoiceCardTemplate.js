(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['multipleChoiceCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<section class=\"mutipleChoiceBox\">\r\n    <div class=\"choicelist\">\r\n      <label for=\"one\">\r\n        <input type=\"checkbox\" id=\"one\" />"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"city") || (depth0 != null ? lookupProperty(depth0,"city") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"city","hash":{},"data":data,"loc":{"start":{"line":4,"column":42},"end":{"line":4,"column":50}}}) : helper)))
    + "</label>\r\n      <label for=\"two\">\r\n        <input type=\"checkbox\" id=\"two\" />More Content</label>\r\n      <label for=\"three\">\r\n        <input type=\"checkbox\" id=\"three\" />Some Content</label>\r\n    </div>\r\n  </div>\r\n</section>";
},"useData":true});
})();