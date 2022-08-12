// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"a8QCm":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "991da406db665bbf";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bkmZB":[function(require,module,exports) {
const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
//Event handler:
//Import things
const myUtility = require("./utilityFnc.js");
const Person = require("./PersonModel.js");
const UI = require("./uiActionHandler.js");
const PersonStore = require("./localStorageHandler.js");
const DataHandler = require("./dataHandler.js");
//show table
document.addEventListener("DOMContentLoaded", UI.displayPerson());
//Add input from form to table:
$("#userForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    myUtility.scrollTop();
    let fullName = $("#fullName").value;
    let age = $("#age").value;
    let email = $("#email").value;
    let gender = myUtility.getGender();
    let height = parseFloat($("#height").value).toFixed(2);
    let weight = parseFloat($("#weight").value).toFixed(1);
    let address = $("#address").value;
    if (UI.formValidate(fullName, age, email, height, weight, address)) {
        const newPerson = new Person(fullName, age, email, gender, height, weight, address);
        // Store instance to local store
        PersonStore.addPersonToLocal(newPerson);
        UI.showMsg("Successful, added new user to list!", "alert-success");
        // Add this instance to table;
        UI.addPersonToTable(newPerson);
        myUtility.clearInput();
    }
});
//Remove person from table and local Storage:
$("#output").addEventListener("click", (e)=>{
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure?")) {
            let personId = e.target.parentElement.parentElement.firstElementChild.innerText;
            personId = parseInt(personId);
            let personTr = e.target.parentElement.parentElement;
            // Remove from UI
            UI.removePerson(personTr);
            //Remove from local storage
            PersonStore.removePersonFromLocal(personId);
            UI.showMsg("Person removed!", "alert-success");
        }
    }
});
//Handle Edit button
// Show change form
$("#output").addEventListener("click", (e)=>{
    if (e.target.classList.contains("edit")) {
        let userId = e.target.parentElement.parentElement.children[0].innerText;
        userId = parseInt(userId);
        //Get all users from LocalStorage:
        let persons = PersonStore.getPersonsFromLocal();
        let personChosen = persons.filter((el)=>el.id === userId
        );
        // Get info person chosen from store
        personChosen = personChosen[0];
        //Show change form to HTML
        $("#changeForm").innerHTML = `
      <h6>You're edit user width id: <span class="user--id">${personChosen.id}</span></h6>
      <label for"changeName">Change name: </label>
        <input class="form-control mt-1 mb-3" type="text" name="changeName" id="changeName" value="${personChosen.fullName}">
        <label for"changeAge">Change age: </label>
        <input class="form-control mt-1 mb-3" type="number" name="changeAge" id="changeAge" value="${personChosen.age}">
        <label for"changeEmail">Change email: </label>
        <input class="form-control mt-1 mb-3" type="email" name="changeEmail" id="changeEmail" value="${personChosen.email}">
        <select id="changeGender" class="form-select mt-2">
          <option value="male") >Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label class="mt-3" for"changeHeight">Change height(m): </label>
        <input class="form-control mt-1 mb-3" type="text" name="changeHeight" id="changeHeight" value="${personChosen.height}">
        <label for"changeWeight">Change weight(kg): </label>
        <input class="form-control mt-1 mb-3" type="text" name="changeWeight" id="changeWeight" value="${personChosen.weight}">
        <label for"changeAddress">Change Address: </label>
        <textarea class="form-control" mt-1 mb-3 id="changeAddress">${personChosen.address} </textarea>
        <div class="btn-group mt-3">
          <button data-bs-dismiss="modal"  type="submit" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary ml-3" data-bs-dismiss="modal" style="margin-left: 5px;">Cancel</button>
        </div>
      `;
        if (personChosen.gender === "male") $("#changeGender").value = "male";
        else if (personChosen.gender === "female") $("#changeGender").value = "female";
        else $("#changeGender").value = "other";
    }
});
//Handle change form actions
$("#changeForm").addEventListener("submit", (e)=>{
    myUtility.scrollTop();
    e.preventDefault();
    let userId = parseInt($(".user--id").innerText);
    let changeName = $("#changeName").value;
    let changeAge = $("#changeAge").value;
    let changeEmail = $("#changeEmail").value;
    let changeGender = $("#changeGender").value;
    let changeHeight = $("#changeHeight").value;
    let changeWeight = $("#changeWeight").value;
    let changeAddress = $("#changeAddress").value;
    //Edit in store
    PersonStore.editPersonToLocal(changeName, changeAge, changeEmail, changeGender, changeHeight, changeWeight, changeAddress, userId);
    UI.showMsg("Edit successful!", "alert-success");
    myUtility.clearTable();
    UI.displayPerson();
});
//Event generate 10 data and add to list and local storage:
$("#generateBtn").addEventListener("click", (e)=>{
    e.preventDefault();
    if (confirm("Are you sure to generate 10 random data?")) {
        for(let i = 0; i < 10; i++)// log(DataHandler.generateData());
        PersonStore.addPersonToLocal(DataHandler.generateData());
        myUtility.clearTable();
        UI.displayPerson();
        myUtility.scrollTop();
        UI.showMsg("Random users generated!", "alert-success");
    }
});
//Event empty Data:
$("#emptyBtn").addEventListener("click", (e)=>{
    e.preventDefault();
    if (confirm("Are you sure to clear all data?")) {
        localStorage.clear();
        myUtility.clearTable();
        myUtility.scrollTop();
        UI.showMsg("All data cleared!", "alert-success");
    }
});
//Event search Data:
$("#searchForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    let keywords = $("#searchInput").value;
    let searchType = $("#searchType").value;
    if (keywords.length !== 0) DataHandler.filterData(keywords, searchType);
});
//Event reload table:
$("#reload").addEventListener("click", (e)=>{
    myUtility.clearTable();
    UI.displayPerson();
});

},{"./PersonModel.js":"j645V","./utilityFnc.js":"kOPDm","./uiActionHandler.js":"dHe3Y","./localStorageHandler.js":"h9ycJ","./dataHandler.js":"bkQXA"}],"j645V":[function(require,module,exports) {
const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
// //import things
const myUtility = require("./utilityFnc.js");
//Class Person constructor:
class Person {
    constructor(fullName, age, email, gender, height, weight, address, id = myUtility.generateId()){
        this.fullName = fullName;
        this.age = age;
        this.email = email;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.address = address;
        this.id = id;
        this.bmi = this.calculateBMI();
        this.healthStatus = this.guessHealth();
    }
    calculateBMI = ()=>{
        const bmi = this.weight / Math.pow(this.height, 2);
        return bmi.toFixed(1);
    };
    guessHealth = ()=>{
        const bmi = this.calculateBMI();
        switch(true){
            case bmi < 18.5:
                return "underweight";
            case bmi <= 24.9:
                return "normal weight";
            case bmi <= 29.9:
                return "overweight";
            case bmi >= 30:
                return "obesity";
        }
    };
}
module.exports = Person;

},{"./utilityFnc.js":"kOPDm"}],"kOPDm":[function(require,module,exports) {
const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
//Utility namespace:
var myUtility = myUtility || {};
// Generate random ID:
myUtility.generateId = (length = 8)=>{
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
};
//Get gender:
myUtility.getGender = ()=>{
    let genderArr = document.getElementsByName("gender");
    let gender;
    genderArr.forEach((el)=>{
        if (el.checked) gender = el.value;
    });
    return gender;
};
//Scroll to top
myUtility.scrollTop = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//Clear field
myUtility.clearInput = ()=>{
    $("#fullName").value = "";
    $("#email").value = "";
    $("#height").value = "";
    $("#weight").value = "";
    $("#address").value = "";
};
//clear output table before add or remove;
myUtility.clearTable = ()=>{
    while($("#output").firstChild)$("#output").removeChild($("#output").firstChild);
};
module.exports = myUtility;

},{}],"dHe3Y":[function(require,module,exports) {
const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
class UI {
    // displayPerson from Arr
    static displayPerson() {
        let personArr = PersonStore.getPersonsFromLocal();
        personArr.forEach((person)=>UI.addPersonToTable(person)
        );
    }
    // show output to table
    static addPersonToTable(person) {
        const output = $("#output");
        const tr = document.createElement("tr");
        tr.innerHTML = `
    <td>${person.id}</td>
    <td>${person.fullName}</td>
    <td>${person.age}</td>
    <td>${person.email}</td>
    <td>${person.gender}</td>
    <td>${person.bmi}</td>
    <td>${person.healthStatus}</td>
    <td>
      <button data-bs-toggle="modal" data-bs-target="#editModal"
      class="btn btn-secondary edit" >EDIT</button>
      <a href="#" class="btn btn-danger delete">DELETE</a>
    </td>`;
        tr.classList.add("table-active");
        output.appendChild(tr);
    }
    //Pop up message
    static showMsg = (msg, msgClass)=>{
        const div = document.createElement("div");
        const mess = document.createTextNode(msg);
        div.classList.add("alert", msgClass);
        div.appendChild(mess);
        div.style.width = "75%";
        div.style.margin = "auto";
        div.style.marginBottom = "15px";
        $(".container").insertBefore(div, $("#userForm"));
        setTimeout(()=>$(".alert").remove()
        , 2500);
    };
    // Form validation handle
    static formValidate = (fullName, age, email, height, weight, address)=>{
        let isValidate = true;
        let emailRegex = new RegExp("[a-z0-9]+@[a-z]{1,15}.[a-z]{2,3}", "gi");
        // check full name
        if (fullName.length === 0 || fullName.length > 50) {
            UI.showMsg("Please enter full name!", "alert-danger");
            isValidate = false;
        }
        //check age
        if (age.length === 0) {
            UI.showMsg("Please enter your age", "alert-danger");
            isValidate = false;
        }
        //check email
        if (!emailRegex.test(email)) {
            UI.showMsg("Incorrect email, please try again", "alert-danger");
            isValidate = false;
        }
        //check height
        if (isNaN(height)) {
            UI.showMsg("Height must be number, eg: 1.65 ( equal 1m65)", "alert-danger");
            isValidate = false;
        }
        //check weight
        if (isNaN(weight)) {
            UI.showMsg("Weight must be number, eg: 60.5 ( equal 60.5kg)", "alert-danger");
            isValidate = false;
        }
        //check address
        if (address.length > 100) {
            UI.showMsg("Address must be < 100 character", "alert-danger");
            isValidate = false;
        }
        return isValidate;
    };
    // Remove from UI
    static removePerson(personTr) {
        personTr.remove();
    }
}
// Class handle local storage actions
class PersonStore {
    static getPersonsFromLocal() {
        let persons;
        if (localStorage.getItem("persons") === null) persons = [];
        else persons = JSON.parse(localStorage.getItem("persons"));
        return persons;
    }
    static addPersonToLocal(person) {
        let persons = PersonStore.getPersonsFromLocal();
        persons.push(person);
        localStorage.setItem("persons", JSON.stringify(persons));
    }
    static removePersonFromLocal(personId) {
        let persons = PersonStore.getPersonsFromLocal();
        persons = persons.filter((el)=>el.id !== personId
        );
        localStorage.setItem("persons", JSON.stringify(persons));
    }
    static editPersonToLocal(changeName, changeAge, changeEmail, changeGender, changeHeight, changeWeight, changeAddress, userId) {
        let changePerson = new Person(changeName, changeAge, changeEmail, changeGender, changeHeight, changeWeight, changeAddress, userId);
        let persons = PersonStore.getPersonsFromLocal();
        persons.forEach((person)=>{
            if (person.id === userId) person.fullName = changePerson.fullName, person.age = changePerson.age, person.email = changePerson.email, person.gender = changePerson.gender, person.height = changePerson.height, person.weight = changePerson.weight, person.address = changePerson.address, person.bmi = changePerson.bmi, person.healthStatus = changePerson.healthStatus;
        });
        localStorage.setItem("persons", JSON.stringify(persons));
    }
}
module.exports = UI;

},{}],"h9ycJ":[function(require,module,exports) {
const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
//Import things
const Person = require("./PersonModel.js");
// Class handle local storage actions
class PersonStore {
    static getPersonsFromLocal() {
        let persons;
        if (localStorage.getItem("persons") === null) persons = [];
        else persons = JSON.parse(localStorage.getItem("persons"));
        return persons;
    }
    static addPersonToLocal(person) {
        let persons = PersonStore.getPersonsFromLocal();
        persons.push(person);
        localStorage.setItem("persons", JSON.stringify(persons));
    }
    static removePersonFromLocal(personId) {
        let persons = PersonStore.getPersonsFromLocal();
        persons = persons.filter((el)=>el.id !== personId
        );
        localStorage.setItem("persons", JSON.stringify(persons));
    }
    static editPersonToLocal(changeName, changeAge, changeEmail, changeGender, changeHeight, changeWeight, changeAddress, userId) {
        let changePerson = new Person(changeName, changeAge, changeEmail, changeGender, changeHeight, changeWeight, changeAddress, userId);
        let persons = PersonStore.getPersonsFromLocal();
        persons.forEach((person)=>{
            if (person.id === userId) person.fullName = changePerson.fullName, person.age = changePerson.age, person.email = changePerson.email, person.gender = changePerson.gender, person.height = changePerson.height, person.weight = changePerson.weight, person.address = changePerson.address, person.bmi = changePerson.bmi, person.healthStatus = changePerson.healthStatus;
        });
        localStorage.setItem("persons", JSON.stringify(persons));
    }
}
module.exports = PersonStore;

},{"./PersonModel.js":"j645V"}],"bkQXA":[function(require,module,exports) {
const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
//Import things
const myUtility = require("./utilityFnc.js");
const Person = require("./PersonModel.js");
const PersonStore = require("./localStorageHandler.js");
const UI = require("./uiActionHandler.js");
//Data generate & searching
class DataHandler {
    static generateData() {
        let lastNameList = [
            "Quang Teo",
            "Giang Map",
            "Song Hay Chet",
            "Pop Disco",
            "Never Mind",
            "Anh", 
        ];
        let firstNameList = [
            "Bui",
            "Pham",
            "Nguyen",
            "Tran",
            "Ho",
            "Trinh",
            "Michael", 
        ];
        let genders = [
            "male",
            "female",
            "other"
        ];
        let addresses = [
            "Da Nang",
            "Ninh Binh",
            "Viet Nam",
            "Hoa Ki",
            "Nhat Ban",
            "Quang Nam", 
        ];
        let randomName = firstNameList[Math.round(Math.random() * (firstNameList.length - 1))] + " " + lastNameList[Math.round(Math.random() * (lastNameList.length - 1))];
        let randomAge = Math.round(Math.random() * 35 + 15);
        let randomEmail = randomName.split(" ").join("") + "@gmail.com";
        let randomGender = genders[Math.round(Math.random() * (genders.length - 1))];
        let randomHeight = (Math.random() * (1.9 - 1.5) + 1.5).toFixed(2);
        let randomWeight = (Math.random() * 60 + 40).toFixed(1);
        let randomAddress = addresses[Math.round(Math.random() * (addresses.length - 1))];
        let person = new Person(randomName, randomAge, randomEmail, randomGender, randomHeight, randomWeight, randomAddress);
        return person;
    }
    static filterData(keywords, searchType) {
        let personsArr = PersonStore.getPersonsFromLocal();
        let matches;
        const regex = new RegExp(`${keywords}`, "gi");
        switch(searchType){
            case "fullName":
                matches = personsArr.filter((person)=>person.fullName.match(regex)
                );
                break;
            case "email":
                matches = personsArr.filter((person)=>person.email.match(regex)
                );
                break;
            case "bmi":
                matches = personsArr.filter((person)=>person.bmi.match(regex)
                );
                break;
        }
        myUtility.clearTable();
        matches.forEach((match)=>UI.addPersonToTable(match)
        );
    }
}
module.exports = DataHandler;

},{"./utilityFnc.js":"kOPDm","./PersonModel.js":"j645V","./localStorageHandler.js":"h9ycJ","./uiActionHandler.js":"dHe3Y"}]},["a8QCm","bkmZB"], "bkmZB", "parcelRequire1212")

//# sourceMappingURL=index.db665bbf.js.map
