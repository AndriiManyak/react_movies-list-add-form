(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(7),l=a.n(n),o=(a(16),a(10)),m=a(2),s=a(3),c=a(5),d=a(4),u=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:n},"IMDB"))))});u.defaultProps={description:""};var h=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};h.defaultProps={movies:[]};var p=a(1),v=a(8),g=a.n(v),b=function(e){var t,a=e.inputName,i=e.value,n=e.error,l=e.onChange,o=e.onBlur;return"empty"===n?t="this field can not be empty":"invalid"===n&&(t="this field must be an url"),r.a.createElement("div",{className:"NewMovie__input-field"},r.a.createElement("input",{className:g()("NewMovie__input",{"NewMovie__input--invalid":"invalid"===n||"empty"===n}),type:"text",name:a,placeholder:a,value:i,onChange:l,onBlur:o}),r.a.createElement("p",{className:"NewMovie__error"},t))},w=(a(20),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleError:"",imgUrlError:"",imdbUrlError:"",imdbIdError:""},e.handleSubmit=function(t){t.preventDefault();var a=e.props.onAdd,i=e.state;a({title:i.title,description:i.description,imgUrl:i.imgUrl,imdbUrl:i.imdbUrl,imdbId:i.imdbId}),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",titleError:"",imgUrlError:"",imdbUrlError:"",imdbIdError:""})},e.validateInput=function(t){var a=t.target,i=a.name,r=a.value;if(r.trim()){"imgUrl"!==i&&"imdbUrl"!==i||r.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/)?e.setState(Object(p.a)({},"".concat(i,"Error"),"valid")):e.setState(Object(p.a)({},"".concat(i,"Error"),"invalid"))}else e.setState(Object(p.a)({},"".concat(i,"Error"),"empty"))},e.handleChange=function(t){var a,i=t.target,r=i.name,n=i.value;e.setState((a={},Object(p.a)(a,r,n),Object(p.a)(a,"".concat(r,"Error"),"valid"),a))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl,l=e.imdbId,o=e.titleError,m=e.imgUrlError,s=e.imdbUrlError,c=e.imdbIdError,d="valid"!==o||!t||"valid"!==m||!i||"valid"!==s||!n||"valid"!==c||!l;return r.a.createElement("form",{className:"NewMovie",name:"newMovie",onSubmit:this.handleSubmit},r.a.createElement(b,{inputName:"title",value:t,onChange:this.handleChange,onBlur:this.validateInput,error:o}),r.a.createElement("input",{className:"NewMovie__input",type:"text",name:"description",placeholder:"description",value:a,onChange:this.handleChange}),r.a.createElement(b,{inputName:"imgUrl",value:i,onChange:this.handleChange,onBlur:this.validateInput,error:m}),r.a.createElement(b,{inputName:"imdbUrl",value:n,onChange:this.handleChange,onBlur:this.validateInput,error:s}),r.a.createElement(b,{inputName:"imdbId",value:l,onChange:this.handleChange,onBlur:this.validateInput,error:c}),r.a.createElement("button",{className:"NewMovie__submit",type:"submit",disabled:d},"Add"))}}]),a}(i.Component)),E=a(9),f=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={movies:E},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(o.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(h,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(w,{onAdd:this.addMovie})))}}]),a}(i.Component);l.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f6b1b21d.chunk.js.map