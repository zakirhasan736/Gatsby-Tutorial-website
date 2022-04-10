"use strict";(self.webpackChunktutor_platform_webapp=self.webpackChunktutor_platform_webapp||[]).push([[678],{9158:function(e,t,n){t.Z=void 0;var a,r=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(7294)),l=(a=n(5697))&&a.__esModule?a:{default:a};function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var u=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?m(e):t}(this,o(t).call(this))).state={className:e.classNameNotInView,childProps:e.childPropsNotInView},n.onIntersectionAll=n.onIntersectionAll.bind(m(n)),n.onIntersection=n.onIntersection.bind(m(n)),n.isFirstInView=!0,n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){if(window.IntersectionObserver){var e=this.props,t=e.useInviewMonitor,n=e.intoViewMargin,a=e.threshold;if(this._element&&t&&("function"!=typeof t||t())){var r={rootMargin:n,threshold:a};this.observer=new window.IntersectionObserver(this.onIntersectionAll,r),this.observer.observe(this._element)}}else console.error("react-inview-monitor found no support for IntersectionObserver.\nPerhaps use a polyfill like: https://cdn.polyfill.io/v2/polyfill.js?features=IntersectionObserver ?")}},{key:"componentWillUnmount",value:function(){this.observer&&this.observer.disconnect()}},{key:"onIntersectionAll",value:function(e){e.forEach(this.onIntersection)}},{key:"onIntersection",value:function(e){if(e.target===this._element){var t=this.props,n=t.classNameNotInView,a=t.classNameInView,r=t.classNameAboveView,l=t.classNameNotAboveView,s=t.toggleClassNameOnInView,i=t.childPropsInView,c=t.childPropsNotInView,o=t.toggleChildPropsOnInView,m=t.onInView,p=t.onNotInView,u=t.repeatOnInView,d=e.isIntersecting,f=d&&this.isFirstInView;f&&(this.isFirstInView=!1);var v=("string"==typeof a||"string"==typeof r)&&s,h=i&&o,N=v||h||(m||p)&&u;if(d&&!N){var E={};return"string"==typeof a&&(E.className=a),i&&(E.childProps=i),Object.keys(E).length&&this.setState(E),m&&"function"==typeof m&&m(e),void this.observer.unobserve(e.target)}if(N){if("string"==typeof r)return void(!d&&e.boundingClientRect.top<=0?this.setState({className:r}):this.setState({className:l||""}));if(d){var _={};(v||f)&&(_.className=a),(h||f)&&(_.childProps=i),Object.keys(_).length&&this.setState(_),m&&"function"==typeof m&&m(e)}else{var g={};v&&(g.className=n),h&&(g.childProps=c),Object.keys(g).length&&this.setState(g),p&&"function"==typeof p&&p(e)}}}}},{key:"render",value:function(){var e=this,t=this.state,n=t.childProps,a=t.className,l=this.props,s=(l.useInviewMonitor,l.children);return n&&Object.keys(n).length&&(s=r.default.cloneElement(s,n)),r.default.createElement("div",{className:a,ref:function(t){t&&(e._element=t)}},s)}}])&&c(n.prototype,a),l&&c(n,l),t}(r.Component);u.propTypes={classNameInView:l.default.string,classNameNotInView:l.default.string,classNameAboveView:l.default.string,classNameNotAboveView:l.default.string,toggleClassNameOnInView:l.default.bool,childPropsInView:l.default.object,childPropsNotInView:l.default.object,toggleChildPropsOnInView:l.default.bool,onInView:l.default.func,onNotInView:l.default.func,repeatOnInView:l.default.bool,useInviewMonitor:l.default.func,intoViewMargin:l.default.string,threshold:l.default.number},u.defaultProps={classNameNotInView:"",childPropsNotInView:{},useInviewMonitor:function(){return!0},intoViewMargin:"-20%",threshold:0};var d=u;t.Z=d},1584:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(7294),r=n(4847),l=n(262),s=n(6870),i=n(1597),c=n(9158),o=function(){var e=(0,i.useStaticQuery)("3435847582");return a.createElement(a.Fragment,null,a.createElement("div",{className:"appBenner__wrapper_info"},function(e){var t=[];return e.allBennerDataJson.edges.forEach((function(e,n){t.push(a.createElement("div",{className:"appBenner__wrapper_infowrap",key:n},a.createElement("div",{className:"headingTitleBox"},a.createElement(c.Z,{classNameNotInView:"vis-hidden",classNameInView:"slideDrwUp"},a.createElement("h1",{className:"BennerTitle"},a.createElement("span",{className:"strockedText"},e.node.styleTitle),"  ",e.node.title)),a.createElement(c.Z,{classNameNotInView:"vis-hidden",classNameInView:"slideDrwUp"},a.createElement("h1",{className:"BennerTitle tiTwo"},e.node.subTitle))),a.createElement(c.Z,{classNameNotInView:"vis-hidden",classNameInView:"slideDrwUp"},a.createElement("button",{type:"button",className:"custom__button bennerBTN"},e.node.buttonText))))})),t}(e)))},m=function(){return a.createElement(a.Fragment,null,a.createElement("section",{className:"app__BennerSection",id:"home"},a.createElement("div",{className:"bennerBgShape"},a.createElement("img",{src:s.W.bennerBgShape,alt:""})),a.createElement("div",{className:"BennerShapeRight"},a.createElement("img",{src:s.W.BennerShapeRight,alt:""})),a.createElement("div",{className:"ShapeBottom"},a.createElement("img",{src:s.W.bennerShape,alt:""})),a.createElement("div",{className:"bennerApp__wrapper"},a.createElement("div",{className:"bennerCrossShape"},a.createElement("img",{src:s.W.bennerCrossShape,alt:""})),a.createElement("div",{className:"TreeShape"},a.createElement("img",{src:s.W.TreeShape,alt:""})),a.createElement("div",{className:"benner__animetedRound"},a.createElement("span",null),a.createElement("span",null)),a.createElement(o,null))))},p=n(8961),u=function(){var e=(0,i.useStaticQuery)("3074684425");return a.createElement(a.Fragment,null,a.createElement("div",{className:"AppServices__Section",id:"about"},a.createElement("div",{className:"ShapeBottom colorShapeBottom"},a.createElement("img",{src:s.W.bottomShapeColor,alt:"bottomShapeColor"})),a.createElement("div",{className:"AppServices__sectionWrapper"},p.GJ.map((function(e){var t=e.opTitle,n=e.descSt1,r=e.descSt2,l=e.title,s=e.id;return a.createElement("div",{className:"AppServices__SectionBox",key:s},a.createElement("div",{className:"AppServices__TitleBox"},a.createElement("h5",{className:"AppServices__TitleOverly"},t),a.createElement("h2",{className:"AppServices__SecTitle"},l)),a.createElement("p",{className:"AppServices__Desc"},a.createElement("span",null,n),a.createElement("span",null,r)))})),a.createElement("div",{className:"AppServices__ServiceItemsBox"},p.Nl.map((function(e){var t=e.number,n=e.textTitle;return a.createElement("h3",{className:"ServicesTitle"},a.createElement("span",null,t,"+"),n)})),a.createElement("div",{className:"AppServices__ItemsBox"},function(e){var t=[];return e.allServiceCardJson.edges.forEach((function(e,n){t.push(a.createElement("div",{className:"AppServicess__cardWrapperBox",key:n},a.createElement("div",{className:"AppServices__CardItems"},a.createElement("div",{className:"AppServicess__itemsImage"},a.createElement("img",{className:"cardImg__overlyn",src:e.node.imgOverly.childImageSharp.fluid.src,alt:e.node.alt,fluid:e.node.imgOverly.childImageSharp.fluid}),a.createElement("img",{className:"cardModelImg",src:e.node.img.childImageSharp.fluid.src,alt:e.node.alt,fluid:e.node.img.childImageSharp.fluid})),a.createElement("h3",{className:"AppService__Title"},e.node.title))))})),t}(e)),p.S$.map((function(e){var t=e.title,n=e.id;return a.createElement("button",{type:"button",className:"custom__button AppServicesBTN",key:n},t)}))))))},d=function(){var e=(0,i.useStaticQuery)("2075220831");return a.createElement(a.Fragment,null,a.createElement("section",{className:"AppServiceDetails__section"},a.createElement("div",{className:"AppServiceDetails__wrapper"},a.createElement("div",{className:"servicedetaisCardWraper"},function(e){var t=[];return e.allServiceDetailsJson.edges.forEach((function(e,n){t.push(a.createElement("div",{className:"AppServiceDetails__CardItems",key:n},a.createElement("div",{className:"AppServiceDetails__Card"},a.createElement("div",{className:"ServiceDetail__ShapeRight"},a.createElement("img",{src:e.node.ImgShape.childImageSharp.fluid.src,alt:e.node.alt,fluid:e.node.ImgShape.childImageSharp.fluid})),a.createElement("div",{className:"AppServiceDetails__ModelImgBox"},a.createElement("img",{src:e.node.ImgUrl.childImageSharp.fluid.src,alt:e.node.alt,fluid:e.node.ImgUrl.childImageSharp.fluid})),a.createElement("div",{className:"AppServiceDetails__TextBox"},a.createElement("h3",{className:"servicDetails__title"},e.node.title),a.createElement("p",{className:"servicDetails__Desc"},e.node.desc),a.createElement("button",{className:"serviceDetails__Btn",type:"button"},e.node.buttonText,"]")))))})),t}(e)))))},f=function(e){var t=e.title;return a.createElement(c.Z,{classNameNotInView:"vis-hidden",classNameInView:"slideDrwUp"},a.createElement("h2",{className:"AppSection__Title"},t))},v=function(e){var t=e.secDescription;return a.createElement(c.Z,{classNameNotInView:"vis-hidden",classNameInView:"slideDrwUp"},a.createElement("p",{className:"AppSection__Desc"},t))},h=function(){var e=(0,i.useStaticQuery)("1555341052");return a.createElement(a.Fragment,null,a.createElement("section",{className:"AppFeaturesDetails__section"},a.createElement("div",{className:"ShapeBottom FeatureBottom"},a.createElement("img",{src:s.W.bottomShapeColor,alt:""})),a.createElement("div",{className:"ShapeTop FeaturTop"},a.createElement("img",{src:s.W.TopShapeColor,alt:""})),a.createElement("div",{className:"AppFeaturesDetails__wrapper"},a.createElement("div",{className:"AppFeatures__sectionBox"},a.createElement(f,{title:"我们的承诺"}),a.createElement(v,{secDescription:"24小时全天候无时差为你服务"})),a.createElement("div",{className:"AppFeatures__wrapperBox"},a.createElement("div",{className:"FeaturesModdelImg"},a.createElement("img",{src:s.W.FeaturesModdelImg,alt:""})),a.createElement("div",{className:"FeaturesRoundShapes"},a.createElement("span",{className:"RoundShape Round1"}),a.createElement("span",{className:"RoundShape Round2"}),a.createElement("span",{className:"RoundShape Round3"}),a.createElement("span",{className:"RoundShape Round4"})),a.createElement("div",{className:"AppFeaturesDetails__TopWrapper"},function(e){var t=[];return e.allFeaturesDataJson.edges.forEach((function(e,n){t.push(a.createElement("div",{className:"AppFeaturesDetails__ContentBoxItems",key:n},a.createElement("h3",{className:"AppFeatures__title"},e.node.title),a.createElement("p",{className:"AppFeatures__Desc"},e.node.desc)))})),t}(e)),a.createElement("div",{className:"AppFeaturesDetails__BottomWrapper"},a.createElement("div",{className:"AppFeaturesDetails__ContentBoxItems"}))))))},N=function(){return a.createElement(a.Fragment,null,a.createElement("section",{className:"AppClientGallerry__section"},a.createElement("div",{className:"AppClientGallerry__wrapper"},a.createElement("div",{className:"AppClientGallery__sectionBox"},a.createElement(f,{title:"我们的承诺"})),a.createElement("div",{className:"AppClientGallerry__ContentBox"},p.PI.map((function(e){var t=e.imgUrl;return a.createElement("div",{className:"AppClientGallery_ImagItems"},a.createElement("img",{src:t,alt:"clientImg"}))}))))))},E=function(){return a.createElement(r.Z,null,a.createElement(l.Z,{title:"Home"}),a.createElement(m,null),a.createElement(u,null),a.createElement(d,null),a.createElement(h,null),a.createElement(N,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-15dd495b21c0eba4d609.js.map