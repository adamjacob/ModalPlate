//	ModalPlate: Simple Modal Boxes :: https://github.com/adamjacob/ModalPlate
//	MIT license http://www.opensource.org/licenses/mit-license.php/
//	@author Adam Stanford :: www.adamstanford.net

var ModalPlate = {

	tagName: 'div',

	className: 'ModalPlate_Box',

	markup: {

		base:	'<h1><%=title%></h1>'+
					'<p><%=message%></p>'+
				'<% _.each(buttons,function(button){ %>'+
					'<%=button%>'+
				'<% }); %>',

		button_BaseClassName: '.button-',

		button: '<button class="button-<%=name%>"><%=label%></button>',

		cover: {

			tagName: 'div',

			className: 'alert-bg-cover'

	}

	},

	open: function(){

		if(!_.isElement(this.el)){

			// The not rendered yet...render it...
			this.render();

		}

		if( this.cover !== false){

			document.querySelector('body').appendChild(this.cover);

		}


		document.querySelector('body').appendChild(this.el);

		this.el.querySelectorAll('button')[0].focus();

		if(_.isFunction(this.events.open)){

			this.events.open();
		}

	},

	render: function(){

		var buttons = _.map(this.buttons, function(value, key){

		return _.template(this.markup.button, {'label':value, 'name':key});

		}, this);
	 
		if( this.cover !== false){

			this.cover = document.createElement(this.markup.cover.tagName);
			this.cover.className = this.markup.cover.className;

		}

		var values = _.extend(_.clone(this), {buttons:buttons});

		this.el = document.createElement(this.tagName);
		this.el.className = this.className;
		this.el.innerHTML = _.template(this.markup.base, values);

			_.each(this.events, function(value, key){

				var context = this;

				this.el.querySelector(this.markup.button_BaseClassName + key).onclick = function(){ value.call(context); };

		}, this);

	},

	close: function(){

		if(_.isFunction(this.events.close)){

			this.events.close();
		}

		this.destroy();

	},

	destroy: function(){

		if( this.cover !== false){

			document.querySelector('body').removeChild(this.cover);

		}

		document.querySelector('body').removeChild(this.el);

	},

	events: {

		okay: function(){

			this.close();

		}

	},

	buttons: {"okay":"Okay"},

	title: 'Notice',
	message: '',
	el:'',
	cover: true,

	extend: function(object){

		return _.extend(_.clone(this), object);

	}

};