(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),s=(n(14),n(3)),i=n(4),u=n(6),l=n(5),h=(n(15),n(1)),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.name)},a.state={name:""},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("header",{className:"Searchbar",onSubmit:this.onSubmit,children:Object(h.jsxs)("form",{className:"SearchForm",children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{onChange:function(t){e.setState({name:t.currentTarget.value})},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(o.a.Component),b=(n(17),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("ul",{className:"ImageGallery",children:this.props.children})}}]),n}(o.a.Component)),j=(n(18),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("li",{className:"ImageGalleryItem",children:Object(h.jsx)("img",{onClick:function(){return e.props.onClick(e.props.photo.largeImageURL)},src:this.props.photo.webformatURL,alt:"",className:"ImageGalleryItem-image"})})}}]),n}(o.a.Component)),d=(n(19),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",className:"Button",onClick:this.props.onClick,children:"Load more"})})}}]),n}(o.a.Component)),m=(n(20),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Overlay",onClick:this.props.onClose,children:Object(h.jsx)("div",{className:"Modal",children:Object(h.jsx)("img",{src:this.props.url,alt:""})})})}}]),n}(o.a.Component)),f=(n(21),n(9)),g=n.n(f),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).formatQuery=function(e){return e.trim().split(" ").join("+")},a.apiService=function(e,t,n){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=").concat(n,"&key=").concat("22353815-5fa21056c210e4ef7062efe69")).then((function(e){return e.json()}))},a.loadPhotos=function(){a.setState({loadInProggress:!0}),a.apiService(a.query,a.page,a.perPage).then((function(e){a.setState({photosList:a.state.photosList.concat(e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}})))}),a.setState({loadInProggress:!1}),e.hits.length===a.perPage?(a.page+=1,a.setState({enableLoadMore:!0})):a.setState({enableLoadMore:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},a.onNewRequest=function(e){a.query=a.formatQuery(e),a.page=1,a.setState({photosList:[]}),a.loadPhotos()},a.onLoadMore=function(){a.loadPhotos()},a.closeModal=function(){a.setState({enableModal:!1})},a.query="",a.page=1,a.perPage=12,a.largeURL="",a.state={loadInProggress:!1,enableLoadMore:!1,enableModal:!1,photosList:[]},document.addEventListener("keydown",(function(e){"Escape"===e.key&&a.closeModal()})),a}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{onSubmit:this.onNewRequest}),Object(h.jsx)(b,{photosList:this.state.photosList,children:this.state.photosList.map((function(t){return Object(h.jsx)(j,{photo:t,onClick:function(t){e.largeURL=t,e.setState({enableModal:!0})}},t.id)}))}),this.state.loadInProggress&&Object(h.jsx)(g.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),this.state.enableLoadMore&&Object(h.jsx)(d,{onClick:this.onLoadMore}),this.state.enableModal&&Object(h.jsx)(m,{url:this.largeURL,onClose:this.closeModal})]})}}]),n}(o.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),v()}},[[42,1,2]]]);
//# sourceMappingURL=main.84779301.chunk.js.map