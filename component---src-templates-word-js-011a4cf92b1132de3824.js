(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(154),s=a(158),l=a(159),u=a(164),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.word;return i.a.createElement(s.a,{location:this.props.location,title:e},i.a.createElement("div",{className:"word-page"},i.a.createElement(l.a,{title:t.english+"| Branko - englesko hrvatski riječnik otvorenog koda",description:t.english+" prijevod na hrvatski jezik: "+t.croatian}),i.a.createElement(u.a,{data:t.node}),i.a.createElement(c.a,{className:"back",to:"/"},"← povratak na pretragu")))},t}(i.a.Component);t.default=p;var m="1706240995"},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(155),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},158:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(154),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title),a=e.children,n=i.a.createElement("div",null,i.a.createElement("h1",{className:"site-title"},i.a.createElement(c.a,{to:"/"},t)),i.a.createElement("h2",{className:"site-subtitle"},"englesko hrvatski IT riječnik otvorenog koda"));return i.a.createElement("div",{className:"root"},i.a.createElement("header",null,n,i.a.createElement("a",{className:"github-link",href:"https://github.com/marinbenc/branko"},"Dodaj novu riječ")),i.a.createElement("main",null,a),i.a.createElement("footer",null,"Branko je ",i.a.createElement("a",{href:"https://github.com/marinbenc/branko"},"riječnik otvorenog koda i svi su pozvani dodati nove riječi"),".",i.a.createElement("br",null),"Održava ",i.a.createElement("a",{href:"http://marinbenc.com"},"Marin Benčević"),"."))},t}(i.a.Component);t.a=s},159:function(e,t,a){"use strict";var n=a(160),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(163),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Branko",description:"englesko hrvatski IT riječnik otvorenog koda",author:"Marin Bencevic"}}}}},164:function(e,t,a){"use strict";a.d(t,"a",function(){return s});a(171),a(35),a(36);var n=a(0),r=a.n(n),o=a(154),i=a(172),c=a.n(i);function s(e){var t,a=e.data,n=a.english,i=a.croatian,s=a.note,l=a.source;return r.a.createElement("div",{className:"word",key:n},r.a.createElement("h3",null,r.a.createElement(o.a,{to:(t=n,t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))},n)),r.a.createElement("p",null,r.a.createElement(c.a,{source:i})),s&&r.a.createElement("small",null,"note"),l&&r.a.createElement("small",{className:"source"},"(izvor: ",r.a.createElement(c.a,{source:l}),")"))}}}]);
//# sourceMappingURL=component---src-templates-word-js-011a4cf92b1132de3824.js.map