(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{"../node_modules/highlight.js/lib/languages/qml.js":function(module,exports,__webpack_require__){function source(re){return re?"string"==typeof re?re:re.source:null}function concat(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var joined=args.map((function(x){return source(x)})).join("");return joined}__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),module.exports=function qml(hljs){var QML_IDENT_RE="[a-zA-Z_][a-zA-Z0-9\\._]*",ID_ID={className:"attribute",begin:"\\bid\\s*:",starts:{className:"string",end:QML_IDENT_RE,returnEnd:!1}},QML_ATTRIBUTE={begin:QML_IDENT_RE+"\\s*:",returnBegin:!0,contains:[{className:"attribute",begin:QML_IDENT_RE,end:"\\s*:",excludeEnd:!0,relevance:0}],relevance:0},QML_OBJECT={begin:concat(QML_IDENT_RE,/\s*\{/),end:/\{/,returnBegin:!0,relevance:0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:QML_IDENT_RE})]};return{name:"QML",aliases:["qt"],case_insensitive:!1,keywords:{keyword:"in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4d Promise"},contains:[{className:"meta",begin:/^\s*['"]use (strict|asm)['"]/},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,{className:"string",begin:"`",end:"`",contains:[hljs.BACKSLASH_ESCAPE,{className:"subst",begin:"\\$\\{",end:"\\}"}]},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,{className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:hljs.C_NUMBER_RE}],relevance:0},{begin:"("+hljs.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.REGEXP_MODE,{begin:/</,end:/>\s*[);\]]/,relevance:0,subLanguage:"xml"}],relevance:0},{className:"keyword",begin:"\\bsignal\\b",starts:{className:"string",end:"(\\(|:|=|;|,|//|/\\*|$)",returnEnd:!0}},{className:"keyword",begin:"\\bproperty\\b",starts:{className:"string",end:"(:|=|;|,|//|/\\*|$)",returnEnd:!0}},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:/[A-Za-z$_][0-9A-Za-z$_]*/}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]}],illegal:/\[|%/},{begin:"\\."+hljs.IDENT_RE,relevance:0},ID_ID,QML_ATTRIBUTE,QML_OBJECT],illegal:/#/}}}}]);