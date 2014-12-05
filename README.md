# Wakanda SmartModel

[![MIT Licensed](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](#license)

*Wakanda® and 4D® are registered trademarks of 4D SAS in France and/or other countries. All other names mentioned may be trademarks or registered trademarks of their respective owners.*

## EXPERIMENTAL

This project is an attempt to get a smarter SSJS API to define[Wakanda](http://wakanda.org) Datastore Models

### Directions of this API:

* more jQuery/Angular like
* optimized for CommonJS modules
* lighter model files and faster to write
* intuitive and easy to understand
* provide almost all the Wakanda Model Designer automatic mechanisms
* even more Business Logic oriented

### Additional future goals

* add/retrieve semantic informations
* add/retrieve informations currently not accessible via the Model API (extraProperties, global access)

### Ultimate Goal

Propose it as a new default official API?
:-)

## Experimental Expected API

**Note that the API is not definitive**

### Mono-file model

```javascript

require('smartModel')
  .$model(model)

    .$class('Group') // collection name set to GroupCollection & scope to public

      // an attribute named 'ID' of type uuid is created by default as primary key
      .$attr('name') // default: storage / string
      .$attr('contacts', 'Contacts') // will create a relatedEntities attribute once Contacts is found

    .$class('Contact', 'Contacts', 'private') // custom collection name & scope private

      .$primary('email', 'string') // a custom primary key attribute is created
      .$attr('name') // default: storage / string
      .$attr('mobile', 'string', {pattern: PHONE_REGEX}) // apply a pattern for expected values
      // an attribute named 'group' (default name based on class name) as automatically been created by 
      // the contact relationship with kind relatedEntity and className Group
      .$attr('groupName', 'group.name') // 'group.name' include a '.' and start by an attribute name -> alias
 
```


### Multi-file model - 1 file per DataClass

#### Model.js
To load indivudual DataClasses
```javascript
require('smartModel').$model(model, [
    'Model/Group',
    'Model/Contact'
]);

```
Or, to load all DataClasses from a folder
```javascript
require('smartModel').$model(model, ['Model']);

```

#### Modules/Model/index.js
OPTIONNAL (Only to be able to automatically load all DataClasses of the folder)
```javascript
  require('smartModel').$classes(module); 
```

#### Modules/Model/Group.js

```javascript
  require('smartModel').$class(module, 'Group') // collection name set to GroupCollection & scope to public

      // an attribute named 'ID' of type uuid is created by default as primary key
      .$attr('name') // default: storage / string
      .$attr('contacts', 'Contacts') // will create a relatedEntities attribute once Contacts is found
```

#### Modules/Model/Contact.js

```javascript
  require('smartModel').$class(module, 'Contact', 'Contacts', 'private') // custom collection name & scope private

      .$primary('email', 'string') // a custom primary key attribute is created
      .$attr('name') // default: storage / string
      .$attr('mobile', 'string', {pattern: PHONE_REGEX}) // apply a pattern for expected values
      .$attr('group', 'Group') // relatedEntity explicitely created for better understanding
      .$attr('groupName', 'group.name') // 'group.name' include a '.' and start by an attribute name -> alias
 
```

### Multi-file model - Multifile DataClass 


#### Modules/Model/Group/index.js
```javascript
require('smodel').$class(module, 'Group') // collection name set to GroupCollection & scope to public
// thanks to module.id, attributes defined in modules from the same folder are assigned to the dataClass
```
#### Modules/Model/Group/name.js
```javascript
var NB_MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365.25;

// calculated attribute
require('smartModel').$attr(module, 'age', '@number', {
    get: function get(){
        return Math.floor((Date.now() - this.birthdate.getTime()) / NB_MS_IN_YEAR);
    },
    sort: function sort(order) {
        order = order || 'asc';
        order = order === 'asc' ? 'desc' : 'asc';
        return 'birthdate ' + order;
    }
}) 
```

## How to Contribute?

To succed, such project shouldn't/couldn't be a one man project, it clearly has to be community driven.

### Understanding the context

To get an overview of how we work with modules today for Wakanda Model, and to help you understand how the code of this project is structured, I invite you to read this [CommonJS in Model.js forum discussion](http://forum.wakanda.org/showthread.php?6980-CommonJS-using-export-a-mistake-for-use-in-Model.js)

### Model-Driven / Test-Driven Development

I'm not yet the best guy to follow this best practice but I'm really working on it and feel such project need it to enhance its chance to reach a good enough quality level. The Model is the core of your app, libraries impacting it should be the most reliable possible.

The proposed process of this project is to:
- first propose an API sample via an issue (for those cotributing at the API Design level)
- then, if we agree on it, eve for experimentation, we create a dedicated branch
- then we write matching unit tests including all the code samples from the proposal
- then we publish the API sample doc tagged as experimental + its unit tests
- then write the implementation of the feature
- then once stable, propose the feature for approval
- if approved, merge the feature in the main branch and tag a version
 
I don't care if you experiment things differently at home for this project, but pull resquests will only be accepted in this order

### Code Conventions

As for any Open Source project, try to respect the current code conventions for your pull-requests.
To prevent the project from some potential troll discussion, beware I will always be open for discussions on that topic by mail or in a potential dedicated issue, but non conforming pull-request will never accepted as is, convention migration if one comes, requires to be in dedicated pull-requests that don't add any feature or fix any bug.

### Current contributions status

Another Wakanda Team member has already done a fork and made more parts of the proposed API work, and then more unit tests pass. I hope he will be abble to shortly make a first pull-request ;-)

## License

*The MIT License*

Copyright (c) 2014 Alexandre Morgaut. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
