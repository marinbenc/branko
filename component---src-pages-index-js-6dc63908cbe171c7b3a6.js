(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(79),a(56),a(35),a(268),a(270),a(271),a(75);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(273),c=a(158),l=a(159),u=a(164),d=function(e){function t(t){var a;(a=e.call(this,t)||this).getOrCreateSearchIndex=function(){return a.index?a.index:s.Index.load(a.props.data.siteSearchIndex.index)},a.search=function(e){var t=e.target.value;a.index=a.getOrCreateSearchIndex();var n=a.index.search(t,{expand:!0}).map(function(e){var t=e.ref;return{node:a.index.documentStore.getDoc(t)}}).filter(function(e){return null!=e.node});n.sort(function(e,t){return e.node.english.toLowerCase()<t.node.english.toLowerCase()?-1:1});var r=a.groupByFirstLetter(n);a.setState({query:t,results:r})},a.groupByFirstLetter=function(e){var t=e.reduce(function(e,t){var a=t.node,n=a.english.charAt(0).toLowerCase();return e[n]?e[n].children.push(a):e[n]={startsWith:n,children:[a]},e},{});return Object.values(t)},a.renderWord=function(e){return i.a.createElement(u.a,{data:e})};var n=a.props.data.allWordsJson.edges;n.sort(function(e,t){return e.node.english.toLowerCase()<t.node.english.toLowerCase()?-1:1});var r=a.groupByFirstLetter(n);return a.allData=r,console.log(a.props.data),a.state={query:"",results:a.allData},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.data.site.siteMetadata.title,a=this.state.query?this.state.results:this.allData;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:"Branko - englesko hrvatski IT riječnik otvorenog koda",keywords:["prijevod","hrvatsko","engleski","računarstvo","programiranje","IT"]}),i.a.createElement("input",{className:"search-box",type:"text",value:this.state.query,onChange:this.search,placeholder:"Traži"}),i.a.createElement("nav",null,i.a.createElement("ul",{className:"letters"},a.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:"#"+e.startsWith},e.startsWith))}))),a.map(function(t){return i.a.createElement("div",{className:"words-for-letter",id:t.startsWith},i.a.createElement("h2",null,i.a.createElement("a",{href:"#"+t.startsWith},t.startsWith)),t.children.map(e.renderWord))}))},t}(i.a.Component);t.default=d;var p="3128833880"},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(155),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},158:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),i=a.n(o),s=a(154),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title),a=e.children,n=i.a.createElement("div",null,i.a.createElement("h1",{className:"site-title"},i.a.createElement(s.a,{to:"/"},t)),i.a.createElement("h2",{className:"site-subtitle"},"englesko hrvatski IT riječnik otvorenog koda"));return i.a.createElement("div",{className:"root"},i.a.createElement("header",null,n,i.a.createElement("a",{className:"github-link",href:"https://github.com/marinbenc/branko"},"Dodaj novu riječ")),i.a.createElement("main",null,a),i.a.createElement("footer",null,"Branko je ",i.a.createElement("a",{href:"https://github.com/marinbenc/branko"},"riječnik otvorenog koda i svi su pozvani dodati nove riječi"),".",i.a.createElement("br",null),"Održava ",i.a.createElement("a",{href:"http://marinbenc.com"},"Marin Benčević"),"."))},t}(i.a.Component);t.a=c},159:function(e,t,a){"use strict";var n=a(160),r=a(0),o=a.n(r),i=a(4),s=a.n(i),c=a(163),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Branko",description:"englesko hrvatski IT riječnik otvorenog koda",author:"Marin Bencevic"}}}}},164:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(171),a(35),a(36);var n=a(0),r=a.n(n),o=a(154),i=a(172),s=a.n(i);function c(e){var t,a=e.data,n=a.english,i=a.croatian,c=a.note,l=a.source;return r.a.createElement("div",{className:"word",key:n},r.a.createElement("h3",null,r.a.createElement(o.a,{to:(t=n,t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""))},n)),r.a.createElement("p",null,r.a.createElement(s.a,{source:i})),c&&r.a.createElement("small",null,"note"),l&&r.a.createElement("small",{className:"source"},"(izvor: ",r.a.createElement(s.a,{source:l}),")"))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6dc63908cbe171c7b3a6.js.map