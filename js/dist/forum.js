module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_common__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/common/compat.js":
/*!******************************!*\
  !*** ./src/common/compat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_sortTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/sortTags */ "./src/common/utils/sortTags.js");
/* harmony import */ var _models_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Tag */ "./src/common/models/Tag.js");
/* harmony import */ var _helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");
/* harmony import */ var _helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _helpers_tagLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/tagLabel */ "./src/common/helpers/tagLabel.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  'tags/utils/sortTags': _utils_sortTags__WEBPACK_IMPORTED_MODULE_0__["default"],
  'tags/models/Tag': _models_Tag__WEBPACK_IMPORTED_MODULE_1__["default"],
  'tags/helpers/tagsLabel': _helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__["default"],
  'tags/helpers/tagIcon': _helpers_tagIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
  'tags/helpers/tagLabel': _helpers_tagLabel__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/common/helpers/tagIcon.js":
/*!***************************************!*\
  !*** ./src/common/helpers/tagIcon.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagIcon; });
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/classList */ "flarum/utils/classList");
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_classList__WEBPACK_IMPORTED_MODULE_0__);

function tagIcon(tag, attrs, settings) {
  if (attrs === void 0) {
    attrs = {};
  }

  if (settings === void 0) {
    settings = {};
  }

  var hasIcon = tag && tag.icon();
  var _settings = settings,
      _settings$useColor = _settings.useColor,
      useColor = _settings$useColor === void 0 ? true : _settings$useColor;
  attrs.className = flarum_utils_classList__WEBPACK_IMPORTED_MODULE_0___default()([attrs.className, 'icon', hasIcon ? tag.icon() : 'TagIcon']);

  if (tag) {
    attrs.style = attrs.style || {};

    if (hasIcon) {
      attrs.style.color = useColor ? tag.color() : '';
    } else {
      attrs.style.backgroundColor = tag.color();
    }
  } else {
    attrs.className += ' untagged';
  }

  return hasIcon ? m("i", attrs) : m("span", attrs);
}

/***/ }),

/***/ "./src/common/helpers/tagLabel.js":
/*!****************************************!*\
  !*** ./src/common/helpers/tagLabel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagLabel; });
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/extract */ "flarum/utils/extract");
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tagIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagIcon */ "./src/common/helpers/tagIcon.js");


function tagLabel(tag, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  attrs.style = attrs.style || {};
  attrs.className = 'TagLabel ' + (attrs.className || '');
  var link = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  var tagText = tag ? tag.name() : app.translator.trans('flarum-tags.lib.deleted_tag_text');

  if (tag) {
    var color = tag.color();

    if (color) {
      attrs.style.backgroundColor = attrs.style.color = color;
      attrs.className += ' colored';
    }

    if (link) {
      attrs.title = tag.description() || '';
      attrs.href = app.route('tag', {
        tags: tag.slug()
      });
      attrs.config = m.route;
    }
  } else {
    attrs.className += ' untagged';
  }

  return m(link ? 'a' : 'span', attrs, m("span", {
    className: "TagLabel-text"
  }, tag && tag.icon() && Object(_tagIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(tag, {}, {
    useColor: false
  }), " ", tagText));
}

/***/ }),

/***/ "./src/common/helpers/tagsLabel.js":
/*!*****************************************!*\
  !*** ./src/common/helpers/tagsLabel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tagsLabel; });
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/utils/extract */ "flarum/utils/extract");
/* harmony import */ var flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tagLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _utils_sortTags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sortTags */ "./src/common/utils/sortTags.js");



function tagsLabel(tags, attrs) {
  if (attrs === void 0) {
    attrs = {};
  }

  var children = [];
  var link = flarum_utils_extract__WEBPACK_IMPORTED_MODULE_0___default()(attrs, 'link');
  attrs.className = 'TagsLabel ' + (attrs.className || '');

  if (tags) {
    Object(_utils_sortTags__WEBPACK_IMPORTED_MODULE_2__["default"])(tags).forEach(function (tag) {
      if (tag || tags.length === 1) {
        children.push(Object(_tagLabel__WEBPACK_IMPORTED_MODULE_1__["default"])(tag, {
          link: link
        }));
      }
    });
  } else {
    children.push(Object(_tagLabel__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  return m("span", attrs, children);
}

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/models/Tag.js":
/*!**********************************!*\
  !*** ./src/common/models/Tag.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tag; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/computed */ "flarum/utils/computed");
/* harmony import */ var flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3__);





var Tag =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Tag, _mixin);

  function Tag() {
    return _mixin.apply(this, arguments) || this;
  }

  return Tag;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('name'),
  slug: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('slug'),
  description: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('description'),
  color: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('color'),
  backgroundUrl: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('backgroundUrl'),
  backgroundMode: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('backgroundMode'),
  icon: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('icon'),
  position: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('position'),
  parent: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('parent'),
  children: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('children'),
  defaultSort: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('defaultSort'),
  isChild: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isChild'),
  isHidden: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isHidden'),
  discussionCount: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('discussionCount'),
  lastPostedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('lastPostedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.transformDate),
  lastPostedDiscussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasOne('lastPostedDiscussion'),
  isRestricted: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('isRestricted'),
  canStartDiscussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canStartDiscussion'),
  canAddToDiscussion: flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canAddToDiscussion'),
  isPrimary: flarum_utils_computed__WEBPACK_IMPORTED_MODULE_3___default()('position', 'parent', function (position, parent) {
    return position !== null && parent === false;
  })
}));



/***/ }),

/***/ "./src/common/utils/sortTags.js":
/*!**************************************!*\
  !*** ./src/common/utils/sortTags.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortTags; });
function sortTags(tags) {
  return tags.slice(0).sort(function (a, b) {
    var aPos = a.position();
    var bPos = b.position(); // If they're both secondary tags, sort them by their discussions count,
    // descending.

    if (aPos === null && bPos === null) return b.discussionCount() - a.discussionCount(); // If just one is a secondary tag, then the primary tag should
    // come first.

    if (bPos === null) return -1;
    if (aPos === null) return 1; // If we've made it this far, we know they're both primary tags. So we'll
    // need to see if they have parents.

    var aParent = a.parent();
    var bParent = b.parent(); // If they both have the same parent, then their positions are local,
    // so we can compare them directly.

    if (aParent === bParent) return aPos - bPos; // If they are both child tags, then we will compare the positions of their
    // parents.
    else if (aParent && bParent) return aParent.position() - bParent.position(); // If we are comparing a child tag with its parent, then we let the parent
      // come first. If we are comparing an unrelated parent/child, then we
      // compare both of the parents.
      else if (aParent) return aParent === b ? 1 : aParent.position() - bPos;else if (bParent) return bParent === a ? -1 : aPos - bParent.position();
    return 0;
  });
}

/***/ }),

/***/ "./src/forum/addTagComposer.js":
/*!*************************************!*\
  !*** ./src/forum/addTagComposer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TagDiscussionModal */ "./src/forum/components/TagDiscussionModal.js");
/* harmony import */ var _common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'newDiscussionAction', function (promise) {
    var tag = app.store.getBy('tags', 'slug', this.params().tags);

    if (tag) {
      var parent = tag.parent();
      var tags = parent ? [parent, tag] : [tag];
      promise.then(function (component) {
        return component.tags = tags;
      });
    }
  }); // Add tag-selection abilities to the discussion composer.

  flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.tags = [];

  flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.chooseTags = function () {
    var _this = this;

    app.modal.show(new _components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_3__["default"]({
      selectedTags: this.tags.slice(0),
      onsubmit: function onsubmit(tags) {
        _this.tags = tags;

        _this.$('textarea').focus();
      }
    }));
  }; // Add a tag-selection menu to the discussion composer's header, after the
  // title.


  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'headerItems', function (items) {
    items.add('tags', m("a", {
      className: "DiscussionComposer-changeTags",
      onclick: this.chooseTags.bind(this)
    }, this.tags.length ? Object(_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_4__["default"])(this.tags) : m("span", {
      className: "TagLabel untagged"
    }, app.translator.trans('flarum-tags.forum.composer_discussion.choose_tags_link'))), 10);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'onsubmit', function (original) {
    var _this2 = this;

    var chosenTags = this.tags;
    var chosenPrimaryTags = chosenTags.filter(function (tag) {
      return tag.position() !== null && !tag.isChild();
    });
    var chosenSecondaryTags = chosenTags.filter(function (tag) {
      return tag.position() === null;
    });

    if (!chosenTags.length || chosenPrimaryTags.length < app.forum.attribute('minPrimaryTags') || chosenSecondaryTags.length < app.forum.attribute('minSecondaryTags')) {
      app.modal.show(new _components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_3__["default"]({
        selectedTags: chosenTags,
        onsubmit: function onsubmit(tags) {
          _this2.tags = tags;
          original();
        }
      }));
    } else {
      original();
    }
  }); // Add the selected tags as data to submit to the server.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'data', function (data) {
    data.relationships = data.relationships || {};
    data.relationships.tags = this.tags;
  });
});

/***/ }),

/***/ "./src/forum/addTagControl.js":
/*!************************************!*\
  !*** ./src/forum/addTagControl.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TagDiscussionModal */ "./src/forum/components/TagDiscussionModal.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add a control allowing the discussion to be moved to another category.
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_1___default.a, 'moderationControls', function (items, discussion) {
    if (discussion.canTag()) {
      items.add('tags', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        children: app.translator.trans('flarum-tags.forum.discussion_controls.edit_tags_button'),
        icon: 'fas fa-tag',
        onclick: function onclick() {
          return app.modal.show(new _components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_3__["default"]({
            discussion: discussion
          }));
        }
      }));
    }
  });
});

/***/ }),

/***/ "./src/forum/addTagFilter.js":
/*!***********************************!*\
  !*** ./src/forum/addTagFilter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionList */ "flarum/components/DiscussionList");
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_TagHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TagHero */ "./src/forum/components/TagHero.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.currentActiveTag = null;

  flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.currentTag = function () {
    var _this = this;

    if (this.currentActiveTag) {
      return this.currentActiveTag;
    }

    var slug = this.params().tags;
    var tag = null;

    if (slug) {
      tag = app.store.getBy('tags', 'slug', slug);
    }

    if (slug && (!tag || !tag.children())) {
      app.store.find('tags', slug, {
        include: 'children'
      }).then(function () {
        _this.currentActiveTag = app.store.getBy('tags', 'slug', slug);
        m.redraw();
      });
    }

    if (tag) {
      this.currentActiveTag = tag;
    }
  }; // If currently viewing a tag, insert a tag hero at the top of the view.


  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["override"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'hero', function (original) {
    var tag = this.currentTag();
    if (tag) return _components_TagHero__WEBPACK_IMPORTED_MODULE_3__["default"].component({
      tag: tag
    });
    return original();
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'view', function (vdom) {
    var tag = this.currentTag();
    if (tag) vdom.attrs.className += ' IndexPage--tag' + tag.id();
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'config', function () {
    var tag = this.currentTag();

    if (tag) {
      app.setTitle(tag.name());
    }
  }); // If currently viewing a tag, restyle the 'new discussion' button to use
  // the tag's color, and disable if the user isn't allowed to edit.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    var tag = this.currentTag();

    if (tag) {
      var color = tag.color();
      var canStartDiscussion = tag.canStartDiscussion();

      if (color) {
        items.get('newDiscussion').props.style = {
          backgroundColor: color
        };
      }

      items.get('newDiscussion').props.disabled = !canStartDiscussion;
      items.get('newDiscussion').props.children = app.translator.trans(canStartDiscussion ? 'core.forum.index.start_discussion_button' : 'core.forum.index.cannot_start_discussion_button');
    }
  }); // Add a parameter for the IndexPage to pass on to the DiscussionList that
  // will let us filter discussions by tag.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'params', function (params) {
    params.tags = m.route.param('tags');
  }); // Translate that parameter into a gambit appended to the search query.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'requestParams', function (params) {
    params.include.push('tags');

    if (this.props.params.tags) {
      params.filter.q = (params.filter.q || '') + ' tag:' + this.props.params.tags;
    }
  });
});

/***/ }),

/***/ "./src/forum/addTagLabels.js":
/*!***********************************!*\
  !*** ./src/forum/addTagLabels.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionHero */ "flarum/components/DiscussionHero");
/* harmony import */ var flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/utils/sortTags */ "./src/common/utils/sortTags.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add tag labels to each discussion in the discussion list.
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'infoItems', function (items) {
    var tags = this.props.discussion.tags();

    if (tags && tags.length) {
      items.add('tags', Object(_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_4__["default"])(tags), 10);
    }
  }); // Include a discussion's tags when fetching it.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'params', function (params) {
    params.include.push('tags');
  }); // Restyle a discussion's hero to use its first tag's color.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'view', function (view) {
    var tags = Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_5__["default"])(this.props.discussion.tags());

    if (tags && tags.length) {
      var color = tags[0].color();

      if (color) {
        view.attrs.style = {
          backgroundColor: color
        };
        view.attrs.className += ' DiscussionHero--colored';
      }
    }
  }); // Add a list of a discussion's tags to the discussion hero, displayed
  // before the title. Put the title on its own line.

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'items', function (items) {
    var tags = this.props.discussion.tags();

    if (tags && tags.length) {
      items.add('tags', Object(_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_4__["default"])(tags, {
        link: true
      }), 5);
    }
  });
});

/***/ }),

/***/ "./src/forum/addTagList.js":
/*!*********************************!*\
  !*** ./src/forum/addTagList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Separator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Separator */ "flarum/components/Separator");
/* harmony import */ var flarum_components_Separator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Separator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_TagLinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TagLinkButton */ "./src/forum/components/TagLinkButton.js");
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TagsPage */ "./src/forum/components/TagsPage.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/utils/sortTags */ "./src/common/utils/sortTags.js");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Add a link to the tags page, as well as a list of all the tags,
  // to the index page's sidebar.
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    items.add('tags', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      icon: 'fas fa-th-large',
      children: app.translator.trans('flarum-tags.forum.index.tags_link'),
      href: app.route('tags')
    }), -10);
    if (app.current instanceof _components_TagsPage__WEBPACK_IMPORTED_MODULE_5__["default"]) return;
    items.add('separator', flarum_components_Separator__WEBPACK_IMPORTED_MODULE_2___default.a.component(), -12);
    var params = this.stickyParams();
    var tags = app.store.all('tags');
    var currentTag = this.currentTag();

    var addTag = function addTag(tag) {
      var active = currentTag === tag;

      if (!active && currentTag) {
        active = currentTag.parent() === tag;
      }

      items.add('tag' + tag.id(), _components_TagLinkButton__WEBPACK_IMPORTED_MODULE_4__["default"].component({
        tag: tag,
        params: params,
        active: active
      }), -14);
    };

    Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__["default"])(tags).filter(function (tag) {
      return tag.position() !== null && (!tag.isChild() || currentTag && (tag.parent() === currentTag || tag.parent() === currentTag.parent()));
    }).forEach(addTag);
    var more = tags.filter(function (tag) {
      return tag.position() === null;
    }).sort(function (a, b) {
      return b.discussionCount() - a.discussionCount();
    });
    more.splice(0, 3).forEach(addTag);

    if (more.length) {
      items.add('moreTags', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        children: app.translator.trans('flarum-tags.forum.index.more_link'),
        href: app.route('tags')
      }), -16);
    }
  });
});

/***/ }),

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compat */ "./src/common/compat.js");
/* harmony import */ var _addTagFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTagFilter */ "./src/forum/addTagFilter.js");
/* harmony import */ var _addTagControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTagControl */ "./src/forum/addTagControl.js");
/* harmony import */ var _components_TagHero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TagHero */ "./src/forum/components/TagHero.js");
/* harmony import */ var _components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TagDiscussionModal */ "./src/forum/components/TagDiscussionModal.js");
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TagsPage */ "./src/forum/components/TagsPage.js");
/* harmony import */ var _components_DiscussionTaggedPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/DiscussionTaggedPost */ "./src/forum/components/DiscussionTaggedPost.js");
/* harmony import */ var _components_TagLinkButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TagLinkButton */ "./src/forum/components/TagLinkButton.js");
/* harmony import */ var _addTagList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addTagList */ "./src/forum/addTagList.js");
/* harmony import */ var _addTagLabels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addTagLabels */ "./src/forum/addTagLabels.js");
/* harmony import */ var _addTagComposer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addTagComposer */ "./src/forum/addTagComposer.js");












/* harmony default export */ __webpack_exports__["default"] = (Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_common_compat__WEBPACK_IMPORTED_MODULE_1__["default"], {
  'tags/addTagFilter': _addTagFilter__WEBPACK_IMPORTED_MODULE_2__["default"],
  'tags/addTagControl': _addTagControl__WEBPACK_IMPORTED_MODULE_3__["default"],
  'tags/components/TagHero': _components_TagHero__WEBPACK_IMPORTED_MODULE_4__["default"],
  'tags/components/TagDiscussionModal': _components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_5__["default"],
  'tags/components/TagsPage': _components_TagsPage__WEBPACK_IMPORTED_MODULE_6__["default"],
  'tags/components/DiscussionTaggedPost': _components_DiscussionTaggedPost__WEBPACK_IMPORTED_MODULE_7__["default"],
  'tags/components/TagLinkButton': _components_TagLinkButton__WEBPACK_IMPORTED_MODULE_8__["default"],
  'tags/addTagList': _addTagList__WEBPACK_IMPORTED_MODULE_9__["default"],
  'tags/addTagLabels': _addTagLabels__WEBPACK_IMPORTED_MODULE_10__["default"],
  'tags/addTagComposer': _addTagComposer__WEBPACK_IMPORTED_MODULE_11__["default"]
}));

/***/ }),

/***/ "./src/forum/components/DiscussionTaggedPost.js":
/*!******************************************************!*\
  !*** ./src/forum/components/DiscussionTaggedPost.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DiscussionTaggedPost; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/EventPost */ "flarum/components/EventPost");
/* harmony import */ var flarum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_EventPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helpers/tagsLabel */ "./src/common/helpers/tagsLabel.js");




var DiscussionTaggedPost =
/*#__PURE__*/
function (_EventPost) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DiscussionTaggedPost, _EventPost);

  function DiscussionTaggedPost() {
    return _EventPost.apply(this, arguments) || this;
  }

  DiscussionTaggedPost.initProps = function initProps(props) {
    _EventPost.initProps.call(this, props);

    var oldTags = props.post.content()[0];
    var newTags = props.post.content()[1];

    function diffTags(tags1, tags2) {
      return tags1.filter(function (tag) {
        return tags2.indexOf(tag) === -1;
      }).map(function (id) {
        return app.store.getById('tags', id);
      });
    }

    props.tagsAdded = diffTags(newTags, oldTags);
    props.tagsRemoved = diffTags(oldTags, newTags);
  };

  var _proto = DiscussionTaggedPost.prototype;

  _proto.icon = function icon() {
    return 'fas fa-tag';
  };

  _proto.descriptionKey = function descriptionKey() {
    if (this.props.tagsAdded.length) {
      if (this.props.tagsRemoved.length) {
        return 'flarum-tags.forum.post_stream.added_and_removed_tags_text';
      }

      return 'flarum-tags.forum.post_stream.added_tags_text';
    }

    return 'flarum-tags.forum.post_stream.removed_tags_text';
  };

  _proto.descriptionData = function descriptionData() {
    var data = {};

    if (this.props.tagsAdded.length) {
      data.tagsAdded = app.translator.transChoice('flarum-tags.forum.post_stream.tags_text', this.props.tagsAdded.length, {
        tags: Object(_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.tagsAdded, {
          link: true
        }),
        count: this.props.tagsAdded.length
      });
    }

    if (this.props.tagsRemoved.length) {
      data.tagsRemoved = app.translator.transChoice('flarum-tags.forum.post_stream.tags_text', this.props.tagsRemoved.length, {
        tags: Object(_common_helpers_tagsLabel__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.tagsRemoved, {
          link: true
        }),
        count: this.props.tagsRemoved.length
      });
    }

    return data;
  };

  return DiscussionTaggedPost;
}(flarum_components_EventPost__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/TagDiscussionModal.js":
/*!****************************************************!*\
  !*** ./src/forum/components/TagDiscussionModal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagDiscussionModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/highlight */ "flarum/helpers/highlight");
/* harmony import */ var flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/classList */ "flarum/utils/classList");
/* harmony import */ var flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/utils/extractText */ "flarum/utils/extractText");
/* harmony import */ var flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/utils/KeyboardNavigatable */ "flarum/utils/KeyboardNavigatable");
/* harmony import */ var flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/utils/sortTags */ "./src/common/utils/sortTags.js");












var TagDiscussionModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagDiscussionModal, _Modal);

  function TagDiscussionModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = TagDiscussionModal.prototype;

  _proto.init = function init() {
    var _this = this;

    _Modal.prototype.init.call(this);

    this.tags = app.store.all('tags');

    if (this.props.discussion) {
      this.tags = this.tags.filter(function (tag) {
        return tag.canAddToDiscussion() || _this.props.discussion.tags().indexOf(tag) !== -1;
      });
    } else {
      this.tags = this.tags.filter(function (tag) {
        return tag.canStartDiscussion();
      });
    }

    this.tags = Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_10__["default"])(this.tags);
    this.selected = [];
    this.filter = m.prop('');
    this.index = this.tags[0].id();
    this.focused = false;

    if (this.props.selectedTags) {
      this.props.selectedTags.map(this.addTag.bind(this));
    } else if (this.props.discussion) {
      this.props.discussion.tags().map(this.addTag.bind(this));
    }

    this.minPrimary = app.forum.attribute('minPrimaryTags');
    this.maxPrimary = app.forum.attribute('maxPrimaryTags');
    this.minSecondary = app.forum.attribute('minSecondaryTags');
    this.maxSecondary = app.forum.attribute('maxSecondaryTags');
    this.navigator = new flarum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_7___default.a();
    this.navigator.onUp(function () {
      return _this.setIndex(_this.getCurrentNumericIndex() - 1, true);
    }).onDown(function () {
      return _this.setIndex(_this.getCurrentNumericIndex() + 1, true);
    }).onSelect(this.select.bind(this)).onRemove(function () {
      return _this.selected.splice(_this.selected.length - 1, 1);
    });
  };

  _proto.primaryCount = function primaryCount() {
    return this.selected.filter(function (tag) {
      return tag.isPrimary();
    }).length;
  };

  _proto.secondaryCount = function secondaryCount() {
    return this.selected.filter(function (tag) {
      return !tag.isPrimary();
    }).length;
  }
  /**
   * Add the given tag to the list of selected tags.
   *
   * @param {Tag} tag
   */
  ;

  _proto.addTag = function addTag(tag) {
    if (!tag.canStartDiscussion()) return; // If this tag has a parent, we'll also need to add the parent tag to the
    // selected list if it's not already in there.

    var parent = tag.parent();

    if (parent) {
      var index = this.selected.indexOf(parent);

      if (index === -1) {
        this.selected.push(parent);
      }
    }

    this.selected.push(tag);
  }
  /**
   * Remove the given tag from the list of selected tags.
   *
   * @param {Tag} tag
   */
  ;

  _proto.removeTag = function removeTag(tag) {
    var index = this.selected.indexOf(tag);

    if (index !== -1) {
      this.selected.splice(index, 1); // Look through the list of selected tags for any tags which have the tag
      // we just removed as their parent. We'll need to remove them too.

      this.selected.filter(function (selected) {
        return selected.parent() === tag;
      }).forEach(this.removeTag.bind(this));
    }
  };

  _proto.className = function className() {
    return 'TagDiscussionModal';
  };

  _proto.title = function title() {
    return this.props.discussion ? app.translator.trans('flarum-tags.forum.choose_tags.edit_title', {
      title: m("em", null, this.props.discussion.title())
    }) : app.translator.trans('flarum-tags.forum.choose_tags.title');
  };

  _proto.getInstruction = function getInstruction(primaryCount, secondaryCount) {
    if (primaryCount < this.minPrimary) {
      var remaining = this.minPrimary - primaryCount;
      return app.translator.transChoice('flarum-tags.forum.choose_tags.choose_primary_placeholder', remaining, {
        count: remaining
      });
    } else if (secondaryCount < this.minSecondary) {
      var _remaining = this.minSecondary - secondaryCount;

      return app.translator.transChoice('flarum-tags.forum.choose_tags.choose_secondary_placeholder', _remaining, {
        count: _remaining
      });
    }

    return '';
  };

  _proto.content = function content() {
    var _this2 = this;

    var tags = this.tags;
    var filter = this.filter().toLowerCase();
    var primaryCount = this.primaryCount();
    var secondaryCount = this.secondaryCount(); // Filter out all child tags whose parents have not been selected. This
    // makes it impossible to select a child if its parent hasn't been selected.

    tags = tags.filter(function (tag) {
      var parent = tag.parent();
      return parent === false || _this2.selected.indexOf(parent) !== -1;
    }); // If the number of selected primary/secondary tags is at the maximum, then
    // we'll filter out all other tags of that type.

    if (primaryCount >= this.maxPrimary) {
      tags = tags.filter(function (tag) {
        return !tag.isPrimary() || _this2.selected.indexOf(tag) !== -1;
      });
    }

    if (secondaryCount >= this.maxSecondary) {
      tags = tags.filter(function (tag) {
        return tag.isPrimary() || _this2.selected.indexOf(tag) !== -1;
      });
    } // If the user has entered text in the filter input, then filter by tags
    // whose name matches what they've entered.


    if (filter) {
      tags = tags.filter(function (tag) {
        return tag.name().substr(0, filter.length).toLowerCase() === filter;
      });
    }

    if (tags.indexOf(this.index) === -1) this.index = tags[0];
    var inputWidth = Math.max(flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(this.getInstruction(primaryCount, secondaryCount)).length, this.filter().length);
    return [m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "TagDiscussionModal-form"
    }, m("div", {
      className: "TagDiscussionModal-form-input"
    }, m("div", {
      className: 'TagsInput FormControl ' + (this.focused ? 'focus' : ''),
      onclick: function onclick() {
        return _this2.$('.TagsInput input').focus();
      }
    }, m("span", {
      className: "TagsInput-selected"
    }, this.selected.map(function (tag) {
      return m("span", {
        className: "TagsInput-tag",
        onclick: function onclick() {
          _this2.removeTag(tag);

          _this2.onready();
        }
      }, Object(_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_8__["default"])(tag));
    })), m("input", {
      className: "FormControl",
      placeholder: flarum_utils_extractText__WEBPACK_IMPORTED_MODULE_6___default()(this.getInstruction(primaryCount, secondaryCount)),
      value: this.filter(),
      style: {
        width: inputWidth + 'ch'
      },
      oninput: m.withAttr('value', this.filter),
      onkeydown: this.navigator.navigate.bind(this.navigator),
      onfocus: function onfocus() {
        return _this2.focused = true;
      },
      onblur: function onblur() {
        return _this2.focused = false;
      }
    }))), m("div", {
      className: "TagDiscussionModal-form-submit App-primaryControl"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      disabled: primaryCount < this.minPrimary || secondaryCount < this.minSecondary,
      icon: 'fas fa-check',
      children: app.translator.trans('flarum-tags.forum.choose_tags.submit_button')
    })))), m("div", {
      className: "Modal-footer"
    }, m("ul", {
      className: "TagDiscussionModal-list SelectTagList"
    }, tags.filter(function (tag) {
      return filter || !tag.parent() || _this2.selected.indexOf(tag.parent()) !== -1;
    }).map(function (tag) {
      return m("li", {
        "data-index": tag.id(),
        className: flarum_utils_classList__WEBPACK_IMPORTED_MODULE_5___default()({
          pinned: tag.position() !== null,
          child: !!tag.parent(),
          colored: !!tag.color(),
          selected: _this2.selected.indexOf(tag) !== -1,
          active: _this2.index === tag
        }),
        style: {
          color: tag.color()
        },
        onmouseover: function onmouseover() {
          return _this2.index = tag;
        },
        onclick: _this2.toggleTag.bind(_this2, tag)
      }, Object(_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_9__["default"])(tag), m("span", {
        className: "SelectTagListItem-name"
      }, flarum_helpers_highlight__WEBPACK_IMPORTED_MODULE_4___default()(tag.name(), filter)), tag.description() ? m("span", {
        className: "SelectTagListItem-description"
      }, tag.description()) : '');
    })))];
  };

  _proto.toggleTag = function toggleTag(tag) {
    var index = this.selected.indexOf(tag);

    if (index !== -1) {
      this.removeTag(tag);
    } else {
      this.addTag(tag);
    }

    if (this.filter()) {
      this.filter('');
      this.index = this.tags[0];
    }

    this.onready();
  };

  _proto.select = function select(e) {
    // Ctrl + Enter submits the selection, just Enter completes the current entry
    if (e.metaKey || e.ctrlKey || this.selected.indexOf(this.index) !== -1) {
      if (this.selected.length) {
        this.$('form').submit();
      }
    } else {
      this.getItem(this.index)[0].dispatchEvent(new Event('click'));
    }
  };

  _proto.selectableItems = function selectableItems() {
    return this.$('.TagDiscussionModal-list > li');
  };

  _proto.getCurrentNumericIndex = function getCurrentNumericIndex() {
    return this.selectableItems().index(this.getItem(this.index));
  };

  _proto.getItem = function getItem(index) {
    return this.selectableItems().filter("[data-index=\"" + index.id() + "\"]");
  };

  _proto.setIndex = function setIndex(index, scrollToItem) {
    var $items = this.selectableItems();
    var $dropdown = $items.parent();

    if (index < 0) {
      index = $items.length - 1;
    } else if (index >= $items.length) {
      index = 0;
    }

    var $item = $items.eq(index);
    this.index = app.store.getById('tags', $item.attr('data-index'));
    m.redraw();

    if (scrollToItem) {
      var dropdownScroll = $dropdown.scrollTop();
      var dropdownTop = $dropdown.offset().top;
      var dropdownBottom = dropdownTop + $dropdown.outerHeight();
      var itemTop = $item.offset().top;
      var itemBottom = itemTop + $item.outerHeight();
      var scrollTop;

      if (itemTop < dropdownTop) {
        scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);
      } else if (itemBottom > dropdownBottom) {
        scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);
      }

      if (typeof scrollTop !== 'undefined') {
        $dropdown.stop(true).animate({
          scrollTop: scrollTop
        }, 100);
      }
    }
  };

  _proto.onsubmit = function onsubmit(e) {
    e.preventDefault();
    var discussion = this.props.discussion;
    var tags = this.selected;

    if (discussion) {
      discussion.save({
        relationships: {
          tags: tags
        }
      }).then(function () {
        if (app.current instanceof flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_2___default.a) {
          app.current.stream.update();
        }

        m.redraw();
      });
    }

    if (this.props.onsubmit) this.props.onsubmit(tags);
    app.modal.close();
    m.redraw.strategy('none');
  };

  return TagDiscussionModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/TagHero.js":
/*!*****************************************!*\
  !*** ./src/forum/components/TagHero.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagHero; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");




var TagHero =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagHero, _Component);

  function TagHero() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TagHero.prototype;

  _proto.view = function view() {
    var tag = this.props.tag;
    var color = tag.color();
    return m("header", {
      className: 'Hero TagHero' + (color ? ' TagHero--colored' : ''),
      style: color ? {
        color: '#fff',
        backgroundColor: color
      } : ''
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "containerNarrow"
    }, m("h2", {
      className: "Hero-title"
    }, tag.icon() && Object(_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_2__["default"])(tag, {}, {
      useColor: false
    }), " ", tag.name()), m("div", {
      className: "Hero-subtitle"
    }, tag.description()))));
  };

  return TagHero;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/TagLinkButton.js":
/*!***********************************************!*\
  !*** ./src/forum/components/TagLinkButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagLinkButton; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helpers/tagIcon */ "./src/common/helpers/tagIcon.js");




var TagLinkButton =
/*#__PURE__*/
function (_LinkButton) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagLinkButton, _LinkButton);

  function TagLinkButton() {
    return _LinkButton.apply(this, arguments) || this;
  }

  var _proto = TagLinkButton.prototype;

  _proto.view = function view() {
    var tag = this.props.tag;
    var active = this.constructor.isActive(this.props);
    var description = tag && tag.description();
    return m("a", {
      className: 'TagLinkButton hasIcon ' + (tag.isChild() ? 'child' : ''),
      href: this.props.href,
      config: m.route,
      style: active && tag ? {
        color: tag.color()
      } : '',
      title: description || ''
    }, Object(_common_helpers_tagIcon__WEBPACK_IMPORTED_MODULE_2__["default"])(tag, {
      className: 'Button-icon'
    }), this.props.children);
  };

  TagLinkButton.initProps = function initProps(props) {
    var tag = props.tag;
    props.params.tags = tag ? tag.slug() : 'untagged';
    props.href = app.route('tag', props.params);
    props.children = tag ? tag.name() : app.translator.trans('flarum-tags.forum.index.untagged_link');
  };

  return TagLinkButton;
}(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/TagsPage.js":
/*!******************************************!*\
  !*** ./src/forum/components/TagsPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/helpers/tagLabel */ "./src/common/helpers/tagLabel.js");
/* harmony import */ var _common_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils/sortTags */ "./src/common/utils/sortTags.js");








var TagsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagsPage, _Page);

  function TagsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = TagsPage.prototype;

  _proto.init = function init() {
    var _this = this;

    _Page.prototype.init.call(this);

    this.tags = [];
    app.store.find('tags').then(function () {
      var tags = app.store.all('tags').filter(function (tag) {
        return !tag.parent();
      });
      _this.tags = Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__["default"])(tags);
      m.redraw();
    }); // this.tags = sortTags(app.store.all('tags').filter(tag => !tag.parent()));

    app.history.push('tags', app.translator.trans('flarum-tags.forum.header.back_to_tags_tooltip'));
  };

  _proto.view = function view() {
    var pinned = this.tags.filter(function (tag) {
      return tag.position() !== null;
    });
    var cloud = this.tags.filter(function (tag) {
      return tag.position() === null;
    });
    return m("div", {
      className: "TagsPage"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("nav", {
      className: "TagsPage-nav IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("div", {
      className: "TagsPage-content sideNavOffset"
    }, m("ul", {
      className: "TagTiles"
    }, pinned.map(function (tag) {
      var lastPostedDiscussion = tag.lastPostedDiscussion();
      var children = Object(_common_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__["default"])(app.store.all('tags').filter(function (child) {
        return child.parent() === tag;
      }));
      return m("li", {
        className: 'TagTile ' + (tag.color() ? 'colored' : ''),
        style: {
          backgroundColor: tag.color()
        }
      }, m("a", {
        className: "TagTile-info",
        href: app.route.tag(tag),
        config: m.route
      }, m("h3", {
        className: "TagTile-name"
      }, tag.name()), m("p", {
        className: "TagTile-description"
      }, tag.description()), children ? m("div", {
        className: "TagTile-children"
      }, children.map(function (child) {
        return [m("a", {
          href: app.route.tag(child),
          config: function config(element, isInitialized) {
            if (isInitialized) return;
            $(element).on('click', function (e) {
              return e.stopPropagation();
            });
            m.route.apply(this, arguments);
          }
        }, child.name()), ' '];
      })) : ''), lastPostedDiscussion ? m("a", {
        className: "TagTile-lastPostedDiscussion",
        href: app.route.discussion(lastPostedDiscussion, lastPostedDiscussion.lastPostNumber()),
        config: m.route
      }, m("span", {
        className: "TagTile-lastPostedDiscussion-title"
      }, lastPostedDiscussion.title()), flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(lastPostedDiscussion.lastPostedAt())) : m("span", {
        className: "TagTile-lastPostedDiscussion"
      }));
    })), cloud.length ? m("div", {
      className: "TagCloud"
    }, cloud.map(function (tag) {
      return [Object(_common_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_5__["default"])(tag, {
        link: true
      }), ' '];
    })) : '')));
  };

  _proto.config = function config() {
    var _Page$prototype$confi;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_Page$prototype$confi = _Page.prototype.config).call.apply(_Page$prototype$confi, [this].concat(args));

    app.setTitle(app.translator.trans('flarum-tags.forum.all_tags.meta_title_text'));
    app.setTitleCount(0);
  };

  return TagsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/Discussion */ "flarum/models/Discussion");
/* harmony import */ var flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_models_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/models/Tag */ "./src/common/models/Tag.js");
/* harmony import */ var _components_TagsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TagsPage */ "./src/forum/components/TagsPage.js");
/* harmony import */ var _components_DiscussionTaggedPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DiscussionTaggedPost */ "./src/forum/components/DiscussionTaggedPost.js");
/* harmony import */ var _addTagList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addTagList */ "./src/forum/addTagList.js");
/* harmony import */ var _addTagFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addTagFilter */ "./src/forum/addTagFilter.js");
/* harmony import */ var _addTagLabels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addTagLabels */ "./src/forum/addTagLabels.js");
/* harmony import */ var _addTagControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addTagControl */ "./src/forum/addTagControl.js");
/* harmony import */ var _addTagComposer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addTagComposer */ "./src/forum/addTagComposer.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.js");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/admin");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_13__);












app.initializers.add('flarum-tags', function (app) {
  app.routes.tags = {
    path: '/tags',
    component: _components_TagsPage__WEBPACK_IMPORTED_MODULE_5__["default"].component()
  };
  app.routes.tag = {
    path: '/t/:tags',
    component: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.component()
  };

  app.route.tag = function (tag) {
    return app.route('tag', {
      tags: tag.slug()
    });
  };

  app.postComponents.discussionTagged = _components_DiscussionTaggedPost__WEBPACK_IMPORTED_MODULE_6__["default"];
  app.store.models.tags = _common_models_Tag__WEBPACK_IMPORTED_MODULE_4__["default"];
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.tags = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.hasMany('tags');
  flarum_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.canTag = flarum_Model__WEBPACK_IMPORTED_MODULE_1___default.a.attribute('canTag');
  Object(_addTagList__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_addTagFilter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_addTagLabels__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_addTagControl__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_addTagComposer__WEBPACK_IMPORTED_MODULE_11__["default"])();
}); // Expose compat API




Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_13__["compat"], _compat__WEBPACK_IMPORTED_MODULE_12__["default"]);

/***/ }),

/***/ "@flarum/core/admin":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/DiscussionHero":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionHero']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionHero'];

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionList']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionList'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/EventPost":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/EventPost']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/EventPost'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/Separator":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/Separator']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Separator'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/highlight":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/highlight']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/highlight'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/models/Discussion":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['models/Discussion']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/Discussion'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/KeyboardNavigatable":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['utils/KeyboardNavigatable']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/KeyboardNavigatable'];

/***/ }),

/***/ "flarum/utils/classList":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/classList']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/classList'];

/***/ }),

/***/ "flarum/utils/computed":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/computed']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/computed'];

/***/ }),

/***/ "flarum/utils/extract":
/*!******************************************************!*\
  !*** external "flarum.core.compat['utils/extract']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extract'];

/***/ }),

/***/ "flarum/utils/extractText":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['utils/extractText']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/extractText'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map