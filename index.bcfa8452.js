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
})({"e3g9T":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "339fa845bcfa8452";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7ZSs6":[function(require,module,exports) {
var _camera = require("./camera");
var _quaternion = require("./quaternion");
// via https://people.sc.fsu.edu/~jburkardt/data/ply/dodecahedron.ply
// now hosted statically! (note: Object.values is ES2017)
const dodecahedron_verts = Object.values(require("79864e08ecb33c29"));
const dodecahedron_faces = Object.values(require("5dc6853b2771a1a6")) // If rendering a wireframe for debug, use "./dodeca_lines.json"
;
// debug
// const dodecahedron_verts: quat.Point3D[] = [new quat.Point3D(0, 0, -2)];
// @ts-ignore
const canvas = document.getElementById("theCanvas");
const c = new _camera.Camera(canvas); //TODO: couple this to near plane length
const m = new _camera.Model(dodecahedron_verts, dodecahedron_faces);
let m2 = new _camera.Model(dodecahedron_verts, dodecahedron_faces);
m2.translateModel(new _quaternion.Point3D(-2, 0.5, 0));
_camera.addModelToWorld(c, m);
_camera.addModelToWorld(c, m2);
// Animation
// Register those callbacks!
var theta = 0;
var phi = 0;
document.getElementById("theta").addEventListener("input", (event)=>{
    // @ts-ignore
    let value = event.target.value - event.target.defaultValue;
    theta = value / 50 * Math.PI; // Convert value to radians
    c.theta = theta;
});
document.getElementById("phi").addEventListener("input", (event)=>{
    // @ts-ignore
    let value = event.target.value - event.target.defaultValue;
    phi = value / 50 * (Math.PI / 2);
    c.phi = phi;
});
// Navigation keys
document.addEventListener("keydown", (event)=>{
    const keyName = event.key;
    //console.log(keyName);
    const speed = 0.1 // Better way to specify this?
    ;
    if (keyName === "ArrowDown") c.position.z += speed;
    if (keyName === "ArrowUp") c.position.z -= speed;
    if (keyName === "ArrowLeft") c.position.x -= speed;
    if (keyName === "ArrowRight") c.position.x += speed;
    if (keyName === "q") c.position.y -= speed;
    if (keyName === "e") c.position.y += speed;
});
function draw() {
    let v = new _quaternion.Point3D(1, 0, 0); // 'wlog'
    m.rotateModel(v);
    m2.rotateModel(new _quaternion.Point3D(0, 0, 1));
    _camera.renderWorld(c);
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);

},{"./camera":"3MINb","./quaternion":"kvjoR","79864e08ecb33c29":"4Vz93","5dc6853b2771a1a6":"8uk9L"}],"3MINb":[function(require,module,exports) {
// Hurray, ECMAScript 2015!
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addModelToWorld", ()=>addModelToWorld) //export * from "./camera";
;
parcelHelpers.export(exports, "renderWorld", ()=>renderWorld);
parcelHelpers.export(exports, "Camera", ()=>Camera);
parcelHelpers.export(exports, "Model", ()=>Model);
var _quaternion = require("./quaternion");
// A model (object) living in the world.
// A model should have 3D coordinates in 'model space'
// So that the center of mass of the model is the origin in model space
class Model {
    constructor(verts, faces, name = ""){
        this.name = name;
        this.verts = verts;
        this.faces = [];
        faces.forEach((face)=>this.addFace(face));
    }
    isValidFace(face) {
        let nverts = this.verts.length;
        if (face[0] != face.length - 1) return false; // PLY format not followed
        let inds = face.slice(1, face.length);
        if (!inds.every((ind)=>nverts >= ind)) return false;
        return true;
    }
    addFace(face) {
        if (this.isValidFace(face)) this.faces.push(face.slice(1, face.length));
        else {
            console.log(face);
            throw `Tried to add an invalid face to Model ${this.name}`;
        }
    }
    rotateModel(v, auto = true) {
        if (auto) {
            var time = performance.now() / 60 ** 4;
            this.verts = (0, _quaternion.rotatePoints)(this.verts, v, 2 * Math.PI * time);
        }
    }
    translateModel(v) {
        this.verts = this.verts.map((vert)=>new (0, _quaternion.Point3D)(vert.x + v.x, vert.y + v.y, vert.z + v.z));
    }
    detectCollision(p) {
    // TODO
    // It probably makes sense to use spheres and boxes for collision geometry
    // And some level set stuff
    }
}
var // TODO: move this to quaternion
RotationAxis;
(function(RotationAxis) {
    RotationAxis[RotationAxis["zAxis"] = 0] = "zAxis";
    RotationAxis[RotationAxis["xyPlane"] = 1] = "xyPlane";
})(RotationAxis || (RotationAxis = {}));
class CanvasPoint {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}
class Camera {
    constructor(canvas){
        this.position = new (0, _quaternion.Point3D)(0, 0, 5);
        this.near = -0.01;
        this.far = -100;
        this.xlim = Math.abs(this.near) * Math.sqrt(3);
        this.ylim = Math.abs(this.near);
        this.canvas_xlim = canvas.width / 2;
        this.canvas_ylim = canvas.height / 2;
        this.ctx = canvas.getContext("2d");
        this.radius = 2;
        this.models = [];
        this.theta = 0;
        this.phi = 0;
    }
}
// Overload a point with a model so we can rotate things independently.
function addModelToWorld(c, m) {
    c.models.push(m);
}
/* The world is a set of points. To make the camera see a point, we need to
    add it to the world. */ function renderModel(c, m) {
    // No error handling here!
    m.faces.forEach((face)=>{
        let pts = face.map((idx)=>snapPoint(c, m.verts[idx]));
        // Do not render pts behind camera
        if (!pts.every((el)=>el != null)) return;
        pts.forEach((p)=>{
            c.ctx.beginPath();
            c.ctx.arc(p.x, p.y, c.radius, 0, Math.PI * 2);
            c.ctx.closePath();
            c.ctx.fill();
        });
        c.ctx.beginPath();
        c.ctx.moveTo(pts[0].x, pts[0].y);
        pts.slice(1, pts.length).forEach((pt)=>c.ctx.lineTo(pt.x, pt.y));
        //c.ctx.stroke(); // use c.ctx.fill() for fill triangles
        c.ctx.fillStyle = `rgb(0, ${m.faces.indexOf(face) * 8}, 0)`;
        c.ctx.fill();
    });
}
// TODO: refactor to handle more than 1 model
function renderWorld(c) {
    c.ctx.clearRect(0, 0, c.canvas_xlim * 2, c.canvas_ylim * 2);
    //renderModel(c, c.models[1]);
    c.models.forEach((model)=>renderModel(c, model));
}
/* Internals */ function projectPoint(c, p) {
    let near = -0.01;
    let far = -100;
    if (!(p.z < near && p.z > far)) return null;
    // The ratio of the real y to the projected y is yproj / n = y / z =>
    // yproj = (n/z) y
    return [
        p.x * (near / p.z),
        p.y * (near / p.z),
        p.z
    ];
}
// Analogous to the "viewing transform"
function snapPoint(c, p) {
    // Camera translation
    let tmp = [
        p.x,
        p.y,
        p.z
    ].map((el, i)=>el - [
            c.position.x,
            c.position.y,
            c.position.z
        ][i]);
    let pt = new (0, _quaternion.Point3D)(tmp[0], tmp[1], tmp[2]);
    // Camera rotation
    let theta_axis = new (0, _quaternion.Point3D)(0, 1, 0);
    let phi_axis = new (0, _quaternion.Point3D)(-1, 0, 0);
    pt = (0, _quaternion.rotatePoints)([
        pt
    ], theta_axis, c.theta)[0];
    pt = (0, _quaternion.rotatePoints)([
        pt
    ], phi_axis, c.phi)[0];
    let projected = projectPoint(c, pt);
    if (projected === null) return null;
    let [x, y, z] = projected;
    y = -y; // The canvas API is weird: pos y corresponds to down
    // transform world coordinates to canvas coordinates.
    x /= c.xlim * 2;
    y /= c.ylim * 2;
    x *= c.canvas_xlim * 2;
    y *= c.canvas_ylim * 2;
    // Translate the points to the canvas origin.
    x += c.canvas_xlim;
    y += c.canvas_ylim;
    return new CanvasPoint(x, y);
}

},{"./quaternion":"kvjoR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvjoR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point3D", ()=>Point3D);
parcelHelpers.export(exports, "Quaternion", ()=>Quaternion);
parcelHelpers.export(exports, "rotatePoints", ()=>rotatePoints);
class Quaternion {
    constructor(r, i, j, k){
        this.r = r;
        this.i = i;
        this.j = j;
        this.k = k;
    }
}
class Point3D {
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    plus(other) {
        return new Point3D(this.x + other.x, this.y + other.y, this.z + other.z);
    }
}
// Utilities for quaternions
function multiply(q, r) {
    let a = r.r * q.r - r.i * q.i - r.j * q.j - r.k * q.k;
    let b = r.r * q.i + r.i * q.r - r.j * q.k + r.k * q.j;
    let c = r.r * q.j + r.i * q.k + r.j * q.r - r.k * q.i;
    let d = r.r * q.k - r.i * q.j + r.j * q.i + r.k * q.r;
    return new Quaternion(a, b, c, d);
}
function invert(q) {
    let scaling = q.r ** 2 + q.i ** 2 + q.j ** 2 + q.k ** 2;
    let res = [
        q.r,
        -q.i,
        -q.j,
        -q.k
    ];
    res.forEach((el)=>el / scaling);
    // "...res" doesn't work :(
    return new Quaternion(res[0], res[1], res[2], res[3]);
}
function pointToQuaternion(p) {
    // based on the 1D stereographic projection.
    let x0_squared = p.x ** 2 + p.y ** 2 + p.z ** 2;
    let y0 = 1 - 2 / (1 + x0_squared);
    let scaling = Math.sqrt((1 - y0 ** 2) / x0_squared);
    let rescaled = [
        p.x,
        p.y,
        p.z
    ].map((el)=>scaling * el);
    return new Quaternion(y0, rescaled[0], rescaled[1], rescaled[2]);
}
function quaternionToPoint(q) {
    let y0 = q.r;
    let norm_squared = 2 / (1 - y0) - 1;
    let scaling = Math.sqrt(norm_squared / (1 - y0 ** 2));
    let p = [
        q.i,
        q.j,
        q.k
    ].map((el)=>scaling * el);
    return new Point3D(p[0], p[1], p[2]);
}
// Rotate p *around* the axis v ccw by the angle theta.
function rotatePoints(p, v, theta) {
    let angle = theta / 2;
    let scalar_part = Math.cos(angle);
    let vector_part = [
        v.x,
        v.y,
        v.z
    ].map((el)=>Math.sin(angle) * el);
    let polar_quaternion = new Quaternion(scalar_part, vector_part[0], vector_part[1], vector_part[2]);
    let polar_inverse = invert(polar_quaternion);
    let result = p.map((pt)=>pointToQuaternion(pt)).map((quat)=>multiply(polar_quaternion, quat)).map((semiquat)=>multiply(semiquat, polar_inverse)).map((res)=>quaternionToPoint(res));
    return result;
}
// "tests"
{
    const point = new Point3D(2, 0, 0);
    let quaternion = pointToQuaternion(point);
    console.log(quaternion);
    // Expected: {r: 0.4, i: 0.8, j: 0, k: 0}
    let transformed = rotatePoints([
        point
    ], new Point3D(0, 0, 1), Math.PI / 2.);
    console.log(transformed);
// Expected: {x: 0, y: 2, z: 0}
}{
    const point = new Point3D(Math.sqrt(2), 0, 0);
    let transformed = rotatePoints([
        point
    ], new Point3D(0, 0, 1), Math.PI / 4.);
    console.log(transformed);
// Expected: {x: 1, y: 1, z: 0}
}
},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4Vz93":[function(require,module,exports) {
module.exports = JSON.parse('{"1":{"x":-0.57735,"y":-0.57735,"z":0.57735},"2":{"x":0.934172,"y":0.356822,"z":0},"3":{"x":0.934172,"y":-0.356822,"z":0},"4":{"x":-0.934172,"y":0.356822,"z":0},"5":{"x":-0.934172,"y":-0.356822,"z":0},"6":{"x":0,"y":0.934172,"z":0.356822},"7":{"x":0,"y":0.934172,"z":-0.356822},"8":{"x":0.356822,"y":0,"z":-0.934172},"9":{"x":-0.356822,"y":0,"z":-0.934172},"10":{"x":0,"y":-0.934172,"z":-0.356822},"11":{"x":0,"y":-0.934172,"z":0.356822},"12":{"x":0.356822,"y":0,"z":0.934172},"13":{"x":-0.356822,"y":0,"z":0.934172},"14":{"x":0.57735,"y":0.57735,"z":-0.57735},"15":{"x":0.57735,"y":0.57735,"z":0.57735},"16":{"x":-0.57735,"y":0.57735,"z":-0.57735},"17":{"x":-0.57735,"y":0.57735,"z":0.57735},"18":{"x":0.57735,"y":-0.57735,"z":-0.57735},"19":{"x":0.57735,"y":-0.57735,"z":0.57735},"20":{"x":-0.57735,"y":-0.57735,"z":-0.57735}}');

},{}],"8uk9L":[function(require,module,exports) {
module.exports = JSON.parse('{"0":[3,1,2,18],"1":[3,1,18,11],"2":[3,1,11,14],"3":[3,1,13,7],"4":[3,1,7,17],"5":[3,1,17,2],"6":[3,3,4,19],"7":[3,3,19,8],"8":[3,3,8,15],"9":[3,3,16,12],"10":[3,3,12,0],"11":[3,3,0,4],"12":[3,3,15,6],"13":[3,3,6,5],"14":[3,3,5,16],"15":[3,1,14,5],"16":[3,1,5,6],"17":[3,1,6,13],"18":[3,2,17,9],"19":[3,2,9,10],"20":[3,2,10,18],"21":[3,4,0,10],"22":[3,4,10,9],"23":[3,4,9,19],"24":[3,7,8,19],"25":[3,7,19,9],"26":[3,7,9,17],"27":[3,6,15,8],"28":[3,6,8,7],"29":[3,6,7,13],"30":[3,5,14,11],"31":[3,5,11,12],"32":[3,5,12,16],"33":[3,10,0,12],"34":[3,10,12,11],"35":[3,10,11,18]}');

},{}]},["e3g9T","7ZSs6"], "7ZSs6", "parcelRequire94c2")

//# sourceMappingURL=index.bcfa8452.js.map
