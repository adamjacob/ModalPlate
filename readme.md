ModalPlate
=========
You define a new modal by extending the ModalPlate object, similar syntax to backbone.js.  ModalPlate comes with some basic CSS to get you started. *ModalPlate requires underscores.js.*

> [v1.0]()

### Getting Started
- Download Zip
- Include, ModalPlate.js, example/example.css, and Underscores.js into your project
- Create a new ModalPlate instance, see examples below.
- Trigger the open method on your new instance. `MyModal.open()`

### Examples

```javascript
// Basic Example
var message = ModalPlate.extend({
  message: "Your message here",
});

// Open the Modal
message.open();
```

```javascript
// Advanced Example
var confirm = ModalPlate.extend({
  title: "Deleting Photo",
  message: "Are you sure you would like to delete this photo?",
  buttons: {
    "yes":"Yes",
    "no":"No"
  },
  events: {
    yes: function(){
      // Delete photo...
      this.close();
    },
    no: function (){
      this.close();
    }
  }
});

// Open it
confirm.open();
```

### Events
`open` Triggered at the end of the open method.

`close` Triggered at the end of the close method.

`Your Button` Bound on create, triggered when button is clicked. *See "ModalPlate Object Explained" below*


### TODO
- Implement Animations (open/close)

### ModalPlate Object Explained

```javascript

var ModalPlate = {
  
  tagName: 'div',
  // Tag name that the modal will be wrapped in
  
  className: 'popup',
  // Class name that the modal container will get applied to it
  
  markup: {},
  // Contains basic markup template, see source for more info

  open: function(){},
  // Fires the render function below if needed, bindes all events, an adds
  // modal to the DOM, triggers off open event.

  render: function(){},
  // Renders the modal, you will typically not call this directly...
  
  close: function(){},
  // Removes the modal from the DOM using the destroy method below an triggers
  // the close event.

  destroy: function(){},
  // Removes modal from DOM, you will typically not call this directly...

  events: {},
  // Format: "name": function(){}
  // Events to be bound to corresponding buttons, as well as open, and
  // close events.

  buttons: {},
  // Format: "eventName":"buttonTitle"
  // Buttons to be rendered within the modal, as well as their event name,
  // view markup.button for template info.

  title: 'Notice',
  // Modal title
  
  message: '',
  // Modal message
  
  el:'',
  // The object where the modal is rendered and stored...
  
  cover: true,
  // True/False, if true, the open function will render a "cover" object
  // (markup.cover) behind the modal...

  extend: function(){}
  // Helper function, creates a new instance of ModalPlate...

};

```
