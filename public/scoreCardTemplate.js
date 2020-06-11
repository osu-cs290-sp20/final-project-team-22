(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['scoreCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"scoreCard\">\n    <div class=\"content\">\n        <div class=\"scoreContent\">\n            <div class=\"score-icon\">\n            </div>\n            <div class=\"userdata\">\n                <p class=\"username\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":28}}}) : helper)))
    + "\n               </p>\n               <p class=\"scorevalue\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"score") || (depth0 != null ? lookupProperty(depth0,"score") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":11,"column":20},"end":{"line":11,"column":29}}}) : helper)))
    + "\n                </p>\n            </div>\n        </div>\n    </div>\n</article>\n";
},"useData":true});
})();